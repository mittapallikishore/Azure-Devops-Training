# Read and Write Routing

## Objective
Demonstrate how database operations are routed between the PostgreSQL primary and replica.

## Routing Strategy
- INSERT, UPDATE and DELETE operations are performed on the primary.
- SELECT operations for read-heavy workloads can be directed to the replica.
- The replica remains read-only while operating in standby mode.

## Tests Performed

### Customer Insert
Inserted a customer on the primary:
- Name: Replication Test
- Email: replication.test@example.com
- Customer ID: 4

The customer record was visible when queried from the replica.

### Product Update
Updated the Laptop price on the primary from 65000 to 66000. The updated value was visible on the replica.

### Product Insert
Inserted Keyboard with price 1800 and stock 25 on the primary. The new product was visible on the replica.

## Important Considerations
- Asynchronous replication can introduce a delay before changes become visible on the replica.
- Applications requiring immediate read-after-write consistency should read from the primary.
- Replicas improve read scalability but do not automatically distribute write operations.

## Outcome
Primary write operations and replica read operations were successfully demonstrated.
