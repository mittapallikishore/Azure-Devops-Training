# API Gateway in Microservices Architecture

## 1. What Are Microservices?

Microservices architecture divides an application into small, independently deployable services.

Each service focuses on a specific business capability.

Example:
- User Service.
- Product Service.
- Inventory Service.
- Cart Service.
- Order Service.
- Payment Service.
- Shipping Service.
- Notification Service.

Services own their business logic and data responsibilities.

## 2. Role of API Gateway

The gateway:
- Provides a common public entry point.
- Routes requests to appropriate services.
- Applies external security policies.
- Hides internal service endpoints.
- Supports API versioning.
- Can aggregate selected responses.
- Helps migrate legacy applications gradually.

## 3. Service Discovery

Microservice instances can change when containers or Kubernetes pods scale.

Applications should avoid depending on temporary pod IP addresses.

Kubernetes Service DNS example:

`product-service.default.svc.cluster.local`

The Kubernetes Service provides a stable name and routes traffic to matching pods.

## 4. API Versioning

Different API versions can be exposed to clients.

Examples:
- `/api/v1/products`
- `/api/v2/products`

Versioning helps maintain compatibility while new API functionality is introduced.

## 5. Backend for Frontend (BFF)

A Backend for Frontend provides an API layer tailored to a particular client.

Examples:
- Web BFF.
- Mobile BFF.
- Partner API BFF.

It can return data in formats appropriate for each client.

## 6. Request Aggregation

A dashboard may need information from User, Order and Payment services.

A gateway or dedicated aggregation service can call these services and combine the results.

Consider latency, failure handling and service coupling.

## 7. Strangler Pattern

The Strangler pattern gradually replaces functionality in a legacy monolithic application.

The gateway can route some requests to the old application and other requests to new microservices.

This allows migration in stages.

## 8. Failure Handling

Important techniques:
- Timeouts.
- Controlled retries.
- Circuit breakers.
- Fallback responses.
- Health checks.
- Idempotency.

Never retry a payment operation blindly. Idempotency is important to prevent duplicate charges.

## Learning Outcome

Understand how API Gateways support microservices communication, service discovery, versioning and gradual application migration.
