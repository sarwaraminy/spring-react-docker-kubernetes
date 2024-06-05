# Use an offical JDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the spring Boot jar to the container
COPY target/demo-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the app runs on
EXPOSE 8080

# Comand to run the Spring Boot app
ENTRYPOINT ["java", "-jar", "/app/app.jar"]