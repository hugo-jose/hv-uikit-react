# Blackduck Scan GitHub Action

GitHub Action to scan a project, upload the results to the designated Blackduck server and check if it results in unreviewed components. If so, the action will be marked as failed.

## Inputs

## `server-url`
**Required** Blackduck instance URL.

## `key`
**Required** Access token to the Blackduck instance to enable to connect and consume the rest API.

## `version`
**Required** Name of the version where the results should be published on Blackduck. 

## `packages`
**Required** Packages and respective paths to be processed with the following JSON structure:
```bash
[
  {
      "name": "<NAME_OF_BLACKDUCK_PROJECT>",
      "paths": [
          {
              "path": "<PATH_WITHIN_PWD_TO_SCAN_FOR_COMPONENTS>"
          }
      ]
  }
]
```

## `exceptions`
**Required** List of components that should be discarded from the validation of unreviewed components
(e.g.: artifacts produced by project that don't include external dependences which we control the licensing). 

## `base-path`
**Required** The packages location base path

## Example usage

```bash
uses: ./.github/blackduck-scan
with:
    server_url: '<BLACKDUCK_HOST>'
    key: '<BLACKDUCK_TOKEN>'
    version: 'master'
    packages: '[{"name": "<NAME_OF_BLACKDUCK_PROJECT>", "paths": [{"path": "<PATH_WITHIN_PWD_TO_SCAN_FOR_COMPONENTS>"}]}]'
    exceptions: '@hitachivantara/uikit-react-core @hitachivantara/uikit-react-lab'
    base_path: '${{ env.GITHUB_WORKSPACE }}'
```
