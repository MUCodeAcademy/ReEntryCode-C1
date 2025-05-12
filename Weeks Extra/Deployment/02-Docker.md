# Docker

We're going to be using Docker and Kubernetes, since these are both technologies that are used extensively in software development. Even if you don't use these two, you'll certainly use something like this in the future. Docker will let us containerize our project, and Kubernetes will help us manage it.

First, install Docker: https://www.docker.com/products/docker-desktop

Optional: Install the Container Tools VSCode extention: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-containers

Install kubectl: https://kubernetes.io/releases/download/#binaries

Verify that `kubectl` and Kubernetes works in Docker by running: `kubectl get nodes`

## How can Docker help in development?

- The main point is consistent functionality.
- Standardization of applications is huge during the entirety of the dev lifecycle.
- Massively speeds up deployment.
- Allows for consistency across environments to allow for continuous deployment and testing.
- Segregation and Security. By having everything contained (literally) in it's own space it reduces cross contamination of any malicious code / security vulnerabilities that might exist on a non containerized application

## Step By Step Guide

1. Enable Kubernetes in Docker (settings > Kubernetes > enable Kubernetes > apply and restart in the bottom right).
2. Login to docker in the terminal by running `docker login`. It should open up a login activation in the browser for you to input a code from the terminal.
3. Create a file named Dockerfile (explained in more depth in [03-Dockerfile.md](03-Dockerfile.md))

**Keep in mind** this Dockerfile is for front-end only. If you have a backend, look at [03-Dockerfile.md](03-Dockerfile.md) for a full-stack example.

```dockerfile
# ────────────────
# 1) BUILD STAGE
# ────────────────
# 1.0 Getting latest version of node and renaming it to 'builder' to reference later
FROM node:18-alpine AS builder

# 1.1 Set working dir
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
4. Create a .dockerignore file. Just like .gitignore tells Git to ignore certain files, .dockerignore tells Docker that we want to exclude certain files when building the image. Here's an example .dockerignore:
```
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
.env
```
5. In your package.json file, change our script to run on our local network:
```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0 --port 5173",
    // … other scripts …
  }
}
```
6. Navigate to your project's root directory and run: `docker build -t yourusername/my-app:prod .`
7. Push your docker project up to Docker: `docker push yourusername/my-app:prod` 
8. At this point, we can run our app to make sure everything worked so far: `docker run --rm -p 80:80 yourusername/my-app-app:prod`

Go to `localhost` and see if the page loads.

Now that we have the docker container created, we need to set it up with Kubernetes.

9. Create a folder called `k8s` and add a `deployment.yaml` file:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-dev
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: yourdockerhubusername/my-app:v1
        ports:
        - containerPort: 5173
```
and a `service.yaml` file:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  type: NodePort 
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 5173
    nodePort: 30080
```
10. Now we need to deploy it to a Kubernetes cluster. First, make sure that we're using docker-desktop with kubernetes by running this:
```bash
kubectl config use-context docker-desktop
```
It should give you a message saying that we're now using docker-desktop as our context. Now, we can try to use our deployment and service files to deploy to kubernetes.
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

kubectl get pods
kubectl get svc
```
`get pods` should show two pods that have 1/1 in the READY column. `get svc` should show your project running on port 80:300080/TCP.

If none of these commands gave you any errors, go to `http://localhost:30080` to see if it worked.

If you want to restart, you can remove everything and start fresh.

First, go into the Kubernetes section on Docker Desktop, and click 'reset cluster'. Then run these commands:

```bash
docker rm $(docker ps -aq)
docker rmi yourusername/my-react-app:v1
```

You can also go into Docker and delete the images you made.