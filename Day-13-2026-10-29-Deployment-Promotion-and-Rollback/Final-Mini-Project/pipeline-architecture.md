# Day 13 – Azure DevOps Pipeline Architecture

```mermaid
flowchart TD
    A["Source Code<br/>GitHub Repository"] --> B["Stage 1<br/>Checkout and Build Validation"]
    B --> C["Stage 2<br/>Automated Tests"]
    C --> D["Stage 3<br/>Build Docker Image"]
    D --> E["Publish Docker Image Artifact"]
    E --> F["Stage 4<br/>Publish Image to Azure Container Registry"]
    F --> G["Stage 5<br/>Deploy Container to Azure App Service"]
    G --> H["Stage 6<br/>Health Check"]
    H --> I{"Health Check Passed?"}
    I -->|Yes| J["Deployment Verified"]
    I -->|No| K["Stage 7<br/>Rollback and Recovery"]
    K --> L["Restore Previous Working Image"]
    L --> M["Verify /health Endpoint"]
    M --> N["Application Recovered"]
