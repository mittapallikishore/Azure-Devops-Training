# API Gateway with DevOps and CI/CD

## 1. API Gateway in DevOps

DevOps teams manage gateway configuration, infrastructure, deployment, security, monitoring and operational reliability.

## 2. Example Technology Stack

- GitHub: Source-code management.
- Azure DevOps: CI/CD pipelines.
- Docker: Containerization.
- Azure Container Registry: Image storage.
- AKS: Kubernetes orchestration.
- Azure API Management: API Gateway and API management.

## 3. CI/CD Workflow

```text
Developer
    |
    v
GitHub Repository
    |
    v
Azure DevOps Pipeline
    |
    v
Build and Automated Tests
    |
    v
Security and Quality Checks
    |
    v
Docker Image Build
    |
    v
Azure Container Registry
    |
    v
Deploy Microservices
    |
    v
Configure API Management
    |
    v
Validate API Endpoints
    |
    v
Monitoring
```

## 4. Infrastructure as Code

Gateway infrastructure and policies can be managed through:
- Terraform.
- Azure Bicep.
- ARM templates.
- Azure CLI.

This helps create repeatable environments and reduces manual configuration.

## 5. API Configuration as Code

Store API definitions and gateway policies in version control where practical.

A pipeline can:
1. Validate API definitions.
2. Run policy checks.
3. Deploy gateway configuration.
4. Validate routes and policies.
5. Perform endpoint tests.
6. Monitor deployment results.

## 6. Deployment Validation

Validate:
- API endpoint availability.
- Authentication.
- Authorization.
- Rate limiting.
- Backend health.
- TLS configuration.
- Response codes.
- Latency.

## 7. Monitoring

Monitor:
- Request volume.
- Gateway latency.
- Backend latency.
- Error rates.
- Rate-limit responses.
- Service health.
- Availability.

## Learning Outcome

Understand how API Gateway infrastructure and configuration fit into DevOps, CI/CD and Infrastructure as Code.
