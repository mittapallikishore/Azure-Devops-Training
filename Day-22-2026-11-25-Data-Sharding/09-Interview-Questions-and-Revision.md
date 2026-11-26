# 09 – Interview Questions and Revision

## 1. What is Data Sharding?

Data sharding is the process of splitting a large dataset into smaller parts and distributing those parts across multiple database servers.

## 2. Why is Sharding Used?

It helps distribute storage and database workload when a single database server becomes a scalability bottleneck.

## 3. What Is a Shard Key?

A shard key is the field used to determine where a record is stored and which shard should receive a request.

## 4. Name Common Sharding Strategies.

- Range-based sharding.
- Hash-based sharding.
- Directory-based sharding.
- Geographic sharding.
- Vertical sharding.

## 5. What Is Range-Based Sharding?

It divides records according to ranges of shard-key values.

## 6. What Is Hash-Based Sharding?

It applies a hash function to a shard key to distribute records across shards.

## 7. What Is a Shard Router?

It is the component that uses shard-key information and routing metadata to direct a request to the correct database shard.

## 8. What Is a Hotspot?

A hotspot occurs when one shard receives significantly more traffic or writes than other shards.

## 9. What Is Rebalancing?

Rebalancing is the process of redistributing records or workload among shards to improve capacity and distribution.

## 10. What Happens When a New Shard Is Added?

The team provisions the shard, migrates the selected records, validates the data, updates routing metadata, and gradually directs traffic to the new shard.

## 11. What Are the Disadvantages of Sharding?

- Cross-shard query complexity.
- More complicated transactions.
- Data migration and rebalancing.
- Operational overhead.
- Potential hotspots and uneven distribution.

## 12. Sharding vs Replication

Sharding divides data among nodes. Replication creates copies of data on multiple nodes.

## 13. Sharding vs Partitioning

Partitioning divides a dataset into logical parts, which may exist within one database. Sharding distributes data across separate database nodes or instances.

## 14. What Is a Good Shard Key?

A good shard key supports common queries, has sufficient distinct values, distributes workload effectively, and is stable.

## 15. Practical Scenario

An e-commerce platform stores orders for 300,000 customers.

- Shard 1 stores IDs 1–100,000.
- Shard 2 stores IDs 100,001–200,000.
- Shard 3 stores IDs 200,001–300,000.

Customer 150250 requests order history. The router selects Shard 2.

## Quick Revision

| Term | Meaning |
|---|---|
| Shard | Part of a distributed dataset |
| Shard key | Field used to select a shard |
| Router | Directs requests |
| Hotspot | Unevenly overloaded shard |
| Rebalancing | Redistributing records |
| Horizontal scaling | Adding more nodes |
| Replication | Maintaining copies of data |

## Final Learning Outcome

Understand how a database can distribute data across multiple shards, route requests using a shard key, and scale by adding capacity while managing consistency and operational complexity.
