# Stage 1: Build the Angular application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the Angular application
FROM node:14

# Install http-server globally
RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy the built Angular application from the previous stage
COPY --from=build /app/dist/your-angular-app /app

# Expose port 8080
EXPOSE 8080

# Start the http-server
CMD ["http-server", "-p", "8080"]
