# Azure Resource Architecture

## Purpose
Show a proposed Azure setup for a sample web application.

## Architecture Diagram

```text
Azure Subscription
└── Resource Group: rg-sample-web-dev
    ├── App Hosting Service
    │   └── Sample Web Application
    ├── Application Monitoring
    │   └── Logs and Health Metrics
    └── Azure Key Vault
        └── Application Secrets
```

## Component Responsibilities

- **Subscription:** Organizes access and billing.
- **Resource Group:** Groups related resources.
- **App Hosting Service:** Runs the web application.
- **Application Monitoring:** Helps identify errors and health issues.
- **Azure Key Vault:** Stores secrets securely.

## Security Considerations
- Apply least-privilege access.
- Use managed identities where supported.
- Never store secrets in source control.

## Important Note
This is a proposed learning architecture. It does not mean these Azure resources have been created.

## Outcome
Documented the relationship between a subscription, resource group, application hosting, monitoring, and secret management.