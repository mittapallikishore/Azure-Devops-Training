# Database Failure Testing

## Objective
Validate primary and replica behavior during simulated database container failures.

## Test 1: Replica Failure

### Procedure
1. Stopped the `db-replica` container.
2. Confirmed that the primary database remained available.
3. Inserted a customer record into the primary.
4. Restarted the replica.
5. Checked replication status and queried the inserted customer on the replica.

### Observed Results
- The primary continued accepting writes while the replica was stopped.
- The customer insert succeeded.
- Streaming replication resumed after the replica restarted.
- The inserted customer became visible on the replica.

## Test 2: Primary Failure

### Procedure
1. Stopped the `db-primary` container.
2. Confirmed that the replica remained healthy.
3. Queried customer records from the replica.
4. Attempted an INSERT operation on the replica.
5. Restarted the primary.
6. Checked the replication connection.

### Observed Results
- The replica remained available for SELECT queries.
- Existing customer records could be read.
- An INSERT on the replica failed with `cannot execute INSERT in a read-only transaction`.
- After the primary restarted and became ready, streaming replication returned to the `streaming` state.

## High-Availability Finding
The replica did not automatically become a writable primary when the primary failed.

A PostgreSQL standby normally remains read-only until it is deliberately promoted.

## Production Recommendations
- Configure database health monitoring and alerting.
- Define a controlled failover and promotion procedure.
- Prevent split-brain by ensuring only one writable primary exists.
- Plan replica re-synchronization and failback.
- Test recovery procedures regularly.

## Outcome
Replica failure recovery and primary outage behavior were tested successfully. Automatic failover was not configured or tested.
