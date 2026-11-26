# Architecture and Key Learnings

## Project Objective
Build a PostgreSQL primary-replica environment using Docker Compose and asynchronous streaming replication.

## Architecture

Application
    |
    |-- INSERT / UPDATE / DELETE
    |           |
    |           v
    |     PostgreSQL Primary
    |       db-primary
    |       Port 5432
    |           |
    |           | WAL Streaming (Asynchronous)
    |           v
    |     PostgreSQL Replica
    |       db-replica
    |       Port 5433
    |
    |-- SELECT
                |
                v
          PostgreSQL Replica

## Components
- PostgreSQL 16 Alpine primary container.
- PostgreSQL 16 Alpine replica container.
- Docker Compose for container orchestration.
- Persistent Docker volumes for database storage.
- Replication account for streaming replication.
- pg_hba.conf rules for client and replication access.
- pg_basebackup to initialize the replica.

## Primary Configuration
- wal_level=replica
- max_wal_senders=10
- max_replication_slots=10
- hot_standby=on

The replica was initialized using pg_basebackup with WAL streaming and automatic standby configuration through -R.

## Validation Results
- Primary reported pg_is_in_recovery() = false.
- Replica reported pg_is_in_recovery() = true.
- Primary replication status showed db-replica in streaming state with asynchronous mode.
- Replica WAL receiver status showed streaming.
- Both containers were healthy during final validation.
- INSERT and UPDATE changes made on the primary were visible on the replica.
- Replica outage recovery was tested.
- Primary outage behavior was tested.
- Replica remained read-only during primary outage because no promotion procedure was configured.

## Final Database Counts
| Table | Rows |
|---|---:|
| customers | 6 |
| products | 4 |
| orders | 2 |

## Troubleshooting Notes
- A locale warning (sh: locale: not found) appeared in the Alpine environment. It did not prevent replication.
- The Keyboard product received product ID 1 because earlier sample rows used explicit IDs without advancing the identity sequence. This was a sequence-management issue, not a replication failure.
- During primary restart, the database needed time to become ready before accepting connections.
- The replica correctly rejected writes while operating in standby mode.

## Security and Production Considerations
- Use a secrets manager rather than hardcoded credentials.
- Restrict replication network access.
- Use TLS where required.
- Monitor replication lag and WAL retention.
- Configure backups independently of replication.
- Define and test failover, promotion, and failback procedures.

## Final Outcome
A working PostgreSQL asynchronous streaming replication setup was created and tested using Docker Compose. Primary-to-replica synchronization, read/write behavior, replication recovery, and primary outage behavior were validated.
