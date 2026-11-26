# Replica Database Setup

## 1. Objective
Configure a PostgreSQL standby database that receives data from the primary using streaming replication.

## 2. Replica Configuration
- Container: `db-replica`
- Image: `postgres:16-alpine`
- Host port: `5433`
- Persistent storage: Docker volume
- Database: `application_db`

The replica startup process waits for the primary to become available before initializing its data directory.

## 3. Base Backup
The replica startup process uses `pg_basebackup` to copy the primary database.

Command:

`pg_basebackup -h primary -p 5432 -D "$PGDATA" -U replicator -Fp -Xs -P -R`

Explanation:
- `-h primary`: connects to the primary service on the Docker network.
- `-p 5432`: uses the PostgreSQL container port.
- `-D "$PGDATA"`: writes backup data into the replica data directory.
- `-U replicator`: uses the replication account.
- `-Fp`: creates a plain-format backup.
- `-Xs`: streams required WAL during backup.
- `-P`: displays progress.
- `-R`: creates standby connection configuration.

The replica then starts PostgreSQL in hot standby mode.

## 4. Start and Inspect Containers
- `docker compose up -d`
- `docker ps`
- `docker logs db-replica`
- `docker exec db-replica pg_isready -U app_admin -d application_db`

## 5. Verify Replica Role
`SELECT pg_is_in_recovery();`

Expected: `true`, confirming the server is operating as a standby in recovery mode.

## 6. Verify Data on Replica
`SELECT customer_id, name, email FROM customers ORDER BY customer_id;`

The replica contained the same customer records as the primary during final validation.

## 7. Verify WAL Receiver
`SELECT status, sender_host, sender_port, latest_end_lsn, latest_end_time FROM pg_stat_wal_receiver;`

Observed WAL receiver status: `streaming`.

Sender host: `primary`.

## 8. Read-Only Behaviour
A standby replica can serve SELECT queries, but normal writes are rejected.

Example:

`INSERT INTO customers (name, email, city) VALUES ('Replica Write Test', 'replica.write@example.com', 'Hyderabad');`

Observed during primary failure testing:

`ERROR: cannot execute INSERT in a read-only transaction`

This is expected standby behaviour.

## 9. Key Learning
A physical standby starts from a base backup and continuously receives and replays WAL records. While it remains a standby, it provides read access but does not accept ordinary application writes.
