# 08 – Microsoft Azure and Cloud Deployment

## Cloud service models
- **IaaS:** customer manages OS and above; provider manages physical infrastructure.
- **PaaS:** provider manages platform/runtime infrastructure; customer manages application and data.
- **SaaS:** provider delivers a complete application service.

## Azure hierarchy
Tenant → management groups → subscriptions → resource groups → resources.

A resource group is a logical management boundary. Resources can have their own lifecycle and may depend on resources in other groups.

## Important Azure services
- **Virtual Machines:** infrastructure-level compute.
- **App Service:** managed web application hosting.
- **Storage Account:** Blob, Files, Queue and Table services.
- **Virtual Network:** private network boundary and subnets.
- **NSG:** filters network traffic.
- **ACR:** private container image registry.
- **AKS:** managed Kubernetes service.
- **Key Vault:** protects secrets, keys and certificates.
- **Microsoft Entra ID:** identity and authentication.
- **Azure Monitor / Log Analytics / Application Insights:** monitoring and diagnostics.

## App Service
Know App Service Plans, deployment slots, scaling up/out, application settings, managed identity and health checks.

## ACR workflow
Build image → authenticate to registry → tag image → push → configure workload identity/pull authorization → deploy image.

## Identity and security
- Prefer managed identities over embedded credentials.
- Apply Azure RBAC least privilege.
- Restrict network access and use private endpoints when appropriate.
- Store secrets in Key Vault.
- Enable diagnostic settings and monitor important resources.

## Azure CLI reminders
```bash
az login
az account show
az group list -o table
az acr list -o table
az webapp list -o table
az aks list -o table
```

## Cost awareness
Check region, SKU/tier, uptime, storage, data transfer and monitoring ingestion. Stop or delete lab resources when no longer required, after confirming dependencies and retention needs.

## Interview check
**App Service vs AKS?** App Service is managed application hosting; AKS provides Kubernetes orchestration and more control, with greater operational responsibility.
