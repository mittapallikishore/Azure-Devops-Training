# 07 – Real-World E-commerce Architecture

## 1. Application Scenario

Consider an online shopping platform with millions of customers and a large order history.

The system needs to:
- Register and manage customers.
- Accept orders.
- Store order details.
- Retrieve customer order history.
- Support increasing traffic and data growth.

## 2. Architecture Components

**Frontend:** Website or mobile application used by customers.

**API Layer:** Receives requests and applies authentication, validation, and business rules.

**Shard Router:** Uses CustomerID and the shard map to select a database shard.

**Database Shards:** Store different portions of the customer and order dataset.

**Monitoring:** Tracks database health, latency, storage, and traffic.

## 3. Example Shard Assignment

| Database | Customer ID range |
|---|---|
| Shard 1 | 1–100,000 |
| Shard 2 | 100,001–200,000 |
| Shard 3 | 200,001–300,000 |

Each order record includes the CustomerID needed to locate its customer's shard.

## 4. Request Example

Customer 150250 opens the order-history page.

API request:

GET /api/customers/150250/orders

The router determines that CustomerID 150250 belongs to Shard 2.

The application queries Shard 2 and returns the customer's orders.

## 5. Data Model Considerations

A simplified Orders table may contain:

- OrderID
- CustomerID
- OrderDate
- OrderStatus
- TotalAmount

The database should index fields used frequently in queries, including the shard key where appropriate.

The exact schema and index strategy should be designed around real query patterns.

## 6. What Happens When a New Shard Is Added?

If Shard 3 becomes overloaded, the team may split its range and create Shard 4.

The team must:
1. Create Shard 4.
2. Migrate the selected customer and order records.
3. Validate the migrated data.
4. Update the shard map.
5. Direct new requests to the correct shard.
6. Monitor the new distribution.

## 7. Important Design Considerations

- Ensure customer authorization before returning order history.
- Keep related records accessible using the chosen shard key.
- Avoid unnecessary cross-shard joins.
- Plan for shard failures and retries.
- Maintain backup and recovery procedures.
- Monitor uneven traffic and data growth.

## 8. Expected Result

The application can distribute customer and order records across multiple database servers. Targeted requests can be routed to the correct shard, and additional capacity can be introduced as the platform grows.
