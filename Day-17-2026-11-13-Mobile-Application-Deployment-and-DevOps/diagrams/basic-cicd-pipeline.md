# Basic CI/CD Pipeline Diagram

This diagram represents a simplified software delivery workflow from source-code changes through deployment and monitoring.

```mermaid
flowchart TD
    A["Developer writes application code"] --> B["Git commit and push"]
    B --> C["GitHub or Azure Repos"]
    C --> D["CI Pipeline Trigger"]
    D --> E["Build Application"]
    E --> F["Run Automated Tests"]
    F --> G{"Tests Passed?"}
    G -->|No| H["Review Logs and Fix Issues"]
    H --> B
    G -->|Yes| I["Security and Quality Checks"]
    I --> J{"Quality Gates Passed?"}
    J -->|No| H
    J -->|Yes| K["Package Application"]
    K --> L["Publish Versioned Artifact"]
    L --> M["Deploy to Development or Testing"]
    M --> N["Deploy to Staging"]
    N --> O["Approval / Release Decision"]
    O --> P["Deploy to Production"]
    P --> Q["Health Checks and Smoke Tests"]
    Q --> R{"Deployment Healthy?"}
    R -->|No| S["Rollback or Recovery"]
    R -->|Yes| T["Monitoring and Feedback"]
    S --> T
```

## Diagram Explanation

1. Developer changes application code and pushes it to the repository.
2. The pipeline starts based on its configured trigger.
3. The build stage prepares the application.
4. Automated tests validate functionality.
5. Security and quality checks validate the release.
6. The application is packaged and stored as a versioned artifact.
7. The artifact is deployed to the required environments.
8. Production deployment may require approval.
9. Health checks validate the deployment.
10. Monitoring collects feedback and identifies issues.

A failed build or test stops the pipeline from progressing through the required gates. A failed production health check can trigger recovery or rollback according to the release strategy.
