# Dockerfiles

In the previous file, we made a 'dockerfile'. This dockerfile is used for instructions on how Docker will build your image. This is the example:

```dockerfile
# ────────────────
# 1) BUILD STAGE
# ────────────────
# 1.0 Getting latest version of node and renaming it to 'builder' to reference later
FROM node:18-alpine AS builder

# 1.1 Set the working directory
WORKDIR /app

# 1.2 Copy package manifests & install deps
COPY package*.json ./
RUN npm install

# 1.3 Copy source & build
COPY . .
RUN npm run build

# ───────────────────
# 2) PRODUCTION STAGE
# ───────────────────
FROM nginx:alpine

# 2.1 Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# 2.2 (Optional) Customize NGINX config if you need SPA fallback:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2.3 Expose port 80 & launch NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Full-stack version

That Dockerfile example only works for front-end; there's no section within that tells the Dockerfile to run the server. Here's a version to build both the front-end and the back-end:

```dockerfile
# ───────────────────
# 1) FRONT-END BUILDER
# ───────────────────
FROM node:18-alpine AS client-builder
WORKDIR /app/client

COPY client/package*.json ./
RUN npm install

COPY client .
RUN npm run build

# ───────────────────
# 2) BACKEND BUILDER
# ───────────────────
FROM node:18-alpine AS server-builder
WORKDIR /app/server

COPY server/package*.json ./
RUN npm install

COPY server .

# ───────────────────
# 3) RUNTIME IMAGE
# ───────────────────
FROM node:18-alpine
WORKDIR /app

# Copy server code + deps
COPY --from=server-builder /app/server /app/server

# Copy client build into server’s public (or whatever your server expects)
COPY --from=client-builder /app/client/dist /app/server/public

WORKDIR /app/server

# Expose the port your server listens on (e.g. 3000)
EXPOSE 3000

# Launch the server (which now serves both API + static assets)
CMD ["node", "index.js"]
```