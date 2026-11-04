# Day 4 - CI Pipeline

**Date:** 15 October 2026

## Objective
Create a Continuous Integration pipeline in Azure DevOps to validate project files, run available tests, and publish a pipeline artifact.

## Tasks Performed
1. Explored the Azure DevOps project and GitHub repository connection.
2. Created YAML-based CI pipeline definitions.
3. Configured validation of required project files.
4. Configured Node.js version 20.x.
5. Added conditional dependency installation using npm.
6. Configured conditional execution of npm tests.
7. Added branch and path-based pipeline triggers.
8. Created separate success and intentional failure pipeline definitions.
9. Configured pipeline artifact publication.
10. Organized the capstone project under the Day 4 folder.

## Repository Structure
Day-04-2026-10-15-CI-Pipeline/
|-- README.md
-- DevOps-Capstone/
    |-- .gitignore
    |-- README.md
    |-- azure-pipelines.yml
    |-- azure-pipelines-success.yml
    -- azure-pipelines-failure.yml

## Pipeline Configuration
- Platform: Azure DevOps Pipelines
- Source control: GitHub
- Build agent: windows-latest
- Node.js: 20.x
- Main branch: main
- Artifact: DevOps-Capstone
- Main YAML: DevOps-Capstone/azure-pipelines.yml

## Main Pipeline Workflow
1. Check out the repository.
2. Validate README.md and azure-pipelines.yml.
3. Configure Node.js.
4. Install dependencies if package.json exists.
5. Run npm test if a test script exists.
6. Copy project files to the artifact staging directory.
7. Publish the DevOps-Capstone artifact after successful validation.

**Current limitation:** The capstone folder does not contain package.json. Therefore, dependency installation and application tests are skipped by the current conditional pipeline logic.

## Trigger Policy
- Main pipeline: triggers on main for changes under the Day 4 capstone folder.
- Pull requests: configured for main.
- Success pipeline: triggers on main and test/pipeline-failure, with a single-level path wildcard.
- Failure pipeline: manual-only, with CI and PR triggers disabled.

## Learning Outcomes
- Understand YAML-based pipeline configuration.
- Configure branch and path filters.
- Validate repository files automatically.
- Understand conditional dependency installation and test execution.
- Publish pipeline artifacts after successful validation.
- Use pipeline logs to investigate failures.

## Evidence
The YAML files document the pipeline configuration. Actual execution results, logs, and artifact verification are documented separately under Day 5 - Pipeline Validation.

## Outcome
The Day 4 CI pipeline configurations and capstone documentation are organized in the repository.
