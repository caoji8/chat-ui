FROM tomcat:9-jdk8
MAINTAINER 46zmx
COPY book.war /usr/local/tomcat/webapps
EXPOSE 8181
CMD ["catalina.sh", "run"]
