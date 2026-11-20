# 02 – Rate Limiting

## 1. What is Rate Limiting?

Rate Limiting is a traffic-management mechanism that restricts how many requests a client can send to an API within a defined period.

Example: An API Gateway allows a customer to make 100 requests per minute. Requests beyond the configured limit may be rejected with HTTP 429 Too Many Requests.

## 2. Why is Rate Limiting Required?

- Prevents one client from consuming excessive resources.
- Protects backend services from sudden traffic spikes.
- Reduces the impact of abusive or automated requests.
- Provides fair usage across customers.
- Helps control third-party API usage and cost.
- Protects sensitive operations such as login and OTP endpoints.
- Helps maintain predictable service performance.

Rate limiting can reduce some forms of excessive traffic, but it is not a complete DDoS protection solution.

## 3. When is it Used?

- Public APIs with many consumers.
- Login and authentication endpoints.
- Payment and order APIs.
- APIs with subscription-based usage.
- Services with limited database or compute capacity.
- Applications that call expensive external APIs.
- Systems where one customer must not affect others.

## 4. Where is it Implemented?

- API Gateway.
- Azure API Management.
- Web Application Firewall.
- Ingress controllers.
- Application middleware.
- Backend services.
- Distributed caching or counter systems such as Redis.

The gateway is a common place to apply client-level limits before requests reach backend services.

## 5. How Does Rate Limiting Work?

1. A client sends an API request.
2. The gateway identifies the client using an authenticated identity, subscription, API key, or another trusted identifier.
3. The gateway retrieves the applicable rate-limit policy.
4. It checks the number of requests already made in the configured window.
5. If the client is below the limit, the request is allowed.
6. The request is forwarded to the backend.
7. If the limit has been reached, the gateway rejects the request.
8. The client receives HTTP 429 and may receive a Retry-After header.

## 6. Rate-Limiting Algorithms

### Fixed Window Counter
Counts requests in a fixed time period.

Example: 100 requests between 10:00 and 10:01.

Advantages:
- Simple to implement.
- Low memory requirements.

Limitation:
- A client may send a burst at the end of one window and another burst at the beginning of the next window.

### Sliding Window Log
Stores timestamps of individual requests and checks requests within the latest rolling time period.

Advantages:
- Accurate rolling-window enforcement.

Limitations:
- More memory usage.
- Requires timestamp storage and cleanup.

### Sliding Window Counter
Uses weighted counts from the current and previous windows to approximate a rolling limit.

Advantages:
- More efficient than storing every timestamp.
- Reduces fixed-window boundary bursts.

Limitation:
- It is an approximation rather than an exact request log.

### Token Bucket
Tokens are added to a bucket at a configured refill rate. Each request consumes a token.

Example:
- Bucket capacity: 100 tokens.
- Refill: 10 tokens per second.
- A request requires one token.

Advantages:
- Allows controlled bursts.
- Supports an average request rate.

### Leaky Bucket
Requests enter a queue and are processed at a controlled rate.

Advantages:
- Smooths outgoing traffic.
- Helps protect systems that cannot process sudden bursts.

Limitation:
- The queue can become full, causing requests to be rejected or delayed.

## 7. Types of Rate Limits

- **IP-based:** Limits requests associated with a client IP.
- **User-based:** Limits requests for an authenticated user.
- **API-key-based:** Limits requests using an API key.
- **Subscription-based:** Applies limits to a subscription or customer plan.
- **Endpoint-based:** Applies different limits to different API operations.
- **Global:** Limits total traffic reaching a service.
- **Concurrency limit:** Restricts simultaneous in-progress requests; this is related to traffic control but is not the same as a time-window rate limit.

IP-based controls need care when many users share an IP address or when proxy headers are not trusted.

## 8. HTTP 429 – Too Many Requests

When the client exceeds its configured limit, the API can return:

- HTTP status: `429 Too Many Requests`
- A message explaining the limit.
- A `Retry-After` header where supported.
- Rate-limit metadata where supported by the platform.

The client should wait before retrying. Exponential backoff with jitter helps avoid synchronized retry storms.

## 9. Distributed Rate Limiting with Redis

When an API Gateway runs multiple replicas, local counters on each replica can produce inconsistent limits.

Example:
- Gateway instance A allows 100 requests.
- Gateway instance B independently allows another 100 requests.
- The intended shared limit may be exceeded.

A shared store such as Redis can maintain a common counter.

Typical flow:
1. Request reaches a gateway replica.
2. The gateway identifies the client.
3. It checks or updates the shared counter in Redis.
4. The counter operation is performed atomically.
5. The gateway allows or rejects the request based on the shared state.

Use atomic operations, suitable expiration, and capacity planning. Redis availability and latency become important dependencies.

## 10. Azure API Management Example

Illustrative APIM policy:

```xml
<policies>
    <inbound>
        <base />
        <rate-limit calls="100" renewal-period="60" />
    </inbound>
    <backend>
        <base />
    </backend>
    <outbound>
        <base />
    </outbound>
    <on-error>
        <base />
    </on-error>
</policies>
```

This example configures a limit of 100 calls within a 60-second renewal period. Actual policy behavior and scope depend on the APIM policy and configuration.

`rate-limit-by-key` can apply limits using a selected key, such as a subscription identifier.

## 11. Rate Limiting vs Throttling vs Quota

| Concept | Meaning |
|---|---|
| Rate Limiting | Restricts request frequency within a time window |
| Throttling | Controls or slows traffic to protect processing capacity |
| Quota | Restricts total usage over a longer period |

Example:
- Rate limit: 100 requests per minute.
- Quota: 10,000 requests per month.
- Throttling: Delay or control requests when the system is overloaded.

## 12. Monitoring

Monitor:
- Total incoming requests.
- Allowed requests.
- Rejected requests.
- HTTP 429 responses.
- Requests per user or subscription.
- Gateway latency.
- Backend CPU and memory.
- Redis latency and errors.

Azure Monitor and Application Insights can help collect and analyze telemetry.

## 13. Best Practices

- Apply limits based on authenticated identities where possible.
- Set different limits for different endpoints.
- Protect login, payment, and expensive operations.
- Use shared counters when gateway replicas must enforce a common limit.
- Return useful 429 responses.
- Encourage clients to use backoff and jitter.
- Monitor rejected requests and legitimate customer impact.
- Decide whether the system should fail open or fail closed if its rate-limit store is unavailable.

## 14. Real-World Example

An online shopping API allows each customer 100 product-search requests per minute. A customer sending 101 requests receives a 429 response. Other customers can continue using the service without being affected by that customer's excessive traffic.

## 15. Key Takeaway

Rate Limiting controls request frequency, protects backend resources, supports fair usage, and helps maintain API stability under heavy traffic.
