# Architecture Component Explanations

## 1. Mobile Client / Frontend

The Mobile Client is the user-facing part of a mobile application. It allows users to interact with application features through a graphical interface.

Responsibilities:
- Display screens, buttons, forms and application data.
- Accept user input.
- Perform basic input validation.
- Send HTTP/HTTPS requests to backend APIs.
- Receive and display API responses.
- Manage application navigation and user sessions.
- Handle loading states and error messages.

Examples: Android applications, iOS applications and Flutter or React Native applications.

## 2. API Gateway

An API Gateway acts as an entry point between mobile clients and backend services.

Responsibilities:
- Receive incoming API requests.
- Route requests to appropriate backend services.
- Perform request validation.
- Handle authentication and authorization integration.
- Apply rate limiting and request throttling.
- Manage API versions.
- Monitor API traffic and request performance.

Example: A mobile application sends a login request to the API Gateway, which routes it to the authentication service.

## 3. Backend Services

Backend services handle the business logic and processing required by the application.

Responsibilities:
- Process requests received from the API layer.
- Execute business rules.
- Communicate with databases.
- Integrate with external services.
- Process user accounts and application operations.
- Return responses to the API layer.

Examples:
- User management service.
- Payment service.
- Notification service.
- Product management service.

Backend services can be developed as a monolithic application or as separate microservices.

## 4. Authentication and Authorization

Authentication verifies the identity of a user, while authorization determines what resources or operations that user is permitted to access.

Responsibilities:
- Verify user credentials.
- Manage login and logout.
- Generate and validate access tokens.
- Manage user roles and permissions.
- Protect application APIs.
- Prevent unauthorized access.
- Manage token expiration and renewal.

Common technologies:
- OAuth 2.0
- OpenID Connect (OIDC)
- JSON Web Tokens (JWT)
- Microsoft Entra ID

Example:
A user logs into a mobile application. The authentication system verifies their identity and issues an access token. The application sends that token with subsequent protected API requests.

## 5. Database

A database stores and manages application information for future retrieval and processing.

Responsibilities:
- Store user information.
- Maintain application records.
- Retrieve requested information.
- Update and delete records.
- Maintain data consistency.
- Support queries and transactions.
- Apply database security and backup policies.

Types:

### SQL Databases
Relational databases store structured information in tables.

Examples:
- MySQL
- PostgreSQL
- Microsoft SQL Server
- Azure SQL Database

### NoSQL Databases
NoSQL databases support flexible data models and different storage structures.

Examples:
- MongoDB
- Azure Cosmos DB
- Amazon DynamoDB

Database selection depends on application requirements, data structure, scalability and consistency needs.

## 6. Cloud Infrastructure

Cloud infrastructure provides the computing, networking, storage and platform resources required to deploy and operate an application.

Responsibilities:
- Host application services.
- Provide computing resources.
- Manage networking and connectivity.
- Store application files and backups.
- Support scalability and availability.
- Monitor infrastructure performance.
- Apply security and access controls.

Examples:
- Microsoft Azure
- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)

Common cloud services:
- Virtual Machines
- App Services
- Container Services
- Cloud Storage
- Managed Databases
- Virtual Networks

DevOps teams use cloud infrastructure to deploy, manage and monitor application environments.

## 7. Load Balancer

A load balancer distributes incoming application traffic across multiple backend servers or application instances.

Responsibilities:
- Distribute incoming requests.
- Prevent a single server from handling all traffic.
- Perform health checks.
- Route requests to healthy instances.
- Improve application availability.
- Support horizontal scalability.

Example:

If an application runs on three backend servers, the load balancer distributes incoming requests among those servers according to its routing algorithm and health status.

Common examples:
- Azure Load Balancer
- Azure Application Gateway
- AWS Elastic Load Balancing
- NGINX

A load balancer improves availability and traffic distribution, but its configuration and health checks must be designed correctly.

## 8. Cache

### 8.1 What is Cache?

Cache is a temporary storage mechanism used to store frequently accessed data so that it can be retrieved quickly without repeatedly accessing the original source, such as a database, API or remote server.

Caching improves application performance, reduces response time, minimizes repeated database queries and reduces backend workload.

Example:
When a user repeatedly opens a product page, the application can retrieve product information from cache instead of querying the database every time.

### 8.2 Why Do We Need Cache?

- Faster application response time.
- Reduced database queries.
- Reduced backend server workload.
- Lower network traffic.
- Improved scalability.
- Better user experience.
- Reduced cloud infrastructure costs.

### 8.3 How Does Cache Work?

1. A user sends a request to the application.
2. The application checks whether the requested information exists in the cache.
3. If data exists, it returns the cached information.
4. If data does not exist, the application retrieves it from the database.
5. The retrieved information can be stored in the cache.
6. Future requests can reuse the cached information.

Important concepts:

**Cache Hit:** Requested data is available in the cache.

**Cache Miss:** Requested data is not available in the cache, so the application retrieves it from the original source.

**Cache Hit Ratio:**

Cache Hit Ratio = (Cache Hits / Total Cache Requests) × 100

Example:
- Total requests: 1,000
- Cache hits: 800
- Cache misses: 200
- Cache hit ratio: 80%.

### 8.4 Types of Cache

#### 1. Browser Cache

Browser cache stores website resources locally on the user's device.

Examples:
- Images
- CSS files
- JavaScript files
- Fonts
- Static website resources

When users revisit a website, the browser can reuse valid cached resources instead of downloading them again.

Benefits:
- Faster website loading.
- Reduced network traffic.
- Improved browsing experience.

#### 2. CDN Cache

CDN stands for Content Delivery Network.

A CDN stores copies of website content on geographically distributed edge servers.

Working:
1. User requests website content.
2. Request reaches a nearby CDN server.
3. If content is cached, CDN returns it.
4. If content is unavailable or expired, CDN can retrieve it from the origin server.
5. The content may be cached for subsequent requests.

Examples:
- Cloudflare
- Azure Front Door
- Amazon CloudFront
- Akamai

Benefits:
- Faster global content delivery.
- Reduced origin server workload.
- Better application performance.

#### 3. Application Cache

Application cache stores frequently accessed application information.

Examples:
- User profile information.
- Product details.
- API responses.
- Frequently accessed reference data.

It reduces repeated processing and database requests.

#### 4. In-Memory Cache

In-memory caching stores data in RAM (Random Access Memory).

RAM provides fast data access compared with traditional disk-based storage.

Popular technologies:
- Redis
- Memcached

Example:
A mobile application can store frequently requested product information in Redis to reduce repeated database queries.

Benefits:
- Fast data retrieval.
- Reduced database workload.
- Low-latency application responses.

#### 5. Distributed Cache

Distributed cache stores cached data across networked servers or nodes and allows multiple application instances to access shared information.

Example:

Application Server 1
Application Server 2
Application Server 3
        |
        v
 Shared Redis Cache
        |
        v
     Database

Benefits:
- Shared cache across application instances.
- Better horizontal scalability.
- Reduced duplicate database requests.

#### 6. Database Cache

Database caching stores frequently accessed records or query results to reduce repeated database operations.

Examples:
- Database buffer cache.
- Query result caching, where supported.
- Application-side query result caching.

Benefits:
- Faster data retrieval.
- Reduced database resource consumption.

#### 7. DNS Cache

DNS caching temporarily stores domain name lookup results.

Example:
When a user visits www.google.com, DNS resolves the domain name to an IP address.

If the result is cached and still valid, the system may reuse it instead of performing another lookup.

DNS caching can exist in:
- Browser.
- Operating system.
- DNS resolver.

#### 8. Operating System Cache

Operating systems use memory to store frequently accessed disk and file data.

Example:
When a user repeatedly opens the same file, the operating system may retrieve its contents from memory rather than reading the storage device again.

Benefits:
- Faster file access.
- Reduced disk operations.

#### 9. CPU Cache

CPU cache is a small, high-speed memory located inside or close to the processor.

It stores frequently used instructions and data.

Types:
- L1 Cache: Usually the smallest and fastest.
- L2 Cache: Larger than L1 and generally slower.
- L3 Cache: Usually larger and often shared between CPU cores.

CPU caching reduces repeated access to main memory.

#### 10. Build Cache

Build cache stores reusable outputs from previous build operations.

It is important in DevOps and CI/CD pipelines.

Examples:
- npm dependency cache.
- Docker build cache.
- Maven dependency cache.
- Gradle build cache.
- Azure Pipeline Cache.
- GitHub Actions cache.

Benefits:
- Faster pipeline execution.
- Reduced repeated downloads.
- Reduced build time.
- Better CI/CD efficiency.

### 8.5 Cache Strategies

Cache strategies define how an application reads and writes information between cache and the original data source.

#### 1. Cache-Aside (Lazy Loading)

The application checks the cache first.

If data is unavailable, the application retrieves it from the database and stores it in the cache.

Steps:
1. Application checks cache.
2. Cache miss occurs.
3. Application queries the database.
4. Database returns information.
5. Application stores information in cache.
6. Application returns the response.

#### 2. Read-Through Cache

The application requests data from the cache.

If data is missing, the caching layer retrieves it from the database and returns it.

The cache manages the loading operation.

#### 3. Write-Through Cache

When the application updates information, both cache and database are updated as part of the write operation.

Benefits:
- Helps maintain updated cache information.
- Reduces stale-data situations.

#### 4. Write-Back Cache

The application writes information to the cache first.

The cache updates the database later, usually through an asynchronous operation.

Benefits:
- Faster write operations.
- Can reduce immediate database write pressure.

Risk:
If pending changes are lost before reaching persistent storage, data may be lost.

### 8.6 Cache Expiration and Management

#### TTL (Time To Live)

TTL specifies how long cached information remains valid.

Example:
- Data cached at 10:00 AM.
- TTL configured for 10 minutes.
- Cached entry becomes eligible to expire around 10:10 AM.
- A later request may retrieve fresh information.

#### Cache Invalidation

Cache invalidation means removing or updating cached information when the original data changes.

Example:
A product price changes from ₹1,000 to ₹1,200 in the database. The old cached price must be updated or invalidated.

#### Cache Eviction

Cache eviction removes cached entries when storage capacity is limited.

Common policies:

- LRU: Least Recently Used.
- LFU: Least Frequently Used.
- FIFO: First In, First Out.
- TTL-based: Removes expired entries.

#### Cache Warm-up

Cache warm-up means loading frequently required information into cache before application traffic increases.

It helps reduce initial cache misses.

### 8.7 Common Cache Problems

#### 1. Stale Cache

Cached information becomes outdated after the original data changes.

Solution:
Use suitable TTL settings and cache invalidation.

#### 2. Cache Stampede

Many requests simultaneously try to retrieve the same expired information, causing a sudden increase in database traffic.

Solution:
Use request coalescing, controlled refresh and TTL variations.

#### 3. Cache Penetration

Repeated requests ask for information that does not exist in the database.

Solution:
Validate requests and consider caching negative results for a short period.

#### 4. Cache Avalanche

Many cached entries expire at approximately the same time, creating a sudden load on the database.

Solution:
Use randomized TTL values and staggered refresh operations.

#### 5. Cache Security Issues

Sensitive information can be exposed if cache access controls or cache keys are configured incorrectly.

Solution:
Use proper authentication, authorization, secure cache keys and appropriate data protection.

### 8.8 Cache in Cloud Computing

Cloud applications use caching to improve performance and reduce infrastructure workload.

Examples:

Microsoft Azure:
- Azure Managed Redis.
- Azure Front Door.

AWS:
- Amazon ElastiCache.
- Amazon CloudFront.

Google Cloud:
- Memorystore.

Example Azure architecture:

User
 |
 v
Azure Front Door
 |
 v
Azure App Service
 |
 v
Redis Cache
 |
 | Cache Miss
 v
Azure SQL Database
 |
 v
Store result in Redis
 |
 v
Return response

Azure Front Door can cache eligible content, while Redis can store frequently accessed application data.

### 8.9 Cache in DevOps and CI/CD Pipelines

Caching is important in DevOps because build and deployment pipelines repeatedly perform similar operations.

Example: Node.js project.

Without caching:
1. Checkout source code.
2. Download dependencies.
3. Install packages.
4. Run tests.
5. Build application.

With caching:
1. Checkout source code.
2. Restore dependency cache.
3. Reuse downloaded package data.
4. Install dependencies.
5. Run tests.
6. Build application.

#### Azure DevOps Cache@2 Example

```yaml
steps:
- task: Cache@2
  displayName: Cache npm package downloads
  inputs:
    key: 'npm | "$(Agent.OS)" | package-lock.json'
    restoreKeys: |
      npm | "$(Agent.OS)"
    path: $(Pipeline.Workspace)/.npm

- script: npm ci --cache $(Pipeline.Workspace)/.npm
  displayName: Install dependencies

- script: npm test
  displayName: Run tests
```

Explanation:

- Cache@2 restores and saves pipeline cache.
- Key identifies the cache.
- restoreKeys provides fallback cache matching.
- Path specifies the cache directory.
- npm ci installs dependencies according to package-lock.json.
- npm test executes application tests.

The first run may populate the cache. Subsequent runs can reuse package downloads.

#### Docker Build Cache Example

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

Docker can reuse unchanged build layers.

Copying package files before application source files helps reuse the dependency installation layer when only application source code changes.

### 8.10 Cache vs Database

| Feature | Cache | Database |
|---|---|---|
| Purpose | Fast data retrieval | Persistent data management |
| Speed | Generally faster | Depends on query and storage |
| Storage | Often RAM | Usually persistent storage |
| Data lifetime | Often temporary | Usually persistent |
| Main usage | Frequently accessed data | Main application records |

Cache is generally a performance layer and should not replace the authoritative database.

### 8.11 Important Cache Terminology

| Term | Meaning |
|---|---|
| Cache Hit | Data available in cache |
| Cache Miss | Data unavailable in cache |
| Hit Ratio | Percentage of requests served from cache |
| TTL | Time an entry remains valid |
| Invalidation | Removing or updating outdated data |
| Eviction | Removing entries to free cache space |
| Cache Warm-up | Preloading frequently used data |
| Cache Stampede | Multiple simultaneous cache misses |
| Distributed Cache | Cache shared by multiple application instances |
| Cache Key | Identifier used to locate cached information |

### 8.12 Cache Interview Questions

**1. What is caching?**

Caching is a technique used to temporarily store frequently accessed data for faster retrieval.

**2. What is the difference between cache hit and cache miss?**

A cache hit means requested data is available in cache. A cache miss means the application must retrieve it from another source.

**3. What is Redis?**

Redis is an in-memory data store commonly used for application caching and low-latency data operations.

**4. What is CDN caching?**

CDN caching stores eligible website content on distributed edge servers to deliver it faster to users.

**5. What is TTL?**

TTL defines how long cached information remains valid.

**6. What is cache invalidation?**

It is the process of removing or updating cached data when the original information changes.

**7. Why is caching useful in DevOps?**

It reduces repeated downloads and build operations, improving CI/CD pipeline efficiency.

**8. What is Docker build cache?**

Docker build cache reuses previously generated image layers when the relevant instructions and inputs have not changed.

**9. What is distributed caching?**

It is a caching mechanism shared across multiple application instances or servers.

**10. Is cache a replacement for a database?**

No. Cache is generally used as a performance layer, while the database remains the authoritative persistent data store.

### 8.13 Summary

Caching stores frequently accessed data closer to where it is needed.

It improves performance, reduces repeated database queries and helps applications scale efficiently.

Important areas covered:
- Cache fundamentals.
- Cache hits and misses.
- Ten major cache types.
- Cache strategies.
- TTL, invalidation and eviction.
- Common cache problems.
- Redis and cloud caching.
- Azure DevOps pipeline caching.
- Docker build cache.
- Interview questions and practical examples.

## 9. How All Components Work Together

The following sequence explains a typical mobile application request:

1. The user opens the mobile application.
2. The mobile client sends an HTTPS request.
3. The API Gateway receives and routes the request.
4. Authentication and authorization verify the user's identity and permissions.
5. Backend services execute the required business logic.
6. The backend checks the cache for frequently accessed information.
7. If the required information is not cached, the backend retrieves it from the database.
8. The result may be stored in the cache for future requests.
9. Cloud infrastructure provides the resources required to run the application.
10. Load balancers distribute traffic across healthy application instances.
11. The backend returns the response through the API layer.
12. The mobile client displays the result to the user.

## 10. Conclusion

Each architecture component performs a specific responsibility in a mobile application.

The mobile client provides the user interface, the API Gateway manages incoming requests, backend services execute business logic, authentication protects resources, databases store application data, cloud infrastructure provides hosting resources, load balancers distribute traffic, and caching improves performance.

Together, these components create a scalable, secure, reliable and maintainable mobile application architecture.
