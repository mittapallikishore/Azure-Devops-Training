# 05 - End-to-End Testing and Validation

## Objective
Validate the complete application flow, including Docker deployment, gateway routing, API security, rate limiting, payment processing, and circuit breaker recovery.

## Validation Environment

| Component | Address or port |
|---|---|
| API Gateway | `http://localhost:8080` |
| Web application | Container port 3000 |
| Payment Service | Container port 4000 |
| Docker Compose | Three services |

## 1. Source Validation

Run from the `DevOps-Simple-App` directory:

```powershell
node --check server.js
node --check routes/users.js
node --check routes/products.js
node --check routes/orders.js
node --check payment-service/server.js
```

## 2. Application Tests

Run:

```powershell
npm.cmd test
```

Previously observed test results:
- Home endpoint: passed.
- Health endpoint: passed.
- Invalid route: returned 404 as expected.
- Total: 3 passed, 0 failed.

## 3. Compose Validation

Run:

```powershell
docker compose config
docker compose ps
```

Expected validation:
- Compose configuration is valid.
- Web, payment, and NGINX services are running.

## 4. Gateway Validation

Test the gateway health endpoint and the API routes through host port 8080.

Previously observed:
- Gateway health returned HTTP 200.
- Orders API returned HTTP 200.
- Product search returned HTTP 200.

## 5. API Key Validation

Test with:
- An invalid API key.
- The configured valid training API key.

Previously observed:
- Invalid key returned HTTP 401.
- Valid key returned HTTP 200.

## 6. Rate-Limit Validation

Send rapid requests to the product-search endpoint.

Previously observed:
- First request returned HTTP 200.
- Five subsequent rapid requests returned HTTP 429.

NGINX logs showed the rejected requests had empty upstream fields, indicating gateway-level rejection.

## 7. Payment Validation

Submit a payment request for sample order 501.

Previously observed:
- Payment Service approved the payment.
- The response contained a transaction ID.
- The order status changed to Paid.

## 8. Circuit Breaker Validation

Simulate a Payment Service outage:
1. Stop the Payment Service.
2. Submit payment requests.
3. Observe failures and OPEN state.
4. Wait for the recovery period.
5. Restart the Payment Service.
6. Verify the HALF-OPEN probe and successful recovery to CLOSED.

Previously observed:
- Three failures caused the circuit to open.
- The recovery probe succeeded after the service restarted.
- The circuit returned to CLOSED.

## 9. Log Validation

Inspect container logs:

```powershell
docker compose logs --tail 100 nginx
docker compose logs --tail 100 web
docker compose logs --tail 100 payment
```

Review request IDs, response statuses, upstream information, and error messages.

## Troubleshooting Notes

### HTTP 401
Check the API key supplied by the client and the gateway configuration.

### HTTP 429
Check the configured rate limit and avoid sending requests faster than the allowed rate.

### HTTP 502 or 503
Check Payment Service availability, container status, service DNS name, and application logs.

### Docker connection failure
Confirm Docker Desktop is running and `docker info` can reach the Docker Engine.

## Production Readiness Improvements

The training implementation still needs:
- HTTPS and secure secret management.
- Persistent database storage.
- Container health checks and readiness checks.
- Integration and failure-recovery tests.
- Distributed circuit breaker state for multiple replicas.
- Monitoring, alerting, and log retention.
- Review of duplicate `X-Request-ID` response headers.

## Final Outcome

Validated the API Gateway, web application, Payment Service, security checks, rate limiting, payment flow, and circuit breaker recovery using Docker Compose.
