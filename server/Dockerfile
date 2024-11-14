# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the required dependencies
RUN npm install

# Copy all the files from your local machine to the container's working directory
COPY . .

# Set environment variables (optional, since we're using .env file)
# ENV DATABADE_PASSWORD=a7NeOvZd96E0bBR0
# ENV JWT_EXPIRY=2d
# ENV JWT_PASSWORD=12345

# Expose the port that the backend server will run on
EXPOSE 5000

# Command to run the app (assuming your main server file is `index.js`)
CMD ["node", "index.js"]
