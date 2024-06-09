# Use an offical JDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /

# Copy the spring Boot jar to the container
COPY target/demo-0.0.1-SNAPSHOT.jar //

# Expose the port the app runs on
EXPOSE 8080

# Comand to run the Spring Boot app
ENTRYPOINT ["java", "-jar", "/demo-0.0.1-SNAPSHOT.jar"]

# The following command is used to create a my sql image:
    # docker run --detach --name mysql -p 6604:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=test -e MYSQL_USER=samini -e MYSQL_PASSWORD=aaAA11!! -d mysql
# The following docker commands interact with Database(links to mysql conainer) with mysql client
    # docker run -it --link mysql:mysql --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -p"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'