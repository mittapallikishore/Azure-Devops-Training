# 03 – Circuit Breaker

## 1. What is the Circuit Breaker Pattern?

Circuit Breaker is a fault-handling pattern that temporarily stops requests to a dependency when repeated failures indicate that the dependency is unhealthy.

It prevents applications from repeatedly calling a failing service, reduces unnecessary load, and gives the dependency time to recover.

Example: If the Payment Service repeatedly times out, the Order Service can open its circuit breaker and temporarily stop sending payment requests.

## 2. Why is Circuit Breaker Required?

- Prevents cascading failures.
- Avoids repeatedly calling unavailable services.
- Reduces unnecessary waiting and resource consumption.
- Protects thread pools and connection pools.
- Gives failing dependencies time to recover.
- Supports fast failure and controlled recovery.

## 3. When is it Used?

- Microservice-to-microservice communication.
- API Gateway backend calls.
- External payment or shipping integrations.
- Database or cache dependencies.
- Calls to unreliable third-party APIs.
- Systems where a dependency may become slow or unavailable.

## 4. Where is it Implemented?

- Application service clients.
- API Gateway or gateway-adjacent policies.
- Service mesh proxies.
- Backend communication libraries.
- Distributed applications running on Kubernetes or AKS.

A circuit breaker is normally associated with a particular dependency or operation, rather than one global application-wide switch.

## 5. Three Circuit Breaker States

### CLOSED – Normal Operation

- Requests are allowed.
- The system monitors failures, timeouts, and optionally slow responses.
- If the configured failure threshold is reached, the breaker transitions to OPEN.

### OPEN – Requests Blocked

- Calls to the protected dependency are rejected locally.
- The application may return a fast error or execute a safe fallback.
- The dependency receives time to recover.
- After the configured wait period, the breaker moves to HALF-OPEN.

### HALF-OPEN – Recovery Testing

- A limited number of test requests are allowed.
- Successful test calls indicate recovery.
- If the required success condition is met, the breaker closes.
- If test calls fail, it opens again.

## 6. State Transition Flow

1. Application starts with the breaker CLOSED.
2. Requests are sent to the backend.
3. Failures or slow calls are recorded.
4. The configured threshold is reached.
5. The breaker transitions to OPEN.
6. New calls are blocked for a recovery wait period.
7. The breaker transitions to HALF-OPEN.
8. Limited test calls are allowed.
9. Successful tests close the breaker.
10. Failed tests reopen the breaker.

## 7. Failure Detection Methods

- **Failure count:** Open after a specified number of failures.
- **Failure percentage:** Open when the percentage of failed calls exceeds a threshold.
- **Slow-call rate:** Open when too many calls exceed a latency threshold.
- **Timeout detection:** Treat calls exceeding their timeout as failures.

Example configuration for learning:
- Minimum number of calls: 10.
- Failure threshold: 50%.
- Slow-call threshold: 2 seconds.
- Open-state wait: 20 seconds.
- Half-open test calls: 2.

These are hypothetical values, not universal production defaults. Real thresholds should be selected using service behavior and observed traffic.

## 8. Which Failures Should Count?

Possible failure signals:
- Connection refused.
- Connection timeout.
- Read timeout.
- HTTP 500.
- HTTP 502.
- HTTP 503.
- HTTP 504.
- Excessive response latency.

Usually, client errors such as 400, 401, and 404 should not automatically count as backend availability failures.

HTTP 429 needs policy-specific treatment. It may indicate that the dependency is enforcing its own capacity limit rather than being unavailable.

## 9. Circuit Breaker vs Retry vs Timeout

| Mechanism | Responsibility |
|---|---|
| Timeout | Limits how long a request can wait |
| Retry | Attempts another call after a retryable failure |
| Circuit Breaker | Temporarily stops calls after repeated failures |

These mechanisms complement one another.

Retries should be limited and use exponential backoff with jitter. Retrying non-idempotent operations, such as payments, requires idempotency protection.

## 10. Fallback Mechanism

When a circuit is OPEN, the application may provide a safe alternative.

Examples:
- Product recommendations unavailable: show popular products from cache.
- Reviews service unavailable: show the product without reviews.
- Inventory service unavailable: show stock status as temporarily unavailable.
- Payment service unavailable: inform the user that payment cannot currently be confirmed.

Never report a payment as successful unless the payment result has actually been confirmed.

## 11. Circuit Breaker in API Gateway

Typical request flow:

1. Client sends a request.
2. API Gateway authenticates and validates it.
3. Gateway identifies the backend service.
4. Gateway or the application uses the configured circuit-breaker behavior.
5. If CLOSED, the request is forwarded.
6. If OPEN, the request is rejected quickly or handled using a safe fallback.
7. HALF-OPEN permits limited recovery tests.

A gateway may delegate circuit-breaking behavior to its proxy, application middleware, or service mesh. Exact features vary by product.

## 12. Circuit Breaker in Kubernetes and AKS

Kubernetes Services provide stable endpoints, while circuit-breaking behavior is typically implemented in an application library or traffic-management proxy.

Examples:
- Resilience4j for Java.
- Polly for .NET.
- Envoy circuit-breaking limits.
- Istio traffic-management and outlier-detection capabilities.

Important distinction: Kubernetes readiness and liveness probes determine Pod health and restart or traffic eligibility. They do not themselves implement the full CLOSED, OPEN, and HALF-OPEN circuit-breaker state machine.

## 13. Monitoring

Monitor:
- Current breaker state.
- Failure percentage.
- Slow-call percentage.
- Number of blocked calls.
- Timeout count.
- State transitions.
- Backend response latency.
- Fallback usage.

Azure Monitor, Application Insights, and OpenTelemetry can help collect relevant telemetry.

## 14. Common Mistakes

- No request timeout.
- Unlimited retries.
- Counting all HTTP errors as dependency failures.
- Applying one global breaker to unrelated services.
- Allowing too many HALF-OPEN test calls.
- Returning unsafe fallback responses.
- Ignoring breaker state and transition monitoring.
- Assuming a circuit breaker replaces health checks.

## 15. Real-World Example

An Order Service calls a Payment Service. The Payment Service begins timing out repeatedly. After the configured threshold is reached, the breaker opens and new payment calls fail fast. After the recovery period, a small number of test requests are sent. If the Payment Service responds successfully, the breaker closes and normal traffic resumes.

## 16. Key Takeaway

Circuit Breaker prevents repeated calls to unhealthy dependencies through CLOSED, OPEN, and HALF-OPEN states, helping reduce cascading failures and support controlled recovery.
