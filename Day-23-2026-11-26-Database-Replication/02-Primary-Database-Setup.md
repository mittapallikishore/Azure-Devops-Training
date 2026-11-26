# Primary Database Setup

## 1. Objective
Configure a PostgreSQL primary database that accepts application writes and streams WAL records to a replica.

## 2. Technology
- PostgreSQL 16 Alpine
- Docker Compose
- Persistent Docker volume
- PostgreSQL initialization SQL

## 3. Primary Configuration
Container: `db-primary`

Database: `application_db`

Host port: `5432`

The Compose configuration defines the primary service, persistent storage, initialization scripts and replication settings.

Important PostgreSQL settings:
- `wal_level=replica`
- `max_wal_senders=10`
- `max_replication_slots=10`
- `hot_standby=on`

These settings enable WAL generation and transfer for physical replication.

## 4. Client and Replication Access
The primary uses `primary/pg_hba.conf` to define permitted database connections.

It includes access for:
- Application/database clients.
- The replication user connecting through the Docker network.

The replication account is configured with the PostgreSQL REPLICATION privilege.

Demo credentials are stored in the local Compose configuration. They must not be reused in production or exposed as real secrets in source control.

## 5. Database Initialization
Initialization script: `database/init.sql`

It creates the application database objects and sample data.

### customers
- customer_id
- name
- email
- city
- created_at

### products
- product_id
- product_name
- price
- stock

### orders
- order_id
- customer_id
- product_id
- quantity
- order_date

The initialization also creates the replication account.

## 6. Start the Database Environment
Run from the application directory:

`docker compose up -d`

Check containers:

`docker ps`

Check primary readiness:

`docker exec db-primary pg_isready -U app_admin -d application_db`

Expected readiness result: `accepting connections`.

## 7. Connect to the Primary
`docker exec -it db-primary psql -U app_admin -d application_db`

Example write:

`INSERT INTO customers (name, email, city) VALUES ('Primary Test', 'primary.test@example.com', 'Hyderabad');`

Verify:

`SELECT * FROM customers;`

## 8. Verify Primary Role
`SELECT pg_is_in_recovery();`

Expected: `false`, meaning the server is not operating as a standby.

## 9. Verify Connected Replica
`SELECT application_name, state, sync_state FROM pg_stat_replication;`

Observed:
- application_name: `db-replica`
- state: `streaming`
- sync_state: `async`

## 10. Key Learning
The primary is the writable source of truth. WAL configuration and replication access rules allow a standby server to receive and replay database changes.
