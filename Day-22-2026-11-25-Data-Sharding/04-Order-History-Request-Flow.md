# 04 – Order History Request Flow

## 1. Scenario

An e-commerce application has three database shards. CustomerID is used as the shard key.

| Shard | Customer ID range |
|---|---|
| Shard 1 | 1–100,000 |
| Shard 2 | 100,001–200,000 |
| Shard 3 | 200,001–300,000 |

A customer wants to view their previous orders.

## 2. Example API Request

GET /api/customers/150250/orders

The requested CustomerID is 150250.

## 3. Request Processing

**Step 1 – Frontend**

The customer opens the order-history page. The frontend sends an authenticated API request.

**Step 2 – API Layer**

The API receives the request, validates its parameters, authenticates the user, and checks authorization.

**Step 3 – Extract Shard Key**

The application extracts CustomerID 150250.

**Step 4 – Shard Router**

The router checks the configured shard map.

150250 falls within the range 100001–200000.

**Step 5 – Database Query**

The application sends the order-history query to Shard 2.

Conceptual SQL:

SELECT * FROM Orders
WHERE CustomerID = 150250
ORDER BY OrderDate DESC;

**Step 6 – Return Response**

Shard 2 returns the matching orders. The API formats the result and sends it to the frontend.

## 4. Architecture Flow

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
    +---- Shard 1
    |
    +---- Shard 2  <-- CustomerID 150250
    |
    +---- Shard 3

## 5. Why Does This Improve Performance?

The application knows which shard contains the requested customer's data. It does not need to search every database for a targeted order-history request.

This reduces unnecessary database work when the shard key is included in the request.

## 6. What If the Request Does Not Include a Shard Key?

If a request asks for all orders across all customers, the application may need to query multiple shards and combine the results.

This is called a scatter-gather or fan-out query. It can be more expensive and slower than a targeted single-shard query.

## 7. Validation Checklist

- Confirm the CustomerID is valid.
- Confirm the user is authorized to view the records.
- Confirm the shard map selects the correct destination.
- Confirm the query includes the shard key.
- Confirm the API handles unavailable shards.
- Confirm the response does not expose another customer's data.
