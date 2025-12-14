# Build Stage
FROM node:lts-alpine AS build
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM nginx:alpine AS runtime

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy built artifacts from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
