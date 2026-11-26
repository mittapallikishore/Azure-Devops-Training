# 01 – Data Sharding Fundamentals

## 1. What Is Data Sharding?

Data sharding is a database architecture technique in which a large dataset is divided into smaller, independent pieces called shards. Each shard stores a portion of the total data and can be hosted on a separate database server or cluster.

Instead of storing every customer, order, and transaction in one database, an application distributes records across multiple database instances.

Each shard contains only part of the overall dataset. Together, all shards represent the complete logical database.

## 2. Why Is Sharding Needed?

As an application grows, its database may experience:
- Increasing data storage requirements.
- More concurrent read and write requests.
- Slow queries caused by large datasets.
- CPU, memory, disk I/O, and connection pressure.
- Difficulty scaling a single database server vertically.

Example: An e-commerce platform initially stores 10,000 customers. After several years, it may have 50 million customers and billions of order records. A single database server may become a performance bottleneck.

Sharding distributes this workload across multiple database servers.

## 3. How Does Sharding Work?

1. The application receives a request.
2. The application identifies the shard key, such as CustomerID.
3. A shard router or routing service determines which shard owns that key.
4. The request is sent to the selected database shard.
5. The shard executes the query.
6. The result is returned to the application.

## 4. Simple Example

Assume a customer database contains IDs from 1 to 300,000.

| Shard | Customer ID range |
|---|---|
| Shard 1 | 1–100,000 |
| Shard 2 | 100,001–200,000 |
| Shard 3 | 200,001–300,000 |

Customer 150250 belongs to Shard 2. A request for this customer's order history is routed to Shard 2.

## 5. Sharding and Scaling

Vertical scaling increases the resources of one database server, such as CPU, RAM, and storage.

Horizontal scaling adds more database servers and distributes data and workload across them.

Sharding is commonly used to support horizontal database scaling.

## 6. Important Terminology

- **Shard:** One independent part of a distributed database.
- **Shard key:** The field used to determine where a record is stored.
- **Shard router:** Component that directs a request to the correct shard.
- **Shard map:** Metadata that maps keys or key ranges to shards.
- **Rebalancing:** Moving data between shards to distribute storage and workload.
- **Hotspot:** A shard receiving disproportionately high traffic.

## 7. Key Takeaway

Data sharding divides a large database into smaller parts and distributes them across multiple database servers to improve scalability and distribute workload.
