-- Create replication account
CREATE ROLE replicator WITH
    LOGIN
    REPLICATION
    PASSWORD 'ReplicaPass123!';

-- Customer table
CREATE TABLE customers (
    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    city VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Product table
CREATE TABLE products (
    product_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0
);

-- Orders table
CREATE TABLE orders (
    order_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    product_id INT REFERENCES products(product_id),
    quantity INT NOT NULL,
    order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample customers
INSERT INTO customers (name, email, city)
VALUES
('Kishore', 'kishore@example.com', 'Hyderabad'),
('Rahul', 'rahul@example.com', 'Bengaluru'),
('Priya', 'priya@example.com', 'Chennai');

-- Insert sample products
INSERT INTO products (product_id, product_name, price, stock)
OVERRIDING SYSTEM VALUE
VALUES
(101, 'Laptop', 65000.00, 10),
(102, 'Smartphone', 25000.00, 20),
(103, 'Headphones', 2500.00, 50);

-- Insert sample orders
INSERT INTO orders (customer_id, product_id, quantity)
VALUES
(1, 101, 1),
(2, 102, 2);

-- Verify sample data
SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;
