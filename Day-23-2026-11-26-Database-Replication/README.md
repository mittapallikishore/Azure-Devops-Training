# Day 23 - Database Replication

## Objective
Implement PostgreSQL primary-replica streaming replication using Docker Compose.

## Documentation

1. [Database Replication Fundamentals](01-Database-Replication-Fundamentals.md)
2. [Primary Database Setup](02-Primary-Database-Setup.md)
3. [Replica Database Setup](03-Replica-Database-Setup.md)
4. [Read and Write Routing](04-Read-and-Write-Routing.md)
5. [Replication Lag Measurement](05-Replication-Lag-Measurement.md)
6. [Database Failure Testing](06-Database-Failure-Testing.md)
7. [Architecture and Key Learnings](07-Architecture-and-Key-Learnings.md)

## Project Structure

- `02-Application/` - Docker Compose and PostgreSQL configuration.
- `03-Evidence/` - Architecture and practical test evidence.

## Final Result

PostgreSQL primary-replica streaming replication was configured and validated. Both databases recovered after failure testing, and replication returned to streaming mode.
