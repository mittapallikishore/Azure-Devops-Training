# 02 - Docker Compose and Microservices Deployment

## Objective
Containerize the web application and Payment Service, and deploy them with NGINX through Docker Compose.

## Files Created

- `DevOps-Simple-App/Dockerfile`
- `DevOps-Simple-App/.dockerignore`
- `DevOps-Simple-App/compose.yaml`
- `DevOps-Simple-App/payment-service/Dockerfile`
- `DevOps-Simple-App/nginx/default.conf`

## Web Application Dockerfile

The root Dockerfile:
- Uses the Node.js 22 Alpine image.
- Sets the application working directory.
- Installs dependencies using `npm ci`.
- Copies application files.
- Exposes port 3000.
- Starts the application using `npm start`.

## Payment Service Dockerfile

The Payment Service Dockerfile:
- Uses Node.js 22 Alpine.
- Sets its working directory.
- Copies the Payment Service source file.
- Exposes port 4000.
- Starts the service using Node.js.

## Docker Compose Services

The Compose configuration defines three services:

| Service | Container purpose | Port mapping |
|---|---|---|
| web | Node.js application | 3000 |
| payment | Payment Service | 4000 |
| nginx | API Gateway | Host 8080 to container 80 |

The web application communicates with the Payment Service through the Compose service name `payment`, using port 4000.

## Deployment Steps

Run these commands from the application directory:

```powershell
Set-Location "DevOps-Simple-App"

docker compose config
docker compose build
docker compose up -d
docker compose ps
```

## Important Docker Concepts

### Image
An image is the packaged template used to create a container.

### Container
A container is a running instance of an image.

### Docker Compose
Compose defines and runs multiple related containers using one YAML configuration.

### Service Discovery
Within the Compose network, services can communicate using their service names. The web application uses `payment:4000` instead of `localhost:4000`.

## Validation

- `docker compose config` validated the Compose configuration.
- Docker images were built.
- Web, Payment Service, and NGINX containers started.
- The gateway was accessible on host port 8080.
- Container status showed the services running.

## Troubleshooting

### Docker Engine unavailable
If Docker commands cannot connect to the engine:
1. Open Docker Desktop.
2. Wait for the Docker Engine to finish starting.
3. Run `docker info`.
4. Retry `docker compose ps`.

### Missing Dockerfile
Check that each build context contains the expected Dockerfile. The Payment Service Dockerfile must be inside `payment-service`.

### Service communication
Use Compose service names for container-to-container communication. Do not use `localhost` to refer to another container.

## Outcome

Successfully deployed the web application, Payment Service, and NGINX Gateway as separate Docker Compose services.
