# 04 – Fault Tolerance

## 1. What is Fault Tolerance?

Fault Tolerance is the ability of a system to continue providing essential functionality even when one or more components fail.

A fault-tolerant architecture expects that servers, network connections, containers, databases, and external services can fail. It uses multiple protection mechanisms to contain failures and maintain critical operations.

Example: If one Payment Service Pod fails, traffic can be routed to another healthy Pod rather than making the entire application unavailable.

## 2. Why is Fault Tolerance Required?

- Improves application reliability.
- Reduces service interruptions.
- Prevents a single failure from bringing down the entire system.
- Protects critical business operations.
- Supports customer satisfaction and business continuity.
- Helps applications handle unexpected traffic and infrastructure problems.

## 3. When is it Used?

- Applications with critical business operations.
- Microservices architectures.
- High-traffic applications.
- Payment and order-processing systems.
- Cloud-native applications.
- Systems running across multiple instances or availability zones.
- Applications depending on external APIs and databases.

## 4. Where is it Implemented?

- API Gateway.
- Individual microservices.
- Kubernetes and AKS.
- Application load balancers.
- Databases and caches.
- Message queues.
- Cloud infrastructure and network layers.

Fault tolerance must be designed across the entire request path, not only at the API Gateway.

## 5. Important Fault-Tolerance Mechanisms

### Timeout

Limits how long a component waits for another component.

Types include:
- Connection timeout.
- Request timeout.
- Read timeout.
- Idle timeout.

Without timeouts, requests may remain waiting and consume resources for too long.

### Retry

Repeats a failed operation when the failure is considered temporary.

Good retry practices:
- Set a maximum retry count.
- Use exponential backoff.
- Add random jitter.
- Retry only appropriate failures.
- Avoid retrying unsafe operations without idempotency protection.

### Circuit Breaker

Temporarily blocks calls to a repeatedly failing dependency. It protects the system from continuous failures and gives the dependency time to recover.

### Load Balancing

Distributes requests across multiple service instances.

Common approaches:
- Round Robin.
- Weighted Round Robin.
- Least Connections.
- Random.
- Consistent Hashing.

The load balancer should avoid sending traffic to instances that are known to be unhealthy or not ready.

### Redundancy

Provides additional instances or infrastructure so that one failure does not stop the entire service.

Examples:
- Multiple application instances.
- Multiple AKS worker nodes.
- Availability Zone deployment.
- Database replicas.
- Redundant gateway instances.

Redundancy must include data, network, identity, and dependency considerations where applicable.

### Bulkhead Pattern

Separates resources used by different dependencies or operations.

Example: Payment calls and product-catalog calls use separate connection pools or concurrency limits. If the Payment dependency becomes slow, it should not consume every resource needed by product browsing.

### Fallback

Provides a safe alternative when a dependency is unavailable.

Examples:
- Serve cached product details.
- Hide optional recommendations.
- Display a temporary inventory status.
- Queue a notification for later processing.

Fallback must not invent a successful business result.

### Caching

Stores frequently requested data so the application can reduce dependency calls.

Example: Product catalog information can be cached to reduce database load.

Cached data may be stale, so applications must define expiration, invalidation, and consistency behavior.

### Rate Limiting and Throttling

Control request volume to prevent overload. These mechanisms help protect services but do not replace capacity planning or DDoS protection.

### Message Queues

Asynchronous queues allow work to continue after a temporary consumer outage.

Examples:
- Azure Service Bus.
- RabbitMQ.

Use durable messages, retry policies, dead-letter queues, and idempotent consumers to handle failures safely.

### Graceful Degradation

Keeps essential functionality available while temporarily disabling noncritical features.

Example: During a recommendation-service outage, users can still search and purchase products, but personalized recommendations are hidden.

## 6. Fault Tolerance in API Gateway

An API Gateway can provide several protection mechanisms:

1. Authenticate and validate incoming requests.
2. Apply rate limits to control excessive traffic.
3. Discover the backend service.
4. Route requests across healthy instances.
5. Apply request timeouts.
6. Use bounded retries for retryable failures.
7. Apply circuit-breaking behavior.
8. Return safe fallback responses where appropriate.
9. Record metrics, logs, and traces.

The gateway is one layer of protection. Backend services, databases, queues, and infrastructure also require resilience mechanisms.

## 7. Fault Tolerance in Kubernetes and AKS

Kubernetes supports workload resilience through:

- Multiple Pod replicas.
- Deployments and ReplicaSets.
- Pod scheduling across available nodes.
- Readiness probes.
- Liveness probes.
- Startup probes.
- Horizontal Pod Autoscaler.
- Pod disruption budgets.
- Node pools and Availability Zones, where supported and configured.

Useful commands:

```bash
kubectl get nodes
kubectl get pods -o wide
kubectl get deployments
kubectl get services
kubectl describe pod <pod-name>
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl rollout status deployment/<deployment-name>
```

These commands help inspect workload status. They do not alone guarantee application fault tolerance; replica placement, storage, networking, dependencies, and recovery procedures must also be designed.

## 8. Fault Tolerance vs High Availability vs Disaster Recovery

| Concept | Main purpose |
|---|---|
| Fault Tolerance | Continue essential operations when components fail |
| High Availability | Minimize service downtime through redundant, ready infrastructure |
| Disaster Recovery | Restore systems and data after a major disruptive event |

These concepts overlap but solve different reliability problems.

## 9. Azure Services That Support Fault Tolerance

| Azure service | Role |
|---|---|
| Azure API Management | API policies and traffic control |
| Azure Kubernetes Service | Container orchestration and workload replicas |
| Azure Application Gateway | Application traffic routing and load balancing |
| Azure Cache for Redis | Shared caching and coordination |
| Azure Service Bus | Reliable asynchronous messaging |
| Azure Monitor | Metrics, alerts, and monitoring |
| Application Insights | Application telemetry and diagnostics |
| Azure Front Door | Global entry point and traffic routing |

Exact capabilities depend on the selected service tier and architecture.

## 10. Monitoring and Observability

Monitor:
- Request success and failure rates.
- Application response times.
- Pod restarts.
- CPU and memory utilization.
- Database connection failures.
- Queue length and dead-letter messages.
- Circuit-breaker state.
- Retry and timeout counts.
- Availability and health-check results.

Use logs, metrics, and distributed traces together to identify where failures occur.

## 11. Best Practices

- Design for component failure rather than assuming everything remains healthy.
- Use timeouts for network calls.
- Keep retries bounded and apply backoff with jitter.
- Use circuit breakers for unstable dependencies.
- Separate critical resources with bulkheads.
- Run multiple replicas where appropriate.
- Configure health and readiness checks correctly.
- Use durable queues for asynchronous work.
- Protect non-idempotent operations.
- Monitor failure rates and recovery behavior.
- Test failure scenarios regularly.

## 12. Real-World Example

An e-commerce application uses Order, Payment, Inventory, and Notification services. One Payment Pod fails. Kubernetes and the service-routing layer direct eligible traffic to healthy instances. If the entire Payment dependency becomes unavailable, a circuit breaker blocks repeated calls. The application reports that payment cannot currently be confirmed while other non-dependent functions continue operating.

## 13. Key Takeaway

Fault Tolerance combines timeouts, retries, circuit breakers, load balancing, redundancy, caching, bulkheads, queues, and graceful degradation to keep essential application functions working during component failures.
