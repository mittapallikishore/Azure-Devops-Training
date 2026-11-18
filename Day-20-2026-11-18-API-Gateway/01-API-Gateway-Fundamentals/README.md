# API Gateway Fundamentals

## 1. What Is an API?

API stands for Application Programming Interface. It allows two software applications or components to communicate using defined rules and interfaces.

For example, a frontend application can call an API to retrieve product information from a backend application.

Example:
`GET /api/products`

The backend processes the request and returns product data, commonly in JSON format.

## 2. What Is an API Gateway?

An API Gateway is a centralized entry point between client applications and backend services.

Clients such as browsers, mobile applications and third-party applications send requests to the API Gateway. The gateway evaluates the request and forwards it to the appropriate backend service.

Example public endpoint:

`https://api.example.com`

The gateway can manage routing, authentication, authorization, rate limiting, caching and monitoring.

## 3. Why Do We Need an API Gateway?

Without a gateway:
- Clients need to know multiple backend service URLs.
- Security policies may be duplicated.
- Frontend applications become complicated.
- Internal services may be exposed unnecessarily.
- Monitoring and traffic management become harder.

With a gateway:
- One common entry point is provided.
- Routing is centrally managed.
- Security policies can be applied consistently.
- Backend services can remain private.
- Monitoring and traffic control become easier.

## 4. How Does an API Gateway Work?

1. Client sends an HTTP/HTTPS request.
2. Gateway receives the request.
3. Gateway examines method, path, headers and other information.
4. Authentication and authorization policies are applied.
5. Rate limiting is checked.
6. Routing identifies the destination service.
7. Request is forwarded to the backend.
8. Backend processes business logic.
9. Backend returns a response.
10. Gateway returns the response to the client.

The exact sequence depends on the gateway product and its configuration.

## 5. Important Terminology

- Client: Application sending an API request.
- Endpoint: URL through which an API operation is accessed.
- Route: Rule that maps a request to a destination.
- Backend: Service receiving and processing the request.
- Upstream: Backend destination to which traffic is forwarded.
- Policy: Rule applied to API traffic.
- Gateway: Entry point managing API requests.
- Payload: Data sent in a request or response.

## 6. Example

A shopping application uses these backend services:

- User Service
- Product Service
- Order Service
- Payment Service

The frontend sends requests to one API Gateway. The gateway routes each request to the correct service.

## Learning Outcome

Understand what an API Gateway is, why applications use it, and how it manages communication between clients and backend services.
