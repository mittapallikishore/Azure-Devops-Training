# API Gateway Security and Traffic Management

## 1. API Keys

An API key identifies an API consumer or application.

It is useful for consumer tracking and access control, but an API key alone is not sufficient to establish a user's identity.

## 2. JSON Web Token (JWT)

JWT is a compact token format commonly used to carry identity and authorization claims.

Structure:

`Header.Payload.Signature`

The payload is encoded, not automatically encrypted.

A gateway can validate:
- Token signature.
- Expiration.
- Issuer.
- Audience.
- Not-before time.

Never store passwords or secrets in a JWT payload.

## 3. OAuth 2.0

OAuth 2.0 is an authorization framework that allows applications to access resources under defined permissions.

## 4. OpenID Connect

OpenID Connect adds an identity layer on top of OAuth 2.0.

It is commonly used for user authentication and identity information.

## 5. CORS

Cross-Origin Resource Sharing controls which browser origins can access resources.

CORS is not authentication and does not replace API authorization.

## 6. Web Application Firewall

A WAF examines HTTP traffic and helps filter malicious request patterns.

It can help protect against certain:
- SQL injection attempts.
- Cross-site scripting attempts.
- Malformed requests.
- Known malicious traffic patterns.

## 7. DDoS Protection

Distributed Denial of Service attacks attempt to overwhelm an application or network with traffic.

Layered protection can include:
- Network-level DDoS defenses.
- CDN and edge filtering.
- WAF.
- Rate limiting.
- Traffic monitoring.
- IP reputation and filtering.

Rate limiting alone is not complete DDoS protection.

## 8. Security Best Practices

- Use HTTPS.
- Validate tokens correctly.
- Apply least-privilege authorization.
- Store secrets securely.
- Rotate certificates and credentials.
- Protect internal service communication.
- Avoid exposing internal endpoints.
- Do not log sensitive information.
- Monitor unusual traffic.
- Keep gateway software updated.

## Learning Outcome

Understand API security mechanisms and how gateways help protect backend services.
