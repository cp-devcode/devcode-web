# Step 1: Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use a smaller web server to serve the built app
FROM nginx:alpine

# Step 8: Copy the build output from the previous step to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 (default HTTP port)
EXPOSE 2080

# Step 10: Start nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
