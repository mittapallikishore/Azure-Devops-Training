# System Design Notes

## Step 3: Functional and Non-Functional Requirements

### Functional Requirements

Functional requirements describe what an application should do.

Examples:
- User registration and login.
- Product search.
- Add products to cart.
- Place orders.
- Make payments.
- Track orders.

### Non-Functional Requirements

Non-functional requirements describe how well an application should operate.

Examples:
- Performance: Application responds quickly.
- Scalability: Application handles increasing users.
- Availability: Application remains accessible.
- Reliability: Application operates consistently.
- Security: User information is protected.
- Maintainability: Application is easy to update.

### Comparison

| Functional Requirements | Non-Functional Requirements |
|---|---|
| User login | Secure authentication |
| Product search | Fast search response |
| Place an order | Reliable order processing |
| Make payment | Secure payment processing |
| Track orders | High availability |
| User registration | Data protection |

### DevOps Engineer Responsibilities

- Configure infrastructure according to performance requirements.
- Implement autoscaling for scalability.
- Configure redundancy for availability.
- Implement health checks and recovery.
- Secure infrastructure and application secrets.
- Configure monitoring and alerts.

### Conclusion

Functional requirements define what an application does.
Non-functional requirements define how effectively, securely and reliably it operates.

# Step 4: Scalability, Availability, Reliability and Performance

## 1. Scalability
Scalability is the ability of an application to handle increasing users, traffic and workloads.

Types:
- Vertical Scaling: Increasing CPU, RAM or resources of an existing server.
- Horizontal Scaling: Adding more servers or application instances.

DevOps responsibilities:
- Configure autoscaling.
- Deploy multiple instances.
- Configure load balancing.
- Monitor infrastructure resources.

## 2. Availability
Availability is the ability of an application to remain accessible and operational when users need it.

Examples:
- 99% availability.
- 99.9% availability.
- 99.99% availability.

DevOps responsibilities:
- Configure multiple instances.
- Configure health checks.
- Implement failover.
- Configure monitoring and alerts.

## 3. Reliability
Reliability is the ability of an application to operate correctly and consistently without unexpected failures.

DevOps responsibilities:
- Implement automated testing.
- Configure backup and recovery.
- Implement deployment rollback.
- Monitor application errors.
- Test disaster recovery.

## 4. Performance
Performance describes how quickly and efficiently an application responds to user requests.

Important measurements:
- Response time.
- Throughput.
- CPU utilization.
- Memory utilization.
- Database query time.
- Network latency.

DevOps responsibilities:
- Monitor application response times.
- Optimize infrastructure.
- Configure caching and load balancing.
- Perform load testing.
- Identify performance bottlenecks.

## Conclusion
Scalability handles growth, availability keeps applications accessible, reliability ensures consistent operation, and performance ensures efficient responses.

# Real-World Mobile Application Architecture

## Example: E-commerce Mobile Application

An e-commerce mobile application allows users to browse products, log in, place orders, make payments, and track deliveries.

## Main Components

1. Mobile Frontend: Provides the user interface.
2. API: Connects the mobile application with backend services.
3. Authentication: Verifies user identity and access.
4. Product Service: Manages product details and prices.
5. Order Service: Processes and manages customer orders.
6. Payment Gateway: Processes online payments.
7. Database: Stores users, products, orders, and transaction records.
8. Cloud Infrastructure: Hosts and runs the application components.

## Example Request Flow

Mobile App -> API -> Authentication -> Product/Order Service -> Payment Gateway -> Database

The backend processes the request and returns the response to the mobile application.

## DevOps Engineer Responsibilities

- Provision and manage cloud infrastructure.
- Configure CI/CD pipelines.
- Build and deploy frontend and backend applications.
- Manage environment variables and application secrets.
- Configure monitoring, logging, and alerts.
- Maintain database backups and recovery procedures.
- Monitor application availability, performance, and security.

## Conclusion

A mobile application depends on multiple components working together. System design helps plan these components, their communication, infrastructure, security, and scalability before development begins.
