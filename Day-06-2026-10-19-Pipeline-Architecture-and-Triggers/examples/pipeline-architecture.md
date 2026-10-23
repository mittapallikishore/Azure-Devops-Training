# CI/CD Pipeline Architecture

## Objective
Define a clear build-and-release flow for a sample Node.js application using Azure DevOps.

## Pipeline Stages

1. **Checkout:** Download the repository source code.
2. **Dependency Restore:** Install dependencies using `npm ci`.
3. **Build:** Compile or package the application when a build script is available.
4. **Test:** Run automated tests and stop the pipeline if they fail.
5. **Artifact Publication:** Publish the validated build output for later use.
6. **Deployment:** Deploy the same published artifact to the target environment after required approvals.

## Workflow Diagram

```text
Code Change
    |
    v
Repository Checkout
    |
    v
Install Dependencies
    |
    v
Build and Test
    |
    v
Publish Artifact
    |
    v
Approval / Deployment
    |
    v
Verify Application Health
```

## Pipeline Design Principles
- Keep build and deployment responsibilities clear.
- Fail the pipeline when required tests fail.
- Publish identifiable artifacts.
- Avoid storing secrets in source code.
- Keep logs readable and actionable.

## Observation
## Observation

- The pipeline triggers on changes to selected files in `main` and `feature/*` branches.
- It checks out the source code and configures Node.js 22.
- It runs tests and captures test logs.
- It publishes test results and a versioned website artifact containing build and commit details.
- It downloads and verifies the same artifact in Test and Staging environments.
- Deployment is currently simulated through artifact verification; actual website deployment is not shown in this YAML.

## Current Gaps

- Confirm that pull-request validation is configured for the GitHub repository.
- Confirm that `npm test` runs successfully and produces the expected JUnit test results.
- Verify whether the `test` and `staging` environments have appropriate approvals and checks.
- Confirm that all required stages and trigger behavior work in Azure DevOps.

## Outcome

Inspected the existing Azure DevOps pipeline and documented its triggers, validation steps, artifact publication, environment verification, and remaining gaps.

## Outcome
Documented the planned pipeline stages from source checkout through deployment verification.

## Implementation Status
This document describes the intended workflow. Verify each stage in the actual Azure DevOps pipeline before marking it as implemented.