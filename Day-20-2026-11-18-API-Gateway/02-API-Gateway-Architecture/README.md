# API Gateway Architecture

## 1. Basic Architecture

```text
        Web Application
               |
        Mobile Application
               |
        Third-party Client
               |
               v
       +------------------+
       |   API GATEWAY    |
       |------------------|
       | Authentication   |
       | Authorization    |
       | Rate Limiting    |
       | Routing          |
       | Caching          |
       | Logging          |
       +------------------+
               |
       +-------+-------+---------+
       |               |         |
       v               v         v
   +--------+      +--------+ +--------+
   |  User  |      |Product | | Order  |
   |Service |      |Service | |Service |
   +--------+      +--------+ +--------+
```

## 2. Request Lifecycle

Consider:

`GET https://api.shop.com/api/products/101`

The request lifecycle:

1. DNS resolves the hostname.
2. Client establishes a network connection.
3. TLS handshake secures HTTPS communication.
4. Gateway receives the HTTP request.
5. Gateway inspects method, path and headers.
6. Authentication verifies identity or credentials.
7. Authorization evaluates permissions.
8. Rate-limiting policies are applied.
9. Routing selects Product Service.
10. Request is forwarded to the backend.
11. Product Service retrieves product information.
12. Response returns through the gateway.
13. Gateway may log or transform the response.
14. Client receives the result.

## 3. North-South and East-West Traffic

North-South traffic:
Communication between external clients and the application environment.

Example:
Mobile App -> API Gateway -> Product Service.

East-West traffic:
Communication between services inside the application environment.

Example:
Order Service -> Inventory Service.

API Gateways commonly manage external North-South traffic. Service meshes commonly manage internal East-West traffic.

## 4. E-commerce Architecture

```text
          Customer
              |
              v
         API Gateway
              |
    +---------+----------+
    |         |          |
    v         v          v
  User     Product     Cart
 Service   Service    Service
    |         |          |
    +---------+----------+
              |
              v
          Order Service
              |
        +-----+------+
        |            |
        v            v
   Inventory      Payment
    Service       Service
        |
        v
   Shipping Service
```

## 5. Request Aggregation

A gateway or dedicated aggregation service can combine responses from multiple backend services.

Example:
A customer dashboard may require:
- User profile.
- Recent orders.
- Payment status.

One frontend request can trigger multiple backend requests and combine their responses.

Aggregation should be designed carefully because it can increase latency and coupling.

## 6. Gateway Availability

The gateway is an important application component.

Production environments should consider:
- Multiple gateway instances.
- Health checks.
- Autoscaling.
- Load balancing.
- Monitoring.
- Backup and recovery.
- Configuration management.

## Learning Outcome

Understand gateway architecture, request flow, service communication and how the gateway fits into an e-commerce application.
