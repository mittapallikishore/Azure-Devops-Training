# Azure Fundamentals: Practical Notes

## 1. Azure Subscription
An Azure subscription organizes access to Azure resources and manages billing.

**Example:** Use a development subscription for resources related to a sample web application.

## 2. Resource Group
A resource group is a logical container for related Azure resources.

**Example:** `rg-sample-web-dev` could contain the web application and its monitoring resources.

## 3. Azure Region
An Azure region is a geographical area where Azure provides cloud services.

**Example:** Choose a region based on service availability, latency, organizational requirements, and cost.

## 4. Shared Responsibility
Microsoft manages the underlying cloud infrastructure. Customers are responsible for areas such as access permissions, application configuration, and data protection, depending on the cloud service used.

## 5. Azure Portal and Azure CLI
- **Azure Portal:** A graphical interface for managing Azure resources.
- **Azure CLI:** A command-line tool for managing Azure resources.

Example command to view the signed-in Azure account:

```bash
az account show
```

Run this command after installing Azure CLI and signing in using `az login`.

## Observation
Subscriptions organize access and billing, resource groups organize related resources, and regions determine where supported services are deployed.

## Outcome
Documented core Azure concepts and a basic Azure CLI command for checking the active account.