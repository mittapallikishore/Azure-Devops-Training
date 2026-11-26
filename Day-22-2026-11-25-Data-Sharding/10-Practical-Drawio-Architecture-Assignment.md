# 10 – Practical Draw.io Architecture Assignment

## 1. Assignment Objective

Design a sharded database architecture for a real-world application using draw.io (diagrams.net).

The architecture must show:
- Application or API layer.
- Shard router or routing logic.
- Three database shards.
- CustomerID as the shard key, or a justified alternative.
- Request flow for retrieving order history.
- A method for adding capacity later.

## 2. Selected Application

E-commerce order management platform.

Customers use a website or mobile application to view their order history.

## 3. Proposed Architecture

Customer / Browser
    |
    v
Frontend Application
    |
    v
Application API
    |
    v
Authentication and Authorization
    |
    v
Shard Router
    |
    +------------------+------------------+
    |                  |                  |
    v                  v                  v
 Database Shard 1   Database Shard 2   Database Shard 3
 IDs 1–100000       IDs 100001–200000  IDs 200001–300000

## 4. Shard Key Justification

Selected shard key: CustomerID.

Reasons:
- Every customer has a unique identifier.
- Order records are associated with customers.
- Order-history requests contain the customer identifier.
- The router can use the identifier to select a shard.
- Related customer orders can be placed together.

The final design must also consider whether customer traffic is evenly distributed.

## 5. Example Request

GET /api/customers/150250/orders

Routing:
- CustomerID = 150250.
- Shard range = 100001–200000.
- Destination = Shard 2.

Shard 2 executes the order-history query and returns the matching records.

## 6. One Major Benefit

Horizontal scalability: additional database capacity can be introduced by adding shards and distributing records across them.

## 7. Two Trade-offs

**Trade-off 1 – Cross-shard queries:** Queries involving customers on multiple shards may need to contact multiple databases and combine results.

**Trade-off 2 – Rebalancing complexity:** Adding a shard can require data migration, consistency checks, routing updates, and careful cutover.

## 8. What Happens When a New Shard Is Added?

Initial design:

- Shard 1: 1–100000.
- Shard 2: 100001–200000.
- Shard 3: 200001–300000.

Example expanded design:

- Shard 1: 1–100000.
- Shard 2: 100001–200000.
- Shard 3: 200001–250000.
- Shard 4: 250001–300000.

The team provisions Shard 4, migrates the appropriate records, validates them, updates the shard map, and redirects requests safely.

## 9. Draw.io Implementation Steps

1. Open https://app.diagrams.net/
2. Create a new blank diagram.
3. Add a customer or browser component.
4. Add a frontend application component.
5. Add an application API component.
6. Add an authentication and authorization component.
7. Add a shard router component.
8. Add three database components.
9. Label each database with its CustomerID range.
10. Connect the components using directional arrows.
11. Add a request example showing CustomerID 150250 routing to Shard 2.
12. Add a note explaining the shard key.
13. Add a separate note showing how Shard 4 can be introduced.
14. Save the editable diagram as `Data-Sharding-Architecture.drawio`.
15. Export a PNG or PDF evidence copy if required.

## 10. Diagram Validation Checklist

- [ ] Frontend and API layer are shown.
- [ ] Shard router is shown.
- [ ] Three initial database shards are shown.
- [ ] Each shard has a clear CustomerID range.
- [ ] CustomerID is identified as the shard key.
- [ ] Order-history request flow is shown.
- [ ] CustomerID 150250 routes to Shard 2.
- [ ] One benefit is explained.
- [ ] Two trade-offs are explained.
- [ ] New-shard scaling approach is documented.
- [ ] Diagram is saved in editable draw.io format.

## 11. Expected Outcome

The completed diagram should demonstrate how an application routes customer requests to the correct database shard, distributes data across multiple database nodes, and introduces additional capacity when the application grows.
