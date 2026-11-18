# API Gateway Responsibilities

## 1. Request Routing

Routes requests to the correct backend service.

| API Path | Backend |
|---|---|
| /api/users | User Service |
| /api/products | Product Service |
| /api/orders | Order Service |
| /api/payments | Payment Service |

Routing may use paths, HTTP methods, hostnames, headers and API versions.

## 2. Authentication

Authentication answers: Who are you?

Common mechanisms:
- API Keys.
- JSON Web Tokens (JWT).
- OAuth 2.0.
- OpenID Connect.
- Mutual TLS.

The gateway can validate credentials or tokens before forwarding requests.

## 3. Authorization

Authorization answers: What are you allowed to do?

Example:
- Customer can view their own orders.
- Administrator can access administrative operations.
- Guest can access public product information.

Backend services should still validate resource ownership and business-specific permissions.

## 4. Rate Limiting and Throttling

Controls how many requests a client can make during a period.

Example:
100 requests per minute.

Additional requests may receive:

`429 Too Many Requests`

Common algorithms:
- Fixed Window Counter.
- Sliding Window.
- Token Bucket.

Rate limiting helps protect backend services but is not complete DDoS protection.

## 5. Load Balancing

Distributes traffic across multiple healthy backend instances.

Algorithms:
- Round Robin.
- Least Connections.
- Weighted Round Robin.
- Consistent Hashing.

## 6. Caching

Stores eligible responses temporarily.

Cache HIT: Valid response is available in cache.

Cache MISS: Gateway forwards the request to the backend.

Important considerations:
- Time to Live (TTL).
- Cache keys.
- Cache invalidation.
- HTTP Cache-Control headers.
- Avoid public caching of sensitive user data.

## 7. TLS Termination

The gateway can terminate the external HTTPS connection and handle TLS encryption and decryption.

Internal communication should also be secured where required.

## 8. Request and Response Transformation

Examples:
- Add or remove headers.
- Rewrite URLs.
- Transform request formats.
- Modify selected response fields.
- Add metadata.

Complex business logic should remain in backend services.

## 9. Logging and Monitoring

Important metrics:
- Request count.
- Response time.
- Error rate.
- HTTP status codes.
- Backend latency.
- Throughput.
- Service availability.

Never log passwords, access tokens or sensitive payment data.

## Learning Outcome

Identify and explain the major responsibilities performed by an API Gateway.
