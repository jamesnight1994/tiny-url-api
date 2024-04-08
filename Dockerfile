# Use Node.js as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Generate Prisma client
# RUN npx prisma generate


# Build the NestJS app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application in production
CMD ["npm", "run", "start:prod"]
