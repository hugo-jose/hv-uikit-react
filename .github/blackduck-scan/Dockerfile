# Base image 
FROM pnt-docker.repo.orl.eng.hitachivantara.com/alpine-3-13-6-open-jre-11

# installs required packages
RUN	apk add --no-cache \
  bash \
  ca-certificates \
  curl \
  jq

# updates coreutils
RUN apk add --update coreutils

ENV BDS_JAVA_HOME=/usr/bin/java

# Copies script to the filesystem 
COPY blackduck-check.sh /blackduck-check.sh

# change permission to execute the script and
RUN chmod +x /blackduck-check.sh

# file to execute when the docker container starts up
ENTRYPOINT ["/blackduck-check.sh"]