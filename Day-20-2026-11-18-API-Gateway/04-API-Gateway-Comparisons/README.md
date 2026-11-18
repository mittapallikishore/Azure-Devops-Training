# API Gateway Comparisons

## 1. API Gateway vs Load Balancer

| Feature | API Gateway | Load Balancer |
|---|---|---|
| Main purpose | API traffic management | Traffic distribution |
| Routing | API paths and methods | Backend instances |
| Authentication | Commonly supported | Product-dependent |
| Rate limiting | Commonly supported | Product-dependent |
| Caching | Often supported | Product-dependent |
| Primary focus | API management | Availability and scaling |

Example:

API Gateway routes `/api/products` to Product Service.

A Load Balancer distributes requests across Product Service instances.

They can work together.

## 2. API Gateway vs Reverse Proxy

Reverse Proxy:
- Receives requests on behalf of backend servers.
- Forwards requests to backend destinations.
- Can perform TLS termination and load balancing.
- Can support caching and URL rewriting.

API Gateway:
- Provides API-specific management.
- Supports authentication and authorization policies.
- Manages API versions and rate limits.
- Routes API requests to backend services.

An NGINX reverse proxy can also perform many API Gateway functions.

## 3. API Gateway vs Service Mesh

API Gateway:
- Commonly manages external client-to-application traffic.
- Provides centralized API policies.
- Routes external requests.

Service Mesh:
- Manages internal service-to-service communication.
- Supports service identity and mutual TLS.
- Provides retries, timeouts and traffic policies.
- Improves internal observability.

## 4. API Gateway vs CDN

API Gateway:
- Manages API requests.
- Routes traffic to backend services.
- Applies API security policies.
- Supports API-specific rate limiting.

CDN:
- Delivers content through geographically distributed edge locations.
- Caches static content.
- Reduces latency and origin-server load.

Both can be used together.

## 5. API Gateway vs Kubernetes Ingress

Kubernetes Ingress provides HTTP/HTTPS routing into a Kubernetes cluster through an Ingress Controller.

An API Gateway generally offers broader API management features such as authentication, quotas, developer access and API policies.

Some products can provide both sets of capabilities.

## Learning Outcome

Differentiate API Gateway from Load Balancer, Reverse Proxy, Service Mesh, CDN and Kubernetes Ingress.
