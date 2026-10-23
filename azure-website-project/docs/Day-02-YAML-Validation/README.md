# Day 2 — YAML Pipeline Quality and Test Gates

## 1. Objective
Automate code validation and ensure that errors are detected before changes proceed through the pipeline.

## 2. Steps Performed
1. Reviewed the Azure DevOps YAML pipeline configuration.
2. Configured or reviewed Node.js dependency installation.
3. Added or reviewed code validation and test execution steps.
4. Reviewed pipeline logs to understand successful and failed tasks.
5. Investigated how a failing test can prevent the pipeline from passing.

## 3. Configuration Used
- Platform: Azure DevOps
- Application: Node.js
- Pipeline file: `pipelines/azure-pipelines.yml`
- Test folder: `tests/`

## 4. Observations
YAML defines the pipeline tasks and their execution order. Automated checks help identify errors early. A test failure should result in a failed validation stage when the pipeline is configured to enforce that test.

## 5. Result
Documented the validation and testing workflow and reviewed the available pipeline results.

## 6. Evidence
- YAML pipeline file
- Test files
- Azure DevOps run logs or test results

**Note:** Retain only the steps that were actually performed and verified.