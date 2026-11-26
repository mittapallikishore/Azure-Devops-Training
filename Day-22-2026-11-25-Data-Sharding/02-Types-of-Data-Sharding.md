# 02 – Types of Data Sharding

## 1. Range-Based Sharding

Range-based sharding divides records according to a range of shard-key values.

Example:

| Shard | Customer ID range |
|---|---|
| Shard 1 | 1–100,000 |
| Shard 2 | 100,001–200,000 |
| Shard 3 | 200,001–300,000 |

A request for CustomerID 150250 is routed to Shard 2.

**Advantages**
- Easy to understand and implement.
- Efficient for queries involving ranges.
- Records can be organized in meaningful ranges.

**Disadvantages**
- Some ranges may receive more traffic than others.
- New records may concentrate on one shard.
- Range changes can require data movement.

**Use case:** Customer records distributed by customer ID ranges.

## 2. Hash-Based Sharding

Hash-based sharding applies a hash function to the shard key and uses the result to select a shard.

Conceptual formula:

Shard = hash(CustomerID) modulo NumberOfShards

For example, a hash result determines whether a customer record belongs to Shard 1, 2, or 3.

**Advantages**
- Usually distributes records more evenly.
- Reduces dependence on sequential key ranges.
- Useful when workload is spread across many keys.

**Disadvantages**
- Range queries may need to access multiple shards.
- Changing the number of shards can remap many keys with simple modulo hashing.
- The hash function and shard count must be managed consistently.

**Use case:** Distributing user accounts or session records across database nodes.

## 3. Directory-Based Sharding

Directory-based sharding uses a lookup table or shard map to identify the shard for a particular key.

Example:

| Customer ID | Assigned shard |
|---|---|
| 101 | Shard A |
| 205 | Shard B |
| 309 | Shard C |

The router checks the directory before sending a query.

**Advantages**
- Flexible assignment of records.
- Supports custom distribution rules.
- Data can be moved by updating the mapping.

**Disadvantages**
- Directory availability becomes important.
- Lookup operations add overhead.
- Mapping information must remain accurate and consistent.

**Use case:** Applications where customers or tenants are assigned to specific database clusters.

## 4. Geographic Sharding

Geographic sharding stores data according to a user's region or location.

Example:

- India customers → India database region.
- Europe customers → Europe database region.
- US customers → US database region.

**Advantages**
- Can reduce latency for regional users.
- Helps meet data residency requirements.
- Supports regional traffic isolation.

**Disadvantages**
- Cross-region requests may be slower.
- Global reporting can require data aggregation.
- Regional failover and consistency need careful planning.

**Use case:** Global banking, e-commerce, and SaaS platforms.

## 5. Vertical Sharding

Vertical sharding separates data by business entity, table, or functional domain rather than dividing rows of one table.

Example:
- Customer database stores customer profiles.
- Order database stores orders.
- Payment database stores payment transactions.

**Advantages**
- Separates business responsibilities.
- Allows services to scale independently.
- Can reduce contention between unrelated workloads.

**Disadvantages**
- Queries across domains may need service-to-service calls.
- Data consistency becomes more complex.
- It requires careful application and service design.

Vertical sharding is related to separating database responsibilities. It is different from horizontal row-based sharding.

## 6. Horizontal vs Vertical Sharding

| Feature | Horizontal | Vertical |
|---|---|---|
| Division | Rows or records | Tables or business entities |
| Example | Customer IDs split across servers | Customers, orders, payments separated |
| Main goal | Distribute large datasets | Separate data domains |
| Query impact | May require multiple shards | May require multiple services or databases |

## 7. Choosing a Strategy

- Use range-based sharding when range queries and ordered key ranges are important.
- Use hash-based sharding when even distribution is a priority.
- Use directory-based sharding when flexible assignment is required.
- Use geographic sharding when location, latency, or data residency matters.
- Use vertical sharding when separating business domains or workloads.

The correct strategy depends on query patterns, write volume, data growth, consistency requirements, and operational complexity.
