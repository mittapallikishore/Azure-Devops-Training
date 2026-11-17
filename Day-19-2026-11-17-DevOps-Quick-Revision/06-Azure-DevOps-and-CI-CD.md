# 06 – Azure DevOps and CI/CD

## Azure DevOps services
- **Boards:** work items and planning.
- **Repos:** Git repositories.
- **Pipelines:** CI/CD automation.
- **Test Plans:** test management.
- **Artifacts:** package feeds.

## YAML pipeline building blocks
- Trigger – what starts a pipeline.
- Pool/agent – where jobs run.
- Stage – major lifecycle boundary.
- Job – group of steps.
- Step/task – command or reusable action.
- Variable – configurable value.
- Artifact – output passed between jobs/stages.
- Environment – deployment target and governance.
- Service connection – authenticated integration with an external service.

## Typical CI workflow
Checkout → install runtime → install dependencies → lint/test → build → publish artifact.

Illustrative Azure Pipelines YAML:
```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- checkout: self
- task: NodeTool@0
  inputs:
    versionSpec: '20.x'
- script: npm ci
  displayName: Install dependencies
- script: npm test
  displayName: Run tests
- publish: $(Build.SourcesDirectory)
  artifact: application
```

## CD workflow
Download artifact/image → deploy to target → run health checks → approval/verification → monitor.

## Agents
- Microsoft-hosted agents are managed by Microsoft.
- Self-hosted agents are managed by the organization and need patching, access control and capacity management.

## Security and governance
- Use least-privilege service connections.
- Store secrets in protected variables or Azure Key Vault integration.
- Use approvals/checks for sensitive environments.
- Protect branches and require PR validation.
- Separate build and deployment permissions.

## Important distinction
For Azure Repos Git, YAML `pr:` triggers can configure PR validation. GitHub PR validation is configured through GitHub integration and branch protection/status-check policies.

## Troubleshooting
Inspect the failed stage/job/task, agent logs, variable expansion, service connection permissions, artifact paths and environment approvals.

## Interview check
**What is a pipeline artifact?** A published output of a pipeline that later jobs or stages can download and use.
