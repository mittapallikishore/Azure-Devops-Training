# Replication Lag Measurement

## Objective
Measure how quickly a database change made on the primary becomes visible on the replica.

## Test Performed
Inserted a customer record into the primary database:
- Name: Replication Lag Test
- Email: lagtest20261126171853@example.com
- City: Hyderabad
- Customer ID: 6

A polling test repeatedly queried the replica until the record became visible.

## Observed Results
- End-to-end observation time: 396.48 milliseconds.
- Pending WAL replay bytes at the follow-up check: 0.

## Understanding the Measurement
The 396.48 ms represents the complete observation time. It includes the INSERT command, Docker and PostgreSQL client overhead, replica query, and polling overhead.

It is not a measurement of pure network latency or isolated PostgreSQL replication delay.

The WAL difference check returned zero pending replay bytes at the time it was checked.

## Important Considerations
- Asynchronous replication does not guarantee zero lag.
- Heavy write workloads, network interruptions, or slow storage can increase replication lag.
- Production monitoring should track replication state, WAL positions, replay delay, and replication-slot health.

## Outcome
The inserted record became visible on the replica during the first polling observation. The measured end-to-end observation time was 396.48 ms.
