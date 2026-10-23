# Day 1 — Pipeline Architecture and Repository Triggers

## 1. Objective
Understand the project structure and define how the CI/CD pipeline validates code changes.

## 2. Steps Performed
1. Inspected the project folders and application files.
2. Reviewed the `package.json` file to understand the Node.js project configuration.
3. Reviewed the Azure DevOps YAML pipeline.
4. Identified the pipeline stages: checkout, dependency installation, validation, testing, and artifact publication where configured.
5. Reviewed branch triggers and considered how changes to the main branch start pipeline runs.

## 3. Configuration Used
- Repository: GitHub
- CI/CD platform: Azure DevOps
- Application: Node.js
- Pipeline configuration: `pipelines/azure-pipelines.yml`

## 4. Observations
The YAML file defines the pipeline workflow. Git branch triggers determine which code changes can start a pipeline run.

## 5. Result
Documented the repository structure and pipeline workflow. Verified the configured behavior using the pipeline run results where available.

## 6. Evidence
- Pipeline YAML file
- Repository folder structure
- Azure DevOps pipeline run screenshot or logs

**Note:** Update this document to match the steps you actually performed and verified.