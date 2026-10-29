# Day 13 — Deployment Promotion and Rollback

**Date:** 29 October 2026

## Objective

Deploy the exact container image produced by the CI pipeline, validate the deployed application, and demonstrate safe recovery using a previous known-good image.

## Tasks

- Separate image build/publication from deployment.
- Promote the same image tag and digest without rebuilding.
- Configure environment-specific settings without hardcoding secrets.
- Configure a deployment approval or environment gate where supported.
- Run post-deployment smoke and health checks.
- Demonstrate rollback to a previous known-good image or another safe recovery path.
- Record build ID, commit SHA, image tag/digest, target environment, health result, and deployment outcome.

## Acceptance Criteria

- [ ] Deployment uses the image produced by CI, not a rebuilt variant.
- [ ] Health-check failure is visible and prevents a successful release result.
- [ ] Rollback/recovery is demonstrated in a sandbox or simulated environment.
- [ ] Logs identify the build, image version, and deployment outcome.

## Evidence

Record pipeline run links, image tags and digests, deployment results, health-check logs, approval evidence, and rollback results in the `evidence/` folder.

## Security

- Store credentials in Azure DevOps service connections or secure variables.
- Do not commit secrets or print credentials in logs.
- Use the same immutable image digest throughout promotion and rollback verification.


## Deployment Promotion and Rollback Evidence

### Environment
- **Sandbox App:** `day13-deploy-sandbox-20261029`
- **Resource Group:** `azurewebapp1_group`
- **Container Registry:** `day12ci331776.azurecr.io`
- **Image Repository:** `day12-website`

### Image Promotion
The sandbox was configured to use the previously published image by its immutable digest. No image rebuild was performed during deployment.

- **Initial image tag:** `243`
- **Initial digest:** `sha256:01f37f378dea6898f605c9de5aac4b0ef9d6f6498683b74eb46944ddb5d53416`

### Rollback
The sandbox was switched to the previous published image, tag `242`, and restarted.

- **Rollback digest:** `sha256:4463ebf2b60242965c593ddaf04cd3d41ab2af0d7d4663b1824e59a6f8902d61`
- **Configuration verification:** Confirmed using `az webapp config show`.

### Health Verification
The `/health` endpoint must return a successful response after deployment and rollback. The recorded result is stored in `evidence/health-check.txt`.

### Evidence Files
- `evidence/rollback-evidence.txt` — image references and rollback configuration.
- `evidence/health-check.txt` — health-check result.

### Security
- A system-assigned managed identity is used for registry image pulls.
- The `AcrPull` role is assigned to the sandbox identity.
- No registry passwords are stored in the README.
- The existing `azurewebapp1` application was left unchanged.


## Completion Summary — 29 October 2026

- [x] Deployed the previously published container image by immutable digest without rebuilding it.
- [x] Configured ACR image pulls using a system-assigned managed identity and `AcrPull` permission.
- [x] Verified the deployed image digest against the registry manifest.
- [x] Rolled back the sandbox to the previous known-good image digest and restarted the application.
- [x] Verified the rollback configuration after restart.
- [x] Confirmed the `/health` endpoint returned `{"status":"healthy"}` after rollback.
- [x] Saved rollback and health-check evidence under `evidence/`.

**Result:** Deployment and rollback were demonstrated in the sandbox. The post-rollback health check passed.

**Remaining validation:** Confirm the GitHub push and review the pipeline YAML for environment approval gates and deployment/health-check failure handling before claiming every pipeline acceptance criterion is complete.


## Deployment and Rollback Validation

- Configured an Azure DevOps deployment pipeline with the `day13-sandbox` environment approval gate.
- Deployed the container image using an immutable SHA-256 digest.
- Verified the sandbox App Service container image configuration using Azure CLI.
- Validated rollback by configuring the sandbox to use the previous known-good image (image 242).
- Confirmed the application health endpoint returned `healthy`.
- Saved verification details in `evidence/rollback-evidence.txt`.

**Evidence:** The environment approval gate and pipeline run succeeded. The previous known-good image configuration and health check were verified manually.

**Remaining validation:** Automated rollback after a failed deployment health check has not yet been demonstrated.



## Day 13 Final Deployment Validation

### Successful Deployment — Image 243
- Deployed the immutable container image using its SHA-256 digest.
- Verified that Azure App Service was configured with the expected image.
- Confirmed that the live application health endpoint returned `healthy`.

Image:
`day12ci331776.azurecr.io/day12-website@sha256:01f37f378dea6898f605c9de5aac4b0ef9d6f6498683b74eb46944ddb5d53416`

Health endpoint:
`https://day13-deploy-sandbox-20261029.azurewebsites.net/health`

### Failure Simulation and Automatic Rollback
- Enabled the smoke-test failure simulation to validate the failure-handling workflow.
- Confirmed that the smoke test failed as expected.
- Verified that the pipeline restored the previous known-good image, image 242.
- Confirmed that the rollback health check returned `{"status":"healthy"}`.
- The pipeline reported the simulated deployment failure after rollback, as expected.

Previous known-good image:
`day12ci331776.azurecr.io/day12-website@sha256:4463ebf2b60242965c593ddaf04cd3d41ab2af0d7d4663b1824e59a6f8902d61`

### Final Verification
- Retried deployment with image 243 and failure simulation disabled.
- Verified the deployed image digest using Azure CLI.
- Verified the live `/health` endpoint returned `status: healthy`.

**Outcome:** Deployment of image 243 and the simulated rollback-and-recovery workflow were validated successfully.
