# Day 22 – API Gateway and Microservices Resilience

**Date:** 20 November 2026

## Objective

Understand five important distributed-system concepts used to build reliable, scalable, secure, and highly available microservices architectures.

## Topics Covered

1. [Service Discovery](01-Service-Discovery.md)
2. [Rate Limiting](02-Rate-Limiting.md)
3. [Circuit Breaker](03-Circuit-Breaker.md)
4. [Fault Tolerance](04-Fault-Tolerance.md)
5. [Disaster Recovery](05-Disaster-Recovery.md)

## Learning Summary

| Topic | Main purpose |
|---|---|
| Service Discovery | Locate healthy service instances dynamically |
| Rate Limiting | Control request volume and protect services |
| Circuit Breaker | Stop repeated calls to failing dependencies |
| Fault Tolerance | Continue essential operations during failures |
| Disaster Recovery | Restore systems and data after major disasters |

## Overall Architecture Flow

A client sends a request through an API Gateway. The gateway applies authentication and rate limits, identifies the destination through service discovery, and forwards the request to a healthy service. Circuit breakers, timeouts, retries, and fallback mechanisms help contain failures. Disaster recovery plans restore the application and data if a major outage occurs.

## Tools and Technologies Studied

- Azure API Management
- Azure Kubernetes Service (AKS)
- Kubernetes Services and CoreDNS
- Redis
- Istio and Envoy
- Azure Monitor and Application Insights
- Azure Backup and Azure Site Recovery

## Learning Outcome

Understood how service discovery, traffic control, circuit breakers, fault-tolerance patterns, and disaster recovery work together to improve reliability and business continuity in distributed applications.
