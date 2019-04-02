# Builder
FROM node:8.9.0-alpine as builder

# Set working directory
WORKDIR /app

# Install dependencies
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm config set unsafe-perm true
RUN npm install --silent
RUN npm install react-scripts@1.1.5 -g --silent

# Set environment variables
ENV NODE_PATH=src/
ENV REACT_APP_ENV_NAME=production

# Create build
COPY . /app
RUN npm run build

# Worker
FROM nginx:1.15.6-alpine

# Update nginx conf
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Copy static files
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
