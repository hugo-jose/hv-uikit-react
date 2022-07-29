#!/bin/sh -l

# This script executes the blackduck scan for a project and validates if new components are identified and unreviewed.
# Any unreviewed components causes the validation to fail. The goal is to prevent a release with unreviewed components.
# 
# DEPENDENCIES: jq
#
## PARAMETERS ##
# 1- SERVER_URL -  The URL of the blackduck instance to use.
# Example: <BLACKDUCK_HOST>
#
# 2- KEY - Token to your blackduck instance to enable to connect and consume the rest API.
#
# 3- PACKAGES - Packages to process and respective paths with the following JSON structure:
# [
#   {
#       "name": "<NAME_OF_BLACKDUCK_PROJECT>",
#       "paths": [
#           {
#               "path": "<PATH_WITHIN_PWD_TO_SCAN_FOR_COMPONENTS>"
#           }
#       ]
#   }
# ]
#
# 4- EXCEPTIONS - The list of components that should be discarded from the validation of unreviewed components
# (e.g.: artifacts produced by project that don't include external dependences which we control the licensing)
# Example:'@hitachivantara/uikit-react-core @hitachivantara/uikit-react-lab'
#
# 5- VERSION - The version where the results should be published on blackduck.
# Example: master
#
# 6- BASE_PATH - The packages location base path
#

set -e

BLACKDUCK_URL="$1"
BLACKDUCK_TOKEN="$2"
PACKAGES="$3"
COMPONENT_EXCEPTIONS="$4"
PROJECT_VERSION="$5"
SCAN_BASE_PATH="$6"

# Creates array from the components exceptions list
componentExceptions=$(echo $COMPONENT_EXCEPTIONS)

# Blackduck API authentication endpoint
BLACKDUCK_TOKEN_ENDPOINT="${BLACKDUCK_URL}/api/tokens/authenticate"

DEBUG=0

echo "********************************* Start Blackduck Component Scan *********************************" 

# Download blackduck detect script
curl -k1 https://detect.synopsys.com/detect.sh -o detect.sh 
chmod 777 detect.sh
DETECT_DIR="$SCAN_BASE_PATH"
echo "DETECT_DIR - $DETECT_DIR"

echo "$JAVA_HOME"
echo "$BDS_JAVA_HOME"


DETECT_ARGS="--debug --blackduck.url=$BLACKDUCK_URL --blackduck.api.token=$BLACKDUCK_TOKEN --blackduck.trust.cert=true --detect.project.version.name=$PROJECT_VERSION"

# Run detect script against the provided packages
for row in $(echo "$PACKAGES" | jq -r '.[] | @base64'); do
    _jq() {
      echo ${row} | base64 --decode | jq -r ${1}
    }

    packageName=$(_jq '.name')

    packagePaths=$(_jq '.paths[].path' | tr "\n" " ")
    
    echo ""
    echo "  Package Name: $packageName" 

    for path in $packagePaths 
    do
        echo "  Path: $path" 
        ./detect.sh $DETECT_ARGS --detect.project.name=$packageName --detect.source.path=$DETECT_DIR$path
    done
done

echo "********************************* Finished Blackduck Component Scan *********************************" 

# Check unreviewed components
toReviewedComponentsCount=0


echo "TOKEN - $BLACKDUCK_TOKEN"
echo "ENDPOINT - $BLACKDUCK_TOKEN_ENDPOINT"

# Get Bearer Token
authTokenHeader="token $BLACKDUCK_TOKEN"
bearerToken=$(curl -s --insecure -X POST -H "Accept: application/vnd.blackducksoftware.user-4+json" -H "Authorization: $authTokenHeader" $BLACKDUCK_TOKEN_ENDPOINT  | jq -r '.bearerToken')
echo "Bearer Token - $bearerToken"

if [[ -z ${bearerToken} ]]; then
    echo "Unable to obtain bearer token"
    exit 1
fi

echo "********************************* Checking Blackduck unreviewed components *********************************" 

unreviewedComponentsCount=0

for row in $(echo "$PACKAGES" | jq -r '.[] | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }
    projectName=$(printf %s "$(_jq '.name')")

    # URL Encode Package Name
    encProjectName=$(printf %s "$projectName" | jq -sRr @uri)

    # URL Encode Version 
    encVersion=$(printf %s "$PROJECT_VERSION" | jq -sRr @uri)

    # Get Project href
    projectHref=$(curl -s --insecure -H "Authorization: Bearer $bearerToken" $BLACKDUCK_URL/api/projects?q=name%3A$encProjectName | jq -r '.items[]._meta.href')

    if [[ -z $projectHref ]]; then
        echo "Unable to find project: $projectName"
        exit 1
    fi

    # Get project version href
    projectVersionHref=$(curl -s --insecure -H "Authorization: Bearer $bearerToken" $projectHref/versions?q=versionName%3A$encVersion | jq -r '.items[]._meta.href')

    if [[ -z $projectVersionHref ]]; then
        echo "Unable to find project version: ${PROJECT_VERSION}"
        exit 1
    fi

    # Get unreviewed components
    unreviewedProjectComp=$(curl -s --insecure -H "Accept: application/vnd.blackducksoftware.bill-of-materials-4+json" -H "Authorization: Bearer $bearerToken" $projectVersionHref/components?filter=bomReviewStatus%3Anot_reviewed | jq -r '.items[].componentName')

    ignoredComponents=""
    toReviewComponents=""

    toReviewedProjectCompCount=0

    for comp in "$unreviewedProjectComp"
    do
        isIgnored=false
        for exeptComp in "$componentExceptions"
        do
            if [[ "$exeptComp" == "$comp" ]] ; then
                isIgnored=true
                break
            fi
        done

        case $isIgnored in
            (true)    ignoredComponents="$ignoredComponents $comp";;
            (false)   toReviewComponents="$toReviewComponents $comp"
                      toReviewedProjectCompCount=$(expr $toReviewedProjectCompCount + 1);;
        esac
    done

    echo "   PROJECT NAME: $projectName"
    echo "   PROJECT VERSION: $PROJECT_VERSION"
    echo "   UNREVIEWED COMPONENTS COUNT: $toReviewedProjectCompCount"
    echo "   UNREVIEWED COMPONENTS: $toReviewComponents"
    echo "   IGNORED COMPONENTS: $ignoredComponents"
    echo "" 

    
    unreviewedComponentsCount=$(expr $unreviewedComponentsCount + $toReviewedProjectCompCount)
done

echo "TOTAL UNREVIEWED COMPONENTS: $unreviewedComponentsCount"
echo "**************************** Finished Checking Blackduck unreviewed components ****************************" 

if [[ $unreviewedComponentsCount -gt 0 ]]; then
    exit 1
fi