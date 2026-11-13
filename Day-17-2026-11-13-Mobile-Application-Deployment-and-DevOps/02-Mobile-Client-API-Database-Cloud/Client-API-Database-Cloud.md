# Client-API-Database-Cloud

Day 17 - 13 November 2026


---

# Advanced Concepts: Mobile Backend and Cloud Architecture

## 16. Detailed Mobile Client Architecture

A mobile client contains multiple internal components:

| Component | Responsibility |
|---|---|
| UI Layer | Displays screens and user interactions |
| State Management | Maintains application and screen state |
| Domain Layer | Coordinates reusable business operations |
| Repository | Coordinates local and remote data sources |
| Remote Data Source | Communicates with backend APIs |
| Local Data Source | Stores information on the device |
| Cache | Reuses recently retrieved information |

### Example: Banking Application

1. UI displays the account screen.
2. State management displays a loading indicator.
3. Domain logic requests account information.
4. Repository selects the appropriate data source.
5. Remote data source calls the backend API.
6. Backend retrieves account information.
7. Repository returns the result.
8. UI displays the account balance.

## 17. Advanced API Architecture

### 17.1 HTTP Request Structure

An HTTP request contains:

- HTTP method
- URL and resource path
- Headers
- Optional request body

Example:

    POST /api/orders HTTP/1.1
    Host: api.example.com
    Content-Type: application/json
    Authorization: Bearer <access-token>

    {
      "productId": 101,
      "quantity": 2
    }

### 17.2 API Response Structure

Example:

    {
      "success": true,
      "message": "Order created",
      "data": {
        "orderId": 5001,
        "status": "confirmed"
      }
    }

A well-designed API provides predictable response structures and meaningful error information.

### 17.3 API Versioning

APIs evolve as applications change.

Examples:

    /api/v1/products
    /api/v2/products

Versioning allows older mobile application releases to continue using supported backend functionality while newer versions introduce changes.

### 17.4 API Rate Limiting

Rate limiting controls how frequently a client can call an API.

For example, a service might allow a certain number of requests per minute for a user or client.

Rate limiting helps protect backend systems from excessive traffic and abuse.

### 17.5 API Authentication and Authorization

Authentication answers: Who are you?

Authorization answers: What are you allowed to access?

A common token-based flow:

1. User submits login credentials.
2. Application sends them over HTTPS.
3. Authentication service verifies the user.
4. Server issues an access token.
5. Mobile application stores the token securely.
6. Subsequent API requests include the token.
7. Backend validates the token and checks permissions.

## 18. API Gateway and Microservices

### 18.1 API Gateway

An API Gateway provides a central entry point for mobile application requests.

Responsibilities can include:

- Routing requests to backend services.
- Authentication and token validation.
- Rate limiting.
- Request transformation.
- Logging and monitoring.
- API version management.

Example routes:

    GET  /api/products
    POST /api/orders
    GET  /api/customers/profile
    POST /api/payments

### 18.2 Microservices

Microservices divide backend functionality into independently manageable services.

| Service | Responsibility |
|---|---|
| User Service | User accounts and profiles |
| Product Service | Product information |
| Order Service | Order processing |
| Payment Service | Payment operations |
| Notification Service | Email and push notifications |

Services can communicate using REST, gRPC, Kafka or RabbitMQ, depending on their requirements.

### 18.3 Backend for Frontend (BFF)

Backend for Frontend is a backend layer designed for a particular client type.

Examples:

- Android BFF
- iOS BFF
- Web BFF

It can combine information from several backend services into a response suited to a particular client.

## 19. Advanced Database Architecture

### 19.1 Database Relationships

An e-commerce database can contain:

- Customers
- Products
- Orders
- OrderItems

A customer can have multiple orders. An order can contain multiple products.

### 19.2 Primary and Foreign Keys

Primary key:
- Uniquely identifies a database record.

Foreign key:
- References a record in another table.

Example:

Customers.CustomerID is the primary key.

Orders.CustomerID can reference Customers.CustomerID.

### 19.3 Database Transactions and ACID

A transaction groups database operations into one logical operation.

Example order transaction:

1. Create order record.
2. Add order items.
3. Update inventory.
4. Record payment result.

ACID properties:

- Atomicity: All operations succeed together or the transaction is rolled back.
- Consistency: Database rules remain valid.
- Isolation: Concurrent transactions are managed safely.
- Durability: Committed data persists.

### 19.4 Replication and Backups

Replication:
- Maintains copies of data on other database instances.
- Can improve availability and read scalability.

Backup:
- Creates recoverable copies of database information.

Restore:
- Recovers information from a backup.

Disaster recovery:
- Restores application and database operations after a major failure.

Replication is not a replacement for backups because accidental deletion or corruption can also be replicated.

## 20. Mobile Caching and Offline-First Architecture

Mobile devices can experience unstable network connections.

An offline-first application allows some important functionality to work without continuous internet access.

Important concepts:

- Cache: Stores recently accessed information.
- Cache expiration: Determines when cached information needs refreshing.
- Synchronization: Reconciles local and remote data.
- Conflict resolution: Handles different versions of the same information.
- Offline queue: Holds changes until connectivity returns.

### Synchronization Methods

Pull-based synchronization:
- Application requests updated information when needed.

Push-based synchronization:
- Server notifies the application that information has changed.
- Application retrieves the updated information.

Hybrid synchronization:
- Combines pull and push approaches.

### Example: Delivery Application

1. Driver updates delivery status while offline.
2. Application saves the change locally.
3. Application records the pending operation.
4. Internet connection becomes available.
5. Application synchronizes the pending operation.
6. Backend processes the update.
7. Application receives confirmation.

Conflict resolution must be designed carefully so that important updates are not silently overwritten.

## 21. Reliability and Performance

| Concept | Explanation |
|---|---|
| Timeout | Stops waiting indefinitely for a response |
| Retry | Repeats a failed operation when appropriate |
| Exponential Backoff | Increases delay between retries |
| Circuit Breaker | Temporarily stops requests to an unhealthy service |
| Load Balancer | Distributes incoming traffic across servers |
| Rate Limiting | Controls request volume |
| Pagination | Returns large datasets in smaller pages |
| CDN | Delivers static content from distributed locations |

### Idempotency

Idempotency means repeating the same operation does not create additional unintended effects.

Example:

If an order request times out, the application should not blindly submit a new order.

An idempotency key or order-status check can help prevent duplicate purchases.

## 22. Cloud Infrastructure and Networking

A production mobile backend may contain:

1. DNS resolves the API domain name.
2. Firewall or Web Application Firewall applies security rules.
3. Load balancer distributes traffic.
4. API Gateway routes requests.
5. Backend services process operations.
6. Databases store information.
7. Object storage stores images and documents.
8. Monitoring tools collect telemetry.

### Azure Infrastructure Examples

| Service | Responsibility |
|---|---|
| Azure App Service | Hosts backend APIs |
| Azure API Management | Publishes and manages APIs |
| Azure SQL Database | Stores relational data |
| Azure Cosmos DB | Stores NoSQL data |
| Azure Key Vault | Protects secrets and keys |
| Azure Storage | Stores application files |
| Azure Monitor | Collects monitoring data |
| Application Insights | Tracks application performance |

## 23. Production Security Architecture

Important practices:

- Encrypt network communication with HTTPS/TLS.
- Use secure authentication and authorization.
- Protect tokens using platform secure storage.
- Keep server credentials out of mobile application packages.
- Store backend secrets in a secure service such as Azure Key Vault.
- Validate requests on the backend.
- Apply API rate limits.
- Encrypt sensitive stored information.
- Maintain security logs and alerts.

The mobile client must be treated as an untrusted environment. Sensitive permissions and business rules must be enforced by the backend.

## 24. End-to-End Example: Placing a Shopping Order

1. Customer selects a product.
2. Mobile application sends an HTTPS request.
3. API Gateway routes the request.
4. Authentication verifies the user.
5. Order Service validates the order.
6. Inventory Service checks availability.
7. Payment Service processes payment through a payment provider.
8. Database stores the order and its status.
9. Notification Service sends an order confirmation.
10. Mobile application displays the order status.

## 25. Connection Between Mobile Architecture and DevOps

| Component | DevOps Responsibility |
|---|---|
| Android App | Build APK/AAB, test and distribute |
| iOS App | Build IPA, test and distribute |
| Backend API | Build, test and deploy |
| Database | Manage migrations, backups and access |
| Cloud Infrastructure | Provision and configure resources |
| API Gateway | Manage routes, policies and versions |
| Monitoring | Track errors, availability and performance |

A mobile release and its backend API release may need coordination. Teams should maintain backward compatibility so older mobile application versions can continue working with supported backend APIs.

## 26. Conclusion

A production mobile application is a distributed system involving mobile clients, APIs, backend services, databases, cloud infrastructure, security, and monitoring.

Understanding these components helps DevOps engineers build reliable CI/CD pipelines, deploy services safely, manage infrastructure, monitor application health, and troubleshoot failures.

## 27. References

- Android Application Architecture:
  https://developer.android.com/topic/architecture

- Android Data Layer:
  https://developer.android.com/topic/architecture/data-layer

- Android Offline-First Architecture:
  https://developer.android.com/topic/architecture/data-layer/offline-first

- Microsoft Mobile Application Architecture:
  https://learn.microsoft.com/en-us/entra/msal/android/architect-your-mobile-app
