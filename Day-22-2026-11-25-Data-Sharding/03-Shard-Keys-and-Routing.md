# 03 – Shard Keys and Routing

## 1. What Is a Shard Key?

A shard key is the field or combination of fields used to decide which shard stores a record.

Example:
- CustomerID
- UserID
- TenantID
- RegionCode
- AccountID

If CustomerID is the shard key, records are distributed according to the customer ID value or its mapping.

## 2. Characteristics of a Good Shard Key

A good shard key should:
- Distribute records and traffic reasonably evenly.
- Be present in common application requests.
- Avoid concentrating writes on one shard.
- Be stable and not frequently updated.
- Support the application's most important query patterns.
- Have enough distinct values for future growth.

## 3. Choosing CustomerID

For an order-history application, CustomerID is a useful shard-key candidate because:
- Every customer has a unique identifier.
- An order belongs to a customer.
- Order-history requests normally include the customer identifier.
- A customer's orders can be stored together.
- The router can identify the target shard using the customer ID.

However, CustomerID is not automatically the best key for every system. The design must consider traffic distribution and access patterns.

## 4. What Is a Shard Router?

A shard router is the application component responsible for determining the destination database shard.

It can use:
- A range map.
- A hash function.
- A directory or metadata lookup.
- A database-specific routing mechanism.

## 5. Example Range Routing

| Customer ID | Destination |
|---|---|
| 1–100,000 | Shard 1 |
| 100,001–200,000 | Shard 2 |
| 200,001–300,000 | Shard 3 |

Request:

GET /api/customers/150250/orders

The router checks the range and selects Shard 2.

## 6. Routing Flow

1. Receive the API request.
2. Authenticate the caller and authorize access.
3. Extract CustomerID.
4. Read the shard map.
5. Identify the target shard.
6. Execute the database query.
7. Return the result through the API.

## 7. Important Security Consideration

The application must not trust a customer ID supplied by the caller without authorization checks. Authentication and authorization must verify that the caller is permitted to access that customer's records.

## 8. Common Mistakes

- Choosing a shard key with very few distinct values.
- Selecting a key that creates uneven traffic.
- Choosing a key not available in common queries.
- Forgetting to update routing metadata during migration.
- Allowing application code to connect to arbitrary shards without controlled routing.

## 9. Key Takeaway

The shard key determines data placement. The router uses the shard key and routing metadata to send requests to the correct database shard.
