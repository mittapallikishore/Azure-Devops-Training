# Day 3 — Azure Resources and Identity

**Date:** Wednesday, 14 October 2026

## 1. Objective

Learn how Azure resources are organized, how to manage them using the Azure Portal and Azure CLI, and how identity and access permissions work.

## 2. Tasks Performed

### Task 1: Explore the Azure Portal
- Signed in to the Azure Portal.
- Explored subscriptions and resource groups.
- Learned how Azure resources are organized and managed.

**Observation:** A subscription provides a management and billing boundary, while a resource group organizes related Azure resources.

### Task 2: Create or Inspect a Resource Group
- Opened Resource groups in the Azure Portal.
- Inspected existing resource groups or created a practice resource group if permissions were available.
- Reviewed the selected Azure region.

**Observation:** Resource groups help organize related resources and simplify their management.

### Task 3: Explore Microsoft Entra ID
- Explored Microsoft Entra ID and its identity management features.
- Learned about users, groups, authentication and authorization.
- Reviewed the purpose of role-based access control (RBAC).

**Observation:** Microsoft Entra ID manages identities, while Azure RBAC determines what users and identities can do with Azure resources.

### Task 4: Practice Azure CLI
Executed the following commands in PowerShell:

```powershell
az login
az account show
az group list --output table
```

To create a practice resource group, if authorized:

```powershell
az group create --name rg-devops-practice --location centralindia
```

**Observation:** Azure CLI allows users to manage Azure resources through commands instead of performing every operation in the portal.

### Task 5: Explore Azure DevOps Service Connections
- Opened Project Settings in Azure DevOps.
- Explored Service connections.
- Learned how a pipeline can authenticate to Azure through an authorized service connection.
- Reviewed the importance of secure credentials and least-privilege access.

**Observation:** Service connections allow pipelines to access external services securely without hardcoding credentials in YAML files.

## 3. Key Learnings

- Azure subscriptions organize resource management and billing.
- Resource groups organize related resources.
- Microsoft Entra ID manages identities.
- Azure RBAC controls resource access.
- Azure CLI supports command-line resource management.
- Service connections provide authenticated access from Azure DevOps pipelines.

## 4. Evidence to Capture

- Azure Portal subscription or resource group view.
- Successful output from `az account show`.
- Resource group listing from Azure CLI.
- Azure DevOps Service connections page.

Only attach screenshots or logs for tasks actually performed.

## 5. Outcome

Understood the basics of Azure resource organization, identity management, RBAC, Azure CLI and secure service connections used in Azure DevOps.

## 6. References

- Azure Portal: https://portal.azure.com/
- Azure CLI installation: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli
- Microsoft Entra ID: https://learn.microsoft.com/en-us/entra/
- Azure RBAC: https://learn.microsoft.com/en-us/azure/role-based-access-control/overview
- Azure DevOps service connections: https://learn.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints
