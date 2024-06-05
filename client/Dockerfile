# Use the official Node.js image as the parent image
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app/

# Copy the rest of the application
COPY public/ /app/public
COPY src/ /app/src
COPY package*.json  /app/
COPY .env /app/

# Install the dependnecies
RUN npm install

# Build the React application
 RUN npm run build

# Serve the React app using a simple web server
# RUN npm install -g serve

# Expose the port the app runs on
# EXPOSE 3000

# Command to run the app
CMD ["npm","start"]