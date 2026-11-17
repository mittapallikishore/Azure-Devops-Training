# 03 – Networking Fundamentals

## Core concepts
- **IP address:** identifies a network interface.
- **IPv4:** 32-bit address; **IPv6:** 128-bit address.
- **Private IPv4 ranges:** `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.
- **DNS:** resolves names to IP addresses.
- **Port:** identifies an application/service endpoint.
- **Firewall/NSG:** controls permitted network traffic.

## Common ports
| Port | Protocol/service |
|---:|---|
| 22 | SSH |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |
| 3306 | MySQL |
| 5432 | PostgreSQL |
| 6379 | Redis |
| 6443 | Kubernetes API |
| 3000 | Common Node.js development port |

## TCP vs UDP
- **TCP:** connection-oriented, ordered and reliable delivery; used by HTTPS and SSH.
- **UDP:** connectionless with lower overhead; used by DNS queries, streaming and real-time traffic where appropriate.
- TCP handshake: SYN → SYN-ACK → ACK.

## HTTP and security
- HTTP is application-layer request/response communication.
- HTTPS is HTTP protected by TLS.
- Common methods: GET, POST, PUT, PATCH, DELETE.
- Status codes: 2xx success, 3xx redirection, 4xx client error, 5xx server error.
- TLS uses certificates and cryptography to protect confidentiality, integrity and server identity.

## DNS records
- `A` – IPv4 address
- `AAAA` – IPv6 address
- `CNAME` – alias
- `MX` – mail exchanger
- `TXT` – text/verification data
- `NS` – authoritative name server
- `PTR` – reverse lookup

## Proxy and load balancing
- Forward proxy represents clients.
- Reverse proxy receives requests on behalf of servers.
- Load balancer distributes traffic across healthy backends.
- Layer 4 uses transport details; Layer 7 can route using HTTP information.

## Useful commands
```bash
nslookup example.com
dig example.com
curl -v https://example.com
ss -tulnp
nc -vz host.example.com 443
traceroute example.com
```
PowerShell equivalent for port testing: `Test-NetConnection example.com -Port 443`.

## Troubleshooting sequence
Check DNS → route/IP reachability → firewall/NSG → listening port → TLS certificate → proxy/load balancer → application logs and health.

## Interview check
**What is the difference between a timeout and connection refused?** A timeout often means no response reached the client; connection refused generally means the destination was reachable but no service accepted the connection or it was actively rejected.
