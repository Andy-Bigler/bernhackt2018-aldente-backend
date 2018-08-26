FROM node:10.9.0-alpine

MAINTAINER Benjamin Wolf <Benjamin.Wolf@swisscom.com>

# Copy our entrypoint to docker container
COPY /docker_entrypoint.sh /opt/bin/docker_entrypoint.sh

WORKDIR /opt/aldente/backend/
COPY . .

RUN apk update && \
    apk upgrade && \
    apk add --no-cache nodejs npm openrc mariadb mariadb-client

RUN /usr/bin/mysql_install_db --user=mysql
RUN npm install

EXPOSE 3306 3000

ENTRYPOINT ["/opt/bin/docker_entrypoint.sh"]