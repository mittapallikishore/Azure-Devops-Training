# SQL vs NoSQL Database Comparison and Selection

**Day:** 18 - 16 November 2026

## 1. Introduction

Databases store and manage information used by an application.

SQL and NoSQL are two major database approaches.

The selection depends on data structure, relationships,
transaction requirements, scalability and application needs.

## 2. SQL Databases

SQL means Structured Query Language.

SQL databases generally organize information into tables,
rows and columns.

Important features:
- Structured schemas.
- Primary and foreign keys.
- Relationships between tables.
- SQL queries.
- ACID transactions.
- Constraints and data integrity.

Examples:
- Microsoft SQL Server.
- Azure SQL Database.
- PostgreSQL.
- MySQL.

### Example SQL Tables

Customers:

| CustomerID | Name | Email |
|---|---|---|
| 101 | Kishore | kishore@example.com |

Orders:

| OrderID | CustomerID | Amount |
|---|---|---|
| 5001 | 101 | 2500 |

The CustomerID in Orders references the Customers table.

## 3. NoSQL Databases

NoSQL databases support data models that are not limited
to traditional relational tables.

Common types:
- Document databases.
- Key-value databases.
- Wide-column databases.
- Graph databases.

Important features:
- Flexible data models.
- Support for varying data structures.
- Distributed data storage options.
- Horizontal scalability in suitable database designs.

Examples:
- MongoDB.
- Azure Cosmos DB.
- Apache Cassandra.
- Redis (key-value data store).

### Example Document

{
  "productId": 101,
  "productName": "Laptop",
  "attributes": {
    "brand": "Example",
    "color": "Silver",
    "specifications": {
      "ram": "16GB",
      "storage": "512GB"
    }
  }
}

## 4. SQL vs NoSQL Comparison

| Feature | SQL | NoSQL |
|---|---|---|
| Data structure | Tables | Documents, key-value and other models |
| Schema | Generally predefined | Often flexible |
| Relationships | Strong relational support | Depends on data model |
| Transactions | Strong ACID support | Varies by database |
| Query language | SQL | Database-specific APIs and query languages |
| Scaling | Vertical and horizontal options | Often designed for distributed scaling |
| Best suited for | Relational and transactional data | Flexible and distributed data models |
| Examples | Azure SQL, PostgreSQL | Cosmos DB, MongoDB |

## 5. Application Requirements

Our example is a mobile shopping application.

It manages:

- Customers.
- Products.
- Orders.
- Order items.
- Inventory.
- Payment references.
- Product images.
- Notifications.

Important requirements:

1. Customer records must be consistent.
2. Orders must be stored reliably.
3. Order items must reference valid orders and products.
4. Inventory updates must be managed safely.
5. Payment and order operations need reliable transaction handling.
6. Product images should be stored separately from transactional records.

## 6. Selected Database: Azure SQL Database

### Decision

Azure SQL Database is selected as the primary database
for the shopping application's transactional information.

### Reasons for Selection

1. Relational data:
   Customers, orders and order items have clear relationships.

2. ACID transactions:
   Transactions help maintain consistency during order processing.

3. Data integrity:
   Primary keys, foreign keys and constraints help prevent invalid records.

4. Structured queries:
   SQL supports filtering, joining and reporting on relational data.

5. Reliable transactions:
   Multiple related database operations can be grouped into transactions.

6. Azure integration:
   Azure SQL Database integrates with Azure cloud services.

### Example Transaction

When a customer places an order:

1. Create the order record.
2. Add order item records.
3. Update inventory.
4. Record the payment result.

The database transaction should ensure that related database
changes succeed together or are rolled back when appropriate.

External payment processing must be coordinated separately;
a database transaction alone cannot guarantee rollback of an external payment.

## 7. Where NoSQL Could Be Used

NoSQL is not selected as the primary transactional database
for this example.

However, it could be considered for:

- Flexible product catalog attributes.
- Large volumes of semi-structured application events.
- Distributed application data.
- Specific high-scale access patterns.

A separate NoSQL database should only be introduced
when application requirements justify the additional complexity.

## 8. Final Database Architecture

| Application data | Proposed storage |
|---|---|
| Customers | Azure SQL Database |
| Orders | Azure SQL Database |
| Order Items | Azure SQL Database |
| Inventory transactions | Azure SQL Database |
| Payment references and status | Azure SQL Database |
| Product catalog | Azure SQL Database initially |
| Product images | Azure Blob Storage |
| Frequently accessed product data | Distributed Cache |
| Flexible high-volume data | NoSQL if future requirements justify it |

## 9. Final Decision

For the example mobile shopping application,
Azure SQL Database is the recommended primary database.

The main reason is that customer, order, inventory and
payment-related records require relational integrity
and reliable transactional processing.

NoSQL remains a possible complementary technology
for future requirements involving flexible data models
or specific distributed access patterns.

## Conclusion

SQL and NoSQL solve different data management problems.

The correct database should be selected based on
the application's actual requirements rather than
assuming that one technology is always better.
