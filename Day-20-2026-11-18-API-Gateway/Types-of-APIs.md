# Types of APIs – DevOps Training

## 1. Introduction

An API (Application Programming Interface) allows different software applications and services to communicate with each other.

APIs can be classified based on:
1. Accessibility – Who can access the API?
2. Architecture and communication style – How does the API communicate?

## 2. Types of APIs Based on Accessibility

### 2.1 Public API
- Available to external developers and applications.
- May require an API key.
- Can have rate limits and usage restrictions.
- Example: Weather API.

### 2.2 Private API
- Used internally within an organization.
- Connects internal applications and microservices.
- Protected through authentication and authorization.
- Example: Order Service communicating with Inventory Service.

### 2.3 Partner API
- Shared with selected business partners.
- Access is restricted to approved organizations.
- Used for business-to-business integration.
- Example: E-commerce application integrating with a delivery company.

### 2.4 Composite API
- Combines multiple API calls or backend operations into one coordinated request.
- Reduces multiple requests from the client.
- Example: Combining customer, product, and order information.

Note: Composite API is more accurately an API composition pattern than a strict accessibility category.

## 3. Types of APIs Based on Architecture and Communication Style

### 3.1 REST API
REST stands for Representational State Transfer.
- Uses HTTP/HTTPS.
- Commonly exchanges JSON.
- Uses GET, POST, PUT, PATCH, and DELETE.
- Stateless request handling.
- Uses resource-based URLs.
- Example: GET /api/products
- Used in web applications, mobile applications, and microservices.

### 3.2 SOAP API
SOAP stands for Simple Object Access Protocol.
- Uses XML messages.
- Follows a formal messaging structure.
- Uses WSDL to describe services.
- Supports enterprise messaging and security standards.
- Used in banking, enterprise applications, and legacy systems.

### 3.3 GraphQL API
- Allows clients to request exactly the fields they need.
- Usually uses a single endpoint.
- Supports queries, mutations, and subscriptions.
- Commonly returns JSON.
- Helps reduce over-fetching and under-fetching.
- Used in applications requiring flexible data retrieval.

### 3.4 gRPC API
- High-performance Remote Procedure Call framework.
- Commonly uses HTTP/2.
- Uses Protocol Buffers by default.
- Supports streaming.
- Efficient for service-to-service communication.
- Used in microservices and distributed systems.

### 3.5 WebSocket API
- Provides persistent, two-way communication.
- Supports full-duplex communication.
- Both client and server can send messages.
- Suitable for real-time updates.
- Used in chat applications, live dashboards, and online gaming.

### 3.6 Webhook API
- Event-driven communication.
- Sends an HTTP request when a configured event occurs.
- Commonly uses HTTP POST and JSON.
- Reduces the need for continuous polling.
- Example: Payment provider notifying an application about successful payment.

## 4. Comparison of API Types

| API Type | Communication | Common Format | Main Use |
|---|---|---|---|
| REST | HTTP request/response | JSON | Web applications |
| SOAP | Structured messages | XML | Enterprise systems |
| GraphQL | Client-defined queries | Usually JSON | Flexible data retrieval |
| gRPC | Remote procedure calls | Protocol Buffers | Microservices |
| WebSocket | Persistent two-way connection | Text/Binary | Real-time applications |
| Webhook | Event-triggered HTTP request | Usually JSON | Event notifications |

## 5. E-commerce Application Example

An e-commerce application can use multiple API styles:

- REST API: Retrieve products and place orders.
- SOAP API: Integrate with a legacy banking system.
- GraphQL API: Retrieve selected product details.
- gRPC API: Communicate between internal microservices.
- WebSocket API: Display live order tracking.
- Webhook API: Receive payment success notifications.
- Partner API: Integrate with delivery companies.
- Private API: Connect internal services.
- Composite API: Combine customer, product, and order information.

## 6. APIs in DevOps

APIs are important for automation and tool integration.

| DevOps Tool | API Usage |
|---|---|
| GitHub | Repository and workflow management |
| Azure DevOps | Build, release, and work item management |
| Docker Registry | Container image management |
| Kubernetes | Cluster and resource management |
| Azure | Cloud resource management |
| Jenkins | Pipeline automation |

Example: An Azure DevOps pipeline can call an API to trigger another pipeline, retrieve deployment details, or verify application health.

## 7. Important Interview Questions

1. What is an API?
2. What are the four API categories based on accessibility?
3. What is the difference between Public and Private APIs?
4. What is a Partner API?
5. What is a Composite API?
6. What is the difference between REST and SOAP?
7. What is GraphQL?
8. Why is gRPC used in microservices?
9. What is the difference between WebSocket and Webhook?
10. How are APIs used in DevOps automation?

## 8. Quick Revision

### Accessibility and Composition Categories
- Public API
- Private API
- Partner API
- Composite API

### Common Architecture and Communication Styles
- REST
- SOAP
- GraphQL
- gRPC
- WebSocket
- Webhook

## 9. Key Takeaway

There is no single fixed number of API types. APIs can be classified in different ways, and one application can use multiple API styles together. For example, an e-commerce application may use REST for product operations, gRPC for internal services, WebSocket for live updates, and Webhooks for payment notifications.
