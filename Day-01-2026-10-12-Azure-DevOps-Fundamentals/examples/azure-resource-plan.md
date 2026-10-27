# Azure Resource Plan

## Objective
Plan the Azure resources required for a sample web application.

## Proposed Resources

| Resource | Purpose |
|---|---|
| Azure Subscription | Manages resource access and billing |
| Resource Group | Organizes related Azure resources |
| App Hosting Service | Hosts the web application |
| Application Monitoring | Tracks application health and errors |
| Azure Key Vault | Stores secrets securely |

**Note:** These are planned resources for learning. They have not necessarily been created in Azure.

## Resource Naming Examples
- Resource group: `rg-sample-web-dev`
- Application: `app-sample-web-dev`
- Environment: Development

## Security Practices
- Apply least-privilege access using RBAC.
- Prefer managed identities where supported.
- Never commit passwords or tokens to GitHub.
- Review permissions before deployment.

## Cost Management
- Check pricing before creating resources.
- Use a sandbox where available.
- Configure budgets and alerts where supported.
- Remove unused test resources.

## Outcome
Documented a basic Azure resource plan covering organization, security, monitoring, and cost awareness.