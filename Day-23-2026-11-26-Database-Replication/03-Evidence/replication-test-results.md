# Replication Test Results

This document summarizes the results observed during Day 23 terminal testing. It is a written summary, not a collection of saved screenshots or raw terminal transcripts.

## Functional Tests

| Test | Observed Result |
|---|---|
| Primary recovery state | pg_is_in_recovery() = false |
| Replica recovery state | pg_is_in_recovery() = true |
| Replication connection | Streaming, asynchronous |
| Customer insert | Visible on replica |
| Product update | Updated price visible on replica |
| Product insert | New product visible on replica |
| Replica stopped | Primary continued accepting writes |
| Replica restarted | Streaming replication resumed |
| Primary stopped | Replica remained available for reads |
| Write attempt on standby | Rejected as read-only |
| Primary restarted | Replication returned to streaming |

## Replication Observation
- End-to-end observation time: 396.48 milliseconds.
- Pending WAL replay bytes at follow-up check: 0.
- The observation duration includes client, container, query, and polling overhead. It is not pure network latency.

## Final Database Counts

| Table | Rows |
|---|---:|
| customers | 6 |
| products | 4 |
| orders | 2 |

## Limitation
Automatic failover and automatic promotion were not implemented. The standby remained read-only during primary outage.
