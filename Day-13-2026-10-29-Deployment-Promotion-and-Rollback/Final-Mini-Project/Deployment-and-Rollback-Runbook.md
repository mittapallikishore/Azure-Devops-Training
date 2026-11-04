# Deployment and Rollback Runbook

## 1\. Project Information

* Training Day: Day 13
* Project: Final Mini-Project
* Platform: Azure DevOps, Docker, ACR and Azure App Service
* Pipeline: azure-web-app
* Branch: test/pipeline-failure

## 2\. Deployment Environment

* ACR: day12ci331776.azurecr.io
* Image repository: day13-final-app
* App Service: day13-deploy-sandbox-20261029
* Resource Group: azurewebapp1\_group
* Application Port: 3000
* Health Endpoint: /health

## 3\. Prerequisites

* Azure DevOps access
* Azure subscription access
* Docker and application source code
* Azure Container Registry access
* App Service deployment permissions
* Previously working image tag

## 4\. Deployment Procedure

1. Open Azure DevOps.
2. Navigate to Pipelines.
3. Run the seven-stage pipeline.
4. Validate the source code.
5. Execute automated tests.
6. Build and tag the Docker image.
7. Publish the image to ACR.
8. Deploy the published image to Azure App Service.
9. Verify deployment logs.

Example image:

day12ci331776.azurecr.io/day13-final-app:405

## 5\. Health Check Procedure

Health endpoint:

https://day13-deploy-sandbox-20261029.azurewebsites.net/health

PowerShell command:

Invoke-RestMethod -Uri "https://day13-deploy-sandbox-20261029.azurewebsites.net/health"

Expected response:

{"status":"healthy"}

A failed health check must block successful release completion.

## 6\. Failure Handling

When a health check fails:

1. Review pipeline execution logs.
2. Identify the failed stage.
3. Confirm that the release is blocked.
4. Trigger the configured rollback condition.
5. Review rollback execution logs.

## 7\. Rollback Procedure

1. Identify the previous working Docker image.
2. Verify that the image exists in ACR.
3. Restore the previous image to App Service.
4. Verify the App Service container configuration.
5. Check application availability.
6. Perform the health check again.
7. Record the recovery result.

Previous working image from Build 405:

day12ci331776.azurecr.io/day13-final-app:402

## 8\. Practical Rollback Evidence

Pipeline: azure-web-app
Build ID: 405
Branch: test/pipeline-failure

New deployed image: day13-final-app:405

Previous working image: day13-final-app:402

* Health-check failure was demonstrated.
* Automatic rollback stage executed.
* Previous image 402 was restored.
* Initial rollback health check timed out.
* Subsequent health check returned {"status":"healthy"}.
* Rollback logs confirmed successful recovery.

## 9\. Troubleshooting

|Issue|Action|
|-|-|
|Build failure|Review build logs|
|Test failure|Review automated test results|
|Docker build failure|Verify Dockerfile|
|ACR push failure|Verify registry authentication|
|Deployment failure|Review App Service logs|
|Health-check timeout|Check application startup and endpoint|
|Rollback failure|Verify previous image and registry access|

## 10\. Evidence Collection

Retain:

* Pipeline execution screenshots
* Automated test results
* Docker image build details
* ACR publishing evidence
* Deployment logs
* Health-check failure logs
* Rollback verification logs
* Successful recovery response
* Image provenance file

Existing evidence:

* evidence/image-provenance.txt
* evidence/rollback-verification-build-405.txt

## 11\. Final Result

The Day 13 project demonstrated end-to-end containerized CI/CD deployment and rollback using Azure DevOps, Docker, ACR and Azure App Service.

Build 405 demonstrated deployment failure handling and automatic rollback to the previous working image 402.

The subsequent health check confirmed successful application recovery.

Status: Runbook prepared for review.


## 12. Active Pipeline Configuration

Pipeline name: azure-web-app

Active YAML file:
pipelines/azure-pipelines-seven-stage.yml

Execution configuration:
- CI trigger: Disabled (trigger: none)
- PR trigger: Disabled (pr: none)
- Pipeline execution: Manual from Azure DevOps.

## 13. Endpoint Verification - 04 November 2026

Negative test:
- Endpoint: /rollback-test-invalid
- Result: HTTP 404 Not Found (expected).

Actual health check:
- Endpoint: /health
- Result: Healthy.

The invalid endpoint was used for the negative health-check demonstration.
The actual application health endpoint returned a healthy response.

Evidence: evidence/endpoint-verification.txt


## 14. Secure Authentication Verification

Both Azure DevOps service connections were verified successfully:

- `sc-day12-acr` – Container Registry connection.
- `day13-sandbox-connection` – Azure deployment connection.

The seven-stage pipeline YAML scan found no hard-coded credential patterns.

## 15. Image Provenance Scope

The original provenance record documents image tag `20261030-001` and its source commit.

Build 405 image provenance is separately documented in `evidence/build-405-image-provenance.txt`. It records the Azure DevOps run, source branch, source commit, ACR image tag, and image digest.

The Build 405 image record reports `signed: false`; therefore, this evidence establishes traceability but does not claim cryptographic image signing.

See `evidence/image-provenance.txt` and `evidence/build-405-image-provenance.txt`.

