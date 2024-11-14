# Use the Node.js official image from Docker Hub
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend code into the container
COPY . .

# Build the React application for production
RUN npm run build

# Install an HTTP server to serve the production build
RUN npm install -g serve

# Expose the port that the React app will be running on
EXPOSE 3000

# Start the server to serve the React app
CMD ["serve", "-s", "dist", "-l", "3000"]
