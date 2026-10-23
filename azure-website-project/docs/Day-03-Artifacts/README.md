# Day 3 — Build Artifacts and Publication

## 1. Objective
Understand how pipeline outputs are packaged and published for traceability and later deployment.

## 2. Steps Performed
1. Reviewed the pipeline configuration for artifact-related tasks.
2. Identified which application files should be included in the build output.
3. Reviewed the artifact publication configuration, if implemented.
4. Checked the Azure DevOps run summary for published artifacts.
5. Documented how a published artifact can be located and reused.

## 3. Configuration Used
- Platform: Azure DevOps
- Application: Node.js
- Pipeline file: `pipelines/azure-pipelines.yml`

## 4. Observations
An artifact stores selected pipeline outputs so they can be downloaded or used in later stages. Successful validation alone does not mean an artifact was published; the pipeline must contain a publication step.

## 5. Result
Documented the artifact workflow and its verification process.

## 6. Evidence
- YAML artifact publication task
- Azure DevOps run summary
- Published artifact listing, if available

**Note:** Record the actual artifact name and run ID if an artifact was successfully published. Do not claim publication if it was not configured or verified.