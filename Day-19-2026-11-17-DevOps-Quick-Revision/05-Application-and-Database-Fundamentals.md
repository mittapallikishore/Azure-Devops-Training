# 05 – Application and Database Fundamentals

## Three-tier architecture
- **Frontend:** user interface (HTML, CSS, JavaScript).
- **Backend:** business logic and API (Node.js, Express).
- **Database:** persistent data storage (for example PostgreSQL).

Flow: browser/client → HTTP API → backend validation/business logic → database → response.

## REST API
- GET – retrieve
- POST – create
- PUT – replace
- PATCH – partially update
- DELETE – remove

Common status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Internal Server Error.

## Relational database
- Database contains tables.
- Table contains rows and columns.
- Primary key uniquely identifies a row.
- Foreign key references another table.
- Constraints protect data integrity.
- Indexes can speed up reads but add storage and write overhead.

## SQL examples
```sql
SELECT id, title, status
FROM tasks
WHERE status = 'open';

INSERT INTO tasks (title, status)
VALUES ('Prepare release', 'open');

UPDATE tasks
SET status = 'done'
WHERE id = 10;

DELETE FROM tasks
WHERE id = 10;
```

## Relationships and joins
- One-to-one, one-to-many, many-to-many.
- INNER JOIN returns matching rows.
- LEFT JOIN returns all left-side rows and matching right-side rows.
- Use `EXPLAIN` / `EXPLAIN ANALYZE` to understand query plans.

## ACID transactions
- Atomicity – all or nothing.
- Consistency – preserve constraints.
- Isolation – concurrent transactions behave safely.
- Durability – committed data persists.

## Application security
- Use parameterized SQL queries to prevent SQL injection.
- Validate inputs on the server.
- Store passwords using an appropriate password-hashing algorithm.
- Use environment variables or secret stores for credentials.
- Do not expose database credentials to frontend code.

## Node.js reminders
Use `npm ci` for reproducible CI installs when a lockfile exists. Keep dependencies locked and test API endpoints, error handling and health checks.

## Interview check
**Why use database indexes?** They improve lookup performance for suitable queries, but require storage and can slow inserts, updates and deletes.
