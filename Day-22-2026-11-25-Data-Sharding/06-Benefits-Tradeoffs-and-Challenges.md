# 06 – Benefits, Trade-offs and Challenges

## 1. Benefits

**Horizontal scalability:** More database capacity can be added by introducing additional shards.

**Workload distribution:** Read and write operations can be spread across multiple database servers.

**Storage distribution:** Each database server stores only a portion of the complete dataset.

**Potential performance improvement:** Targeted queries can access one shard instead of searching the entire dataset.

**Workload isolation:** A problem affecting one shard may be contained rather than immediately affecting every shard, depending on application design.

## 2. Trade-offs

**Cross-shard queries:** Queries involving records from multiple shards may require fan-out and result aggregation.

**Distributed transactions:** A transaction involving multiple shards is more complicated than a transaction within one database.

**Operational complexity:** Teams must manage shard maps, backups, monitoring, migrations, and failures across multiple database systems.

**Rebalancing:** Moving data between shards requires careful planning and validation.

**Hotspots:** Poor shard-key selection can overload one shard while others remain underused.

## 3. Common Challenges

### Uneven Data Distribution
Some shards may contain much more data than others.

### Uneven Traffic
A popular customer, tenant, or key range may receive significantly more requests.

### Cross-Shard Joins
A join across shards may require multiple queries and application-side aggregation.

### Distributed Consistency
Updates across multiple shards may need distributed transaction patterns, sagas, or eventual consistency.

### Failure Handling
The application must handle unavailable shards, connection failures, retries, and timeouts.

### Backup and Recovery
Backup, restore, and disaster-recovery procedures must account for every shard and the routing metadata.

## 4. How to Reduce These Risks

- Select shard keys based on real query and traffic patterns.
- Monitor data and traffic distribution.
- Use connection pooling and sensible query timeouts.
- Avoid unnecessary cross-shard operations.
- Design idempotent retry behavior.
- Test shard failure and recovery scenarios.
- Automate backups and verify restore procedures.
- Maintain versioned and recoverable shard metadata.
- Test migrations before production cutover.

## 5. Sharding vs Partitioning vs Replication

| Concept | Meaning | Main purpose |
|---|---|---|
| Sharding | Distribute data across independent database nodes | Horizontal distribution |
| Partitioning | Divide a table or dataset into smaller logical parts | Manageability and query efficiency |
| Replication | Maintain copies of data on multiple nodes | Availability and read scaling |

Partitioning can exist inside one database server. Sharding distributes data across multiple database instances or nodes. Replication creates additional copies rather than dividing ownership of the dataset.

## 6. When Should Sharding Be Used?

Consider sharding when:
- A single database is a proven scalability bottleneck.
- Data volume is too large for the chosen database deployment.
- Traffic exceeds the practical capacity of one database node.
- Workload can be divided using a stable shard key.

Do not introduce sharding too early. It adds substantial operational and application complexity. First evaluate indexing, query optimization, caching, connection management, and vertical scaling.
