# Day 21 - API Gateway Acceptance Criteria

## Project
DevOps-Simple-App | 19 November 2026

## 1. Five Core Concepts

### 1. API Gateway
An API Gateway provides a single entry point between clients and backend services. NGINX handles reverse proxy routing, API-key authentication, rate limiting, and request logging.

### 2. Service Discovery
Service discovery allows services to locate each other without depending on fixed container IP addresses. Order Service communicates with Payment Service using Docker Compose DNS through `http://payment:4000/payments`.

### 3. Rate Limiting
Rate limiting controls how frequently clients can send requests and protects backend services from excessive traffic. Product search has a dedicated limit of 1 request per second with burst 1, and HTTP 429 responses were verified.

### 4. Circuit Breaker
A circuit breaker prevents repeated calls to an unhealthy downstream service. Our implementation opens after three consecutive payment failures, waits 10 seconds, and permits a controlled HALF-OPEN recovery probe.

### 5. Failure Handling and Recovery
Failure handling prevents an unavailable backend service from continuously affecting application requests. The circuit breaker blocks payment calls during the failure and checks service recovery after the configured timeout.

## 2. Failure Scenario and Recovery

**Scenario:** Payment Service becomes unavailable.

1. Stop the Payment Service container.
2. Send payment requests through the API Gateway.
3. After three consecutive failures, the circuit breaker changes from CLOSED to OPEN.
4. Further payment requests receive HTTP 503 quickly without waiting for the unavailable service.
5. Restart Payment Service.
6. After the 10-second recovery timeout, the circuit breaker permits a HALF-OPEN probe.
7. A successful payment response closes the circuit breaker and resets the failure count.

**Test result:** The complete CLOSED → OPEN → HALF-OPEN → CLOSED cycle was successfully tested.

## 3. Hypothetical RTO and RPO

These are proposed production targets, not measured recovery results.

| Metric | Target | Explanation |
|---|---:|---|
| RTO | 15 minutes | Restore affected payment functionality within 15 minutes. |
| RPO | 5 minutes | Limit acceptable data loss to a maximum of 5 minutes. |

**Limitation:** The current circuit breaker stores its state in application memory and resets when the process restarts. Persistent payment transaction storage, backups, and recovery procedures would be required to meet the proposed RPO.

## 4. Technical Validation Results

| Test | Result |
|---|---|
| NGINX reverse proxy and API routing | Verified |
| Missing API key | HTTP 401 |
| Invalid API key | HTTP 401 |
| Valid API key | HTTP 200 for successful requests |
| Public health endpoint | HTTP 200 |
| Product-search rate limiting | HTTP 429 verified |
| NGINX configuration and logs | Verified |
| Order-to-Payment service discovery | Verified |
| Circuit breaker opens after three failures | Verified |
| Fast-fail response while OPEN | HTTP 503 |
| HALF-OPEN recovery probe | Verified |
| Final circuit breaker state | CLOSED |

## 5. Team Presentation Notes

1. Explain the architecture diagram and why an API Gateway is required.
2. Demonstrate API-key authentication and rate limiting.
3. Explain how Order Service discovers Payment Service through Docker Compose DNS.
4. Describe the CLOSED, OPEN, and HALF-OPEN circuit breaker states.
5. Explain the Payment Service failure simulation and recovery.
6. Present the hypothetical RTO and RPO targets.

### Short Team Explanation

"Our application uses NGINX as an API Gateway in front of backend services. It provides authentication, rate limiting, reverse proxy routing, and request logging. Order Service discovers Payment Service through Docker Compose DNS. We implemented a circuit breaker that opens after three consecutive failures, rejects further requests quickly, and allows a recovery probe after ten seconds. We tested the complete failure and recovery cycle."

## 6. Evidence Checklist

Capture actual screenshots or terminal output for:

- NGINX configuration validation and routing.
- Missing, invalid, and valid API-key responses.
- Public health endpoint response.
- Product-search HTTP 200 and HTTP 429 responses.
- Docker Compose service status and NGINX logs.
- Successful Order-to-Payment request and matching request IDs.
- Circuit breaker OPEN state and fast HTTP 503 rejection.
- HALF-OPEN recovery and final CLOSED state.

Only mark evidence as captured after the actual files have been saved.
