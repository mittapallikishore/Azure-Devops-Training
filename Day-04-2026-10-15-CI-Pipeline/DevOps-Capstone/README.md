# Day 4 — CI Pipeline Capstone

## Objective
Create a CI pipeline that validates project files, runs available tests, and publishes a pipeline artifact.

## Pipeline Stages
1. Validate project files.
2. Install dependencies and run tests when configured.
3. Publish the validated files as a DevOps-Capstone artifact.

## Success Pipeline
The success pipeline should validate the project and publish an artifact when all checks pass.

## Failure Pipeline
The failure pipeline deliberately throws an error to demonstrate pipeline failure handling.

## Expected Results
- Success pipeline: validation and artifact publication succeed.
- Failure pipeline: the intentional failure step fails the run.

## Evidence
Capture pipeline run status, execution logs, test results, and artifact publication details.
