# 07 – Docker and Containerization

## Core concepts
- **Image:** read-only template used to create containers.
- **Container:** running or stopped instance of an image.
- **Dockerfile:** instructions for building an image.
- **Volume:** persistent data storage.
- **Network:** container-to-container or external connectivity.
- **Registry:** stores and distributes images.
- **Compose:** defines multi-container applications.

## Typical Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```
Adapt the runtime, port, package installation and user to the actual application.

## Common commands
```bash
docker build -t task-app:v1 .
docker images
docker run -d --name task-app -p 3000:3000 task-app:v1
docker ps
docker logs task-app
docker exec -it task-app sh
docker stop task-app
docker rm task-app
docker compose up -d
docker compose down
```

## Layers and caching
Dockerfile instructions create image layers. Put stable dependency-install steps before frequently changing source files to improve build-cache reuse.

## Volumes and networking
- Use volumes for data that must outlive a container.
- Use named networks so application services can communicate by service name.
- Do not store important database data only in a disposable container filesystem.

## Image tagging
Use meaningful immutable version identifiers such as a release number or commit SHA. A tag can be overwritten; pinning by digest provides a stronger immutable reference.

## Security best practices
- Use trusted, minimal base images.
- Run as non-root where possible.
- Avoid secrets in Dockerfiles and image layers.
- Scan images and dependencies.
- Keep the build context small with `.dockerignore`.
- Rebuild regularly to receive security updates.

## Troubleshooting
Use `docker logs`, inspect container exit status, verify port mappings, environment variables, mounted files and network configuration.

## Interview check
**Image vs container?** An image is the packaged template; a container is an instance created from that image.
