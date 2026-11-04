# Day 4 - CI Pipeline Capstone

**Date:** 15 October 2026

## Objective
Create a CI pipeline that validates project files, runs available tests, and publishes a pipeline artifact.

## Project Files
- azure-pipelines.yml - Main CI pipeline.
- azure-pipelines-success.yml - Success demonstration pipeline.
- azure-pipelines-failure.yml - Intentional failure demonstration.
- .gitignore - Git ignore configuration.

## Main Pipeline Workflow
1. Check out the repository.
2. Validate required README and pipeline YAML files.
3. Configure Node.js 20.x.
4. Install dependencies when package.json is available.
5. Run npm tests when a test script is available.
6. Stage the capstone project files.
7. Publish the DevOps-Capstone artifact after successful validation.

## Pipeline Stages
1. Validate project files.
2. Install dependencies and run tests when configured.
3. Publish validated files as a DevOps-Capstone artifact.

## Success Pipeline
The success pipeline is configured to validate the project and publish an artifact when all checks pass.

## Failure Pipeline
The failure pipeline is configured to deliberately throw an error to demonstrate pipeline failure handling.

## Trigger Configuration
- Main pipeline: main branch with a path filter for the Day 4 capstone folder.
- Pull requests: configured for the main branch.
- Success pipeline: configured for main and test/pipeline-failure branches.
- Failure pipeline: manual-only, with CI and PR triggers disabled.

## Current Limitation
The capstone folder does not contain a package.json file. Therefore, the conditional dependency installation and npm test steps are skipped by the current pipeline logic.

## Expected Results
- Success pipeline: validation and artifact publication should succeed.
- Failure pipeline: the intentional failure step should fail the run.

## Evidence
Actual pipeline run results, execution logs, test results, and artifact publication evidence are tracked separately under Day 5 - Pipeline Validation.

## Learning Outcomes
- Understand YAML-based CI pipeline configuration.
- Configure branch and path-based triggers.
- Validate repository files automatically.
- Understand conditional dependency installation and test execution.
- Publish pipeline artifacts.
- Demonstrate intentional pipeline failure handling.

## Outcome
The Day 4 CI capstone contains the main, success, and failure pipeline definitions with supporting documentation.
