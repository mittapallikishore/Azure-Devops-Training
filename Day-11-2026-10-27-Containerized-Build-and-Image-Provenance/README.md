# Day 11 (27/10/2026) — Containerized Build and Image Provenance

## Objective

Containerize the Node.js website using Docker, apply production-conscious configuration, verify the running application, and record image provenance so the image can be associated with its source version.

## Project Structure

- `Dockerfile` — Defines how the application image is built.
- `.dockerignore` — Excludes unnecessary files from the Docker build context.
- `server.js` — Runs the Node.js HTTP server.
- `index.html` — Provides the website page.
- `package.json` and `package-lock.json` — Define application metadata and dependency installation.
- `tests/` — Contains application quality tests.
- `image-provenance.txt` — Records image version, build tag, Git commit, and runtime details.

## Implementation

### 1. Dockerfile

The Dockerfile uses the Node.js 22 Alpine base image, sets the working directory, installs production dependencies, copies the application files, runs as the non-root `node` user, exposes port 3000, and defines a health check for `/health`.

### 2. Docker build

Build the image from this directory:

```powershell
docker build -t day11-containerized-app:1.0 .
```

### 3. Run the container

```powershell
docker run -d --name day11-app -p 3000:3000 day11-containerized-app:1.0
```

### 4. Validate the application

Check the running container:

```powershell
docker ps
```

Test the health endpoint:

```powershell
Invoke-RestMethod http://localhost:3000/health
```

Expected response:

```json
{"status":"healthy"}
```

Open `http://localhost:3000` in a browser to verify the website.

Check Docker's health status:

```powershell
docker inspect --format='{{.State.Health.Status}}' day11-app
```

The expected status after the health check succeeds is `healthy`.

### 5. Image provenance and tagging

The image has a base tag, a build-specific tag, and a Git-commit tag.

```powershell
docker images day11-containerized-app
```

The build tag used for this exercise is `day11-2026-10-27-001`. The commit tag records the short Git commit identifier.

The `image-provenance.txt` file records the build information for traceability. These are local Docker image tags; publishing to a container registry is a separate step.

### 6. Docker ignore rules

The `.dockerignore` file excludes Git metadata, environment files, dependency directories, logs, test output, and unrelated documentation or pipeline files from the build context.

### 7. Security and maintainability

- Run the application as a non-root user.
- Do not place passwords, tokens, or other secrets in the image.
- Install only production dependencies in the image.
- Use `.dockerignore` to reduce unnecessary build context files.
- Keep image tags and provenance records for traceability.

## Outcome

The Node.js application is packaged into a Docker image, runs as a container, and exposes a health endpoint for verification. Image tags and a provenance record support source-version traceability.

## Cleanup

Stop and remove the test container when it is no longer needed:

```powershell
docker stop day11-app
docker rm day11-app
```

The local Docker image remains available after removing the container.
