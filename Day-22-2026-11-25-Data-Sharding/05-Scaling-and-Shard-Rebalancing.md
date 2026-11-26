# 05 – Scaling and Shard Rebalancing

## 1. Why Is Scaling Required?

As application traffic and data volume grow, existing shards may run out of storage or processing capacity.

Symptoms include:
- High CPU or memory utilization.
- Increased database query latency.
- Storage approaching capacity.
- More concurrent connections.
- Uneven traffic across shards.

## 2. Vertical Scaling

Vertical scaling increases the resources of an existing database server.

Examples:
- More CPU cores.
- More RAM.
- Faster storage.
- Higher I/O capacity.

It is relatively straightforward but has hardware, cost, and maximum-capacity limits.

## 3. Horizontal Scaling

Horizontal scaling adds more database servers or shards and distributes records and requests across them.

Example: Start with three shards and add a fourth shard when capacity is needed.

## 4. Adding a New Shard

Initial configuration:

| Shard | Customer ID range |
|---|---|
| Shard 1 | 1–100,000 |
| Shard 2 | 100,001–200,000 |
| Shard 3 | 200,001–300,000 |

Proposed configuration:

| Shard | Customer ID range |
|---|---|
| Shard 1 | 1–100,000 |
| Shard 2 | 100,001–200,000 |
| Shard 3 | 200,001–250,000 |
| Shard 4 | 250,001–300,000 |

The new shard receives part of the data previously assigned to Shard 3.

## 5. Rebalancing Process

1. Provision the new database server.
2. Configure database security, networking, backups, and monitoring.
3. Define the new shard range or mapping.
4. Identify records that must move.
5. Copy or migrate the selected records.
6. Keep source and destination data consistent during migration.
7. Validate record counts and data integrity.
8. Update routing metadata.
9. Gradually direct traffic to the new shard.
10. Monitor latency, errors, and database load.
11. Retire old copies only after successful validation and an approved cutover.

## 6. Important Migration Approaches

**Offline migration:** Stop writes during migration. This is simpler but causes downtime.

**Online migration:** Copy data while the application continues running, capture ongoing changes, and perform a controlled cutover. This reduces downtime but is more complex.

## 7. Hash Sharding and New Nodes

With simple modulo hashing, changing the shard count can cause many keys to map to different shards.

Consistent hashing or a virtual-shard approach can reduce the amount of data that needs to move when capacity changes.

## 8. Monitoring After Scaling

Monitor:
- CPU and memory per shard.
- Storage utilization.
- Read/write throughput.
- Query latency.
- Connection counts.
- Replication lag, where replication is used.
- Error rates and failed requests.
- Data distribution and hotspots.

## 9. Key Takeaway

Adding a shard is not just creating another database. The data placement, migration, routing, consistency, validation, and monitoring processes must all be handled safely.
