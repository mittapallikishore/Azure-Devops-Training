# 03 - API Gateway Security and Rate Limiting

## Objective
Configure API key validation and rate limiting at the NGINX API Gateway.

## Security Configuration

The NGINX configuration includes:
- API key validation.
- General API rate limiting.
- A dedicated product-search rate limit.
- Request ID forwarding.
- Structured JSON access logging.

## API Key Validation

The gateway checks the configured API key before forwarding protected API requests.

Test cases:

| Test | Expected result | Observed result |
|---|---|---|
| Invalid API key | HTTP 401 | HTTP 401 |
| Valid API key | Backend response | HTTP 200 |

The training configuration uses a demonstration API key. It must not be treated as a production secret.

## Rate Limiting

NGINX uses request rate zones to control how frequently clients can send requests.

The configuration includes:
- General API limit: 2 requests per second, with burst capacity of 2.
- Product search limit: 1 request per second, with burst capacity of 1 and `nodelay`.

The product search endpoint is:

`/api/products/search?q=Laptop`

## Testing Steps

1. Send a product-search request with a valid API key.
2. Confirm the first request succeeds.
3. Send multiple requests rapidly.
4. Observe the HTTP response codes.
5. Inspect NGINX access logs.

## Test Results

| Test | Observed result |
|---|---|
| Invalid API key | 401 Unauthorized |
| Valid API key | 200 OK |
| Product search | 200 OK |
| Rapid repeated requests | First 200, subsequent requests 429 |

## Understanding HTTP 429

HTTP 429 means Too Many Requests. It indicates that the client exceeded the configured request rate.

The gateway rejects excessive requests instead of forwarding them to the backend.

## Request ID and Logging

The gateway logs structured request information, including:
- Timestamp
- Client IP
- HTTP method
- Request URI
- HTTP status
- Request duration
- Upstream address
- Upstream status
- Upstream response time
- User agent
- Request ID

The response includes an `X-Request-ID` header for request tracing.

## Validation

NGINX logs showed rejected requests with empty upstream fields. This indicates that the gateway rejected those requests before forwarding them to the backend.

## Production Considerations

- Store API keys in a secrets manager.
- Rotate credentials regularly.
- Enable HTTPS.
- Review rate limits based on real traffic.
- Avoid exposing sensitive information in logs.
- Check for duplicate request ID response headers.

## Outcome

Successfully tested gateway-level API key validation and rate limiting, including HTTP 401 and HTTP 429 responses.
