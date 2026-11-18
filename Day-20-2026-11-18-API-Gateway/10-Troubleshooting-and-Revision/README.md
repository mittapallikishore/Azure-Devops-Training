# API Gateway Troubleshooting and Quick Revision

## 1. Common HTTP Status Codes

| Code | Meaning | Typical cause |
|---|---|---|
| 200 | OK | Request successful |
| 201 | Created | Resource created |
| 400 | Bad Request | Invalid request |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Incorrect route or resource |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Backend application error |
| 502 | Bad Gateway | Invalid or failed upstream response |
| 503 | Service Unavailable | Backend unavailable |
| 504 | Gateway Timeout | Backend did not respond in time |

## 2. Troubleshooting 401

Possible causes:
- Missing token.
- Expired token.
- Invalid signature.
- Incorrect issuer.
- Incorrect audience.

Checks:
1. Confirm the token is present.
2. Validate expiration.
3. Verify signature.
4. Check issuer and audience.
5. Inspect gateway authentication policy.

## 3. Troubleshooting 403

Possible causes:
- User lacks permission.
- Incorrect role.
- Subscription restrictions.
- Gateway policy denies access.
- Backend resource ownership check fails.

## 4. Troubleshooting 404

Possible causes:
- Incorrect API path.
- Incorrect HTTP method.
- Missing route.
- Incorrect URL rewrite.
- Backend endpoint does not exist.

## 5. Troubleshooting 429

Possible causes:
- Rate limit exceeded.
- Incorrect counter key.
- Unexpected traffic spike.
- Client retry behavior.

Check rate-limit policies and request patterns.

## 6. Troubleshooting 502

Possible causes:
- Backend unavailable.
- DNS resolution failure.
- Network connectivity problem.
- TLS failure.
- Invalid upstream response.

## 7. Troubleshooting 504

Possible causes:
- Slow backend.
- Database delays.
- Downstream dependency failure.
- Network latency.
- Gateway timeout configuration.

## 8. General Troubleshooting Sequence

1. Check gateway logs.
2. Identify the HTTP status code.
3. Verify routing configuration.
4. Check authentication and authorization.
5. Check backend health.
6. Verify DNS and network connectivity.
7. Inspect application logs.
8. Apply the correction.
9. Retest the API.

## 9. Interview and Revision Questions

1. What is an API Gateway?
2. Why is an API Gateway needed?
3. Explain the API Gateway request lifecycle.
4. What are the main responsibilities of a gateway?
5. Differentiate API Gateway and Load Balancer.
6. What is the difference between authentication and authorization?
7. What is rate limiting?
8. Explain token bucket algorithm.
9. What is caching?
10. What is TLS termination?
11. How does a gateway support microservices?
12. What is service discovery?
13. What is Backend for Frontend?
14. What is the difference between API Gateway and Service Mesh?
15. Explain Kong, NGINX and Azure API Management.
16. How can API Gateway be integrated with CI/CD?
17. What causes HTTP 401, 403, 429, 502 and 504?
18. How can gateway availability be improved?
19. Why is idempotency important for payment APIs?
20. How can API Gateway policies be managed as code?

## 10. Quick Revision

- API Gateway: Centralized API entry point.
- Routing: Sends requests to appropriate services.
- Authentication: Verifies identity.
- Authorization: Verifies permissions.
- Rate limiting: Controls request volume.
- Caching: Reuses eligible responses.
- Load balancing: Distributes traffic.
- TLS termination: Handles external TLS connections.
- Microservices: Independent application services.
- Service Mesh: Manages internal service communication.
- CI/CD: Automates gateway and application deployment.

## Training Outcome

By completing this topic, you should be able to explain API Gateway architecture, responsibilities, tools, security, microservices integration, DevOps implementation and common troubleshooting scenarios.
