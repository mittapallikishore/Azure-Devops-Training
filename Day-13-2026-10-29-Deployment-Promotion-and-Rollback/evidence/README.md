# Day 13 Evidence

This folder contains evidence collected during deployment promotion and rollback validation.

- `health-check.txt` — Records the sandbox health endpoint response.
- `rollback-evidence.txt` — Records the image digest and rollback verification details.

The deployment and rollback scripts are maintained in the `scripts/` directory. The Azure DevOps deployment pipeline is maintained in the `pipelines/` directory.

Note: The recorded manual sandbox results demonstrate the actions documented in the evidence files. Automated pipeline execution and approval-gate behavior must be verified separately in Azure DevOps.
