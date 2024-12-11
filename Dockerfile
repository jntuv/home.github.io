# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy the index.html file to the Nginx web server directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 to access the webpage
EXPOSE 80
