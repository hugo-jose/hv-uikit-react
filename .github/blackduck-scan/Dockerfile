# Base image 
FROM pnt-docker.repo.orl.eng.hitachivantara.com/blackducksoftware/detect:7

# Copies script to the filesystem 
COPY blackduck-check.sh /blackduck-check.sh

# change permission to execute the script and
RUN chmod +x /blackduck-check.sh

# file to execute when the docker container starts up
ENTRYPOINT ["/blackduck-check.sh"]