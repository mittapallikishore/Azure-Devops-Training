# API Gateway Practical Implementation

## 1. NGINX Routing Example

This example demonstrates routing to three backend services.

```nginx
events {
    worker_connections 1024;
}

http {
    upstream user_service {
        server user-service:3001;
    }

    upstream product_service {
        server product-service:3002;
    }

    upstream order_service {
        server order-service:3003;
    }

    server {
        listen 8080;

        location /api/users/ {
            proxy_pass http://user_service/;
        }

        location /api/products/ {
            proxy_pass http://product_service/;
        }

        location /api/orders/ {
            proxy_pass http://order_service/;
        }
    }
}
```

Important: the trailing slash in proxy_pass affects URI rewriting. In this example, `/api/products/101` is forwarded as `/101`.

The backend route must match the resulting path.

This is an illustrative routing configuration, not a complete production security configuration.

## 2. Azure API Management Policy Example

This policy illustrates rate limiting and adding a request header.

```xml
<policies>
    <inbound>
        <base />
        <rate-limit-by-key
            calls="100"
            renewal-period="60"
            counter-key="@(context.Subscription?.Id ?? context.Request.IpAddress)" />

        <set-header name="X-Application"
                    exists-action="override">
            <value>ecommerce-api</value>
        </set-header>
    </inbound>

    <backend>
        <base />
    </backend>

    <outbound>
        <base />
    </outbound>

    <on-error>
        <base />
    </on-error>
</policies>
```

This is an illustrative policy. Production deployments require appropriate authentication, security and error handling.

## 3. E-commerce Practical Scenario

Public endpoint:

`https://api.shopeasy.com`

| Request | Destination |
|---|---|
| `/api/users/login` | User Service |
| `/api/products` | Product Service |
| `/api/cart/items` | Cart Service |
| `/api/orders` | Order Service |
| `/api/payments` | Payment Service |
| `/api/shipping/5001` | Shipping Service |

### Customer Login

1. Customer submits credentials.
2. Gateway receives the request.
3. Gateway applies configured policies.
4. User Service validates credentials.
5. Authentication token is returned.
6. Client uses the token for protected operations.

### Product Browsing

1. Client requests product information.
2. Gateway checks eligible cached data.
3. On cache miss, Product Service is called.
4. Product information is returned.

### Order Placement

1. Customer submits an order.
2. Gateway forwards the request to Order Service.
3. Order Service validates the request.
4. Inventory is reserved or checked.
5. Payment Service processes payment.
6. Order status is updated.
7. Shipping and notification workflows may start.

Real distributed systems may use asynchronous messaging and the Saga pattern to coordinate operations and handle failures.

## 4. Hands-on Exercises

1. Draw a basic API Gateway architecture.
2. Create routing rules for User, Product and Order services.
3. Explain authentication and authorization.
4. Configure a sample rate-limiting policy.
5. Explain cache HIT and cache MISS.
6. Describe the e-commerce order workflow.
7. Identify the purpose of each NGINX upstream.
8. Explain the Azure APIM policy.
9. Describe how to validate a deployed API.
10. Explain how API Gateway configuration can be deployed through CI/CD.

## Learning Outcome

Understand practical API routing, policy configuration and an e-commerce API Gateway workflow.
