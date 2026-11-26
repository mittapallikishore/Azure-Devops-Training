# Database Replication Architecture Evidence

## Architecture
- Application writes are directed to the PostgreSQL primary.
- Read queries can be directed to the PostgreSQL replica.
- The primary streams WAL records asynchronously to the replica.

## Components
- Primary: db-primary, host port 5432.
- Replica: db-replica, host port 5433.
- Replication: PostgreSQL WAL streaming.
- Replica initialization: pg_basebackup.
- Orchestration: Docker Compose.

## Validation
The primary reported a streaming asynchronous replication connection to the replica. The replica WAL receiver also reported streaming during final validation.
