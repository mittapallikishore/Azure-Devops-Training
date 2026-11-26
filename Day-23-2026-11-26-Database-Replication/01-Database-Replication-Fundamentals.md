# Database Replication Fundamentals

## 1. Objective
Understand database replication and implement a PostgreSQL primary-replica architecture.

## 2. What Is Database Replication?
Database replication maintains copies of database data on multiple database servers. Changes committed on the primary are transferred to replica databases.

## 3. Why Replication Is Needed
- Read scalability: distribute read queries across replicas.
- High availability: maintain another database copy.
- Disaster recovery: retain data on another server.
- Workload distribution: reduce read pressure on the primary.
- Reporting: run read-heavy queries on replicas.

## 4. Primary and Replica Roles

### Primary
- Accepts INSERT, UPDATE and DELETE operations.
- Generates write-ahead log records.
- Sends WAL changes to replicas.
- Acts as the authoritative writable database.

### Replica
- Receives WAL records.
- Replays database changes.
- Serves SELECT queries.
- Remains read-only while operating as a standby.

## 5. Replication Types

### Synchronous replication
The primary waits for the configured synchronous replica acknowledgement before reporting transaction success.

Advantages:
- Stronger protection against losing acknowledged transactions when correctly configured.
- Useful for strict durability requirements.

Disadvantages:
- Can increase write latency.
- Replica availability can affect write availability.

### Asynchronous replication
The primary does not wait for the replica to replay every transaction before committing.

Advantages:
- Lower write latency.
- Primary can continue writes during temporary replica disconnection.
- Useful for read scaling.

Disadvantages:
- A primary failure can result in loss of changes not yet received or replayed by a promoted replica.

## 6. PostgreSQL Streaming Replication
PostgreSQL uses write-ahead logging (WAL) to record database changes.

The primary sends WAL records to the replica. The replica receives and replays those records.

Important PostgreSQL settings:
- `wal_level=replica`
- `max_wal_senders`
- `max_replication_slots`
- `hot_standby=on`

## 7. Practical Implementation
This project uses:
- PostgreSQL 16 Alpine.
- Docker Compose.
- One primary container.
- One replica container.
- Streaming replication.
- Asynchronous replication mode.

Container names:
- Primary: `db-primary`
- Replica: `db-replica`

Database: `application_db`

## 8. Validation

Primary recovery check: `SELECT pg_is_in_recovery();`

Expected: `false`.

Replica recovery check: `SELECT pg_is_in_recovery();`

Expected: `true`.

Primary replication status:

`SELECT application_name, state, sync_state FROM pg_stat_replication;`

Observed:
- application_name: `db-replica`
- state: `streaming`
- sync_state: `async`

## 9. Key Learning
Replication maintains additional database copies and can improve read scalability and availability. Asynchronous replication does not guarantee that every recently committed transaction has reached the replica when the primary fails.
