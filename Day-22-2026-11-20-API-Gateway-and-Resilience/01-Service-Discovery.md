# 01 – Service Discovery

## 1. What is Service Discovery?

Service Discovery is a mechanism that automatically identifies, registers, locates, and connects available service instances in a distributed application.

In a microservices architecture, services run independently and may have different IP addresses, ports, replicas, and lifecycles. Service Discovery allows one service to find another without depending on hardcoded IP addresses.

Example: An Order Service needs to communicate with a Payment Service. Instead of storing a fixed Payment Service IP address, it discovers the service through a registry or Kubernetes DNS.

## 2. Why is Service Discovery Required?

- **Dynamic IP addresses:** Containers and Pods can receive new IP addresses after restart.
- **Auto-scaling:** New service instances may be created when traffic increases.
- **Failure handling:** Unhealthy instances should not receive new requests.
- **Load distribution:** Requests can be distributed across healthy instances.
- **Loose coupling:** Services do not need to know the physical location of other services.
- **Operational flexibility:** Services can be moved, replaced, or scaled without changing every consumer.

## 3. When is it Used?

Service Discovery is useful when:
- Applications contain multiple microservices.
- Services run in containers or Kubernetes.
- Instances are frequently created, deleted, or restarted.
- Applications use horizontal scaling.
- Services communicate across hosts, clusters, or networks.
- A gateway or service mesh must locate healthy backends.

## 4. Where is it Used?

- API Gateway backend routing.
- Microservice-to-microservice communication.
- Kubernetes and Azure Kubernetes Service.
- Cloud-native applications.
- Service meshes such as Istio.
- Distributed systems using registries such as Consul or Eureka.

## 5. Main Components

### Service Provider
The service that exposes an API or functionality. Example: Payment Service.

### Service Consumer
The application that needs to call another service. Example: Order Service.

### Service Registry
A database or directory containing service names, addresses, ports, metadata, and sometimes health information.

### Registration Mechanism
Registers a service instance when it becomes available and removes or expires registrations when it stops.

### Discovery Mechanism
Allows consumers or gateways to locate a service using a registry lookup or DNS query.

### Health Monitoring
Checks whether an instance is healthy and eligible to receive traffic.

## 6. How Does Service Discovery Work?

1. A service starts.
2. The service becomes available and registers its identity and endpoint.
3. The registry or platform maintains its service information.
4. A consumer requests the destination service by logical name.
5. The discovery mechanism resolves the name to one or more endpoints.
6. A load balancer or proxy selects a healthy instance.
7. The request is forwarded to that instance.
8. Health monitoring detects failures and updates endpoint availability.
9. When an instance is removed, its registration is deregistered or expires.

## 7. Types of Service Discovery

### Client-Side Discovery
The client queries the service registry, receives available instances, and selects one.

Example: A Java application using Netflix Eureka and Spring Cloud LoadBalancer.

Advantages:
- Client can control instance selection.
- Does not require a separate discovery proxy for every request.

Limitations:
- Discovery logic must exist in the client.
- Clients need to handle registry updates and load balancing.

### Server-Side Discovery
The client sends a request to a load balancer or proxy. That component discovers the backend and forwards the request.

Example: An API Gateway, Envoy proxy, or cloud load balancer.

Advantages:
- Clients remain simple.
- Routing and discovery logic are centralized.

Limitations:
- The proxy or load balancer becomes an important infrastructure dependency and must be highly available.

### DNS-Based Discovery
Services are resolved using DNS names rather than manually maintained IP addresses.

Example: Kubernetes CoreDNS resolves `payment-service`.

### Registry-Based Discovery
A service registry stores service instances and their metadata.

Examples: Consul and Eureka.

### Sidecar-Based Discovery
A sidecar proxy handles service communication and discovery on behalf of an application.

Example: Envoy in a service mesh architecture.

## 8. Service Discovery in Kubernetes and AKS

Kubernetes provides built-in service discovery.

- A Pod runs the application.
- A Kubernetes Service provides a stable virtual endpoint.
- CoreDNS resolves the Service name to its cluster IP.
- The Service forwards traffic to eligible backend Pods.
- EndpointSlices represent the backend endpoints associated with a Service.

Example DNS name:

`payment-service.payments.svc.cluster.local`

Here:
- `payment-service` is the Service name.
- `payments` is the namespace.
- `svc` identifies the Kubernetes Service DNS hierarchy.
- `cluster.local` is the typical cluster DNS domain and can be customized.

Useful commands:

```bash
kubectl get pods -o wide
kubectl get services
kubectl describe service payment-service
kubectl get endpoints payment-service
kubectl get endpointslices -l kubernetes.io/service-name=payment-service
kubectl get pods -n kube-system
```

A Service name can be used by another Pod instead of relying on an individual Pod IP.

## 9. Health Checks and Service Discovery

- **Liveness probe:** Determines whether a container should be restarted.
- **Readiness probe:** Determines whether a Pod should receive traffic.
- **Startup probe:** Gives a slow-starting application time to initialize.

Readiness is especially important for traffic eligibility. A Pod that is running but not ready should not receive normal application traffic.

## 10. Common Tools

| Tool | Purpose |
|---|---|
| Kubernetes Service | Stable service endpoint |
| CoreDNS | DNS-based discovery |
| Eureka | Service registry |
| Consul | Service registry and health checks |
| Istio | Service mesh and traffic management |
| Envoy | Proxy and service communication |

## 11. Best Practices

- Use logical service names instead of hardcoded IP addresses.
- Configure health checks correctly.
- Remove unhealthy instances from traffic.
- Use readiness probes for Kubernetes workloads.
- Secure service-to-service communication.
- Monitor DNS and registry availability.
- Handle stale discovery information gracefully.
- Configure suitable timeouts and retries.

## 12. Real-World Example

An e-commerce application contains Order, Payment, Inventory, and Notification services. When the Order Service needs payment processing, it calls the logical name `payment-service`. Kubernetes DNS resolves the name, and the Kubernetes Service routes the request to an eligible Payment Pod.

If a Pod is replaced, the Service continues providing a stable endpoint without requiring the Order Service to know the new Pod IP.

## 13. Key Takeaway

Service Discovery dynamically locates available service instances and enables reliable communication between microservices without hardcoded network addresses.
