# 01 - System Architecture and Request Flow

## Objective
Understand and implement an application architecture in which an NGINX API Gateway routes client requests to a Node.js application and a separate Payment Service.

## Architecture

```text
Client
  |
  v
NGINX API Gateway (Host Port 8080)
  |
  +---- /api/users    ---> Web Application (Port 3000)
  |
  +---- /api/products ---> Web Application (Port 3000)
  |
  +---- /api/orders   ---> Web Application (Port 3000)
                              |
                              v
                       Payment Service
                         (Port 4000)
```

## Components

### 1. Client
- Sends HTTP requests to the API Gateway.
- Uses the gateway endpoint instead of directly accessing individual backend services.
- Receives HTTP responses such as 200, 401, 429, and 503.

### 2. NGINX API Gateway
- Acts as the entry point for incoming API requests.
- Routes requests to the appropriate backend.
- Validates the configured API key.
- Applies rate limiting.
- Adds or forwards request identification headers.
- Produces structured access logs.

### 3. Node.js Web Application
- Runs on port 3000 inside its container.
- Provides user, product, and order APIs.
- Handles order payment requests.
- Communicates with the Payment Service.

### 4. Payment Service
- Runs separately on port 4000 inside its container.
- Receives payment requests from the web application.
- Validates payment request data.
- Returns payment approval information and a transaction ID.

## Implementation Steps

1. Created the Node.js application entry point in `server.js`.
2. Separated user routes into `routes/users.js`.
3. Separated product routes into `routes/products.js`.
4. Separated order routes into `routes/orders.js`.
5. Created the Payment Service in `payment-service/server.js`.
6. Configured NGINX to route API requests to the web application.
7. Configured the web application to communicate with the Payment Service using the Docker Compose service name `payment`.

## Request Flow

1. Client sends a request to `http://localhost:8080`.
2. NGINX receives the request.
3. NGINX validates the API key and applies the applicable rate limit.
4. NGINX forwards an accepted request to the web application.
5. The web application processes the relevant route.
6. For a payment request, the web application calls the Payment Service.
7. The Payment Service processes the request and returns its response.
8. The web application returns the result through NGINX to the client.

## Validation

- Gateway health endpoint returned HTTP 200.
- Orders API returned HTTP 200.
- Payment Service health endpoint reported healthy.
- Payment request for order 501 returned an approved payment response.

## Outcome

Implemented a basic microservices-style architecture with a centralized API Gateway and a separately deployed Payment Service.
