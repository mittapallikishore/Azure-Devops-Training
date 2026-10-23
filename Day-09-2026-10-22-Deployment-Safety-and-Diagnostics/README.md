# Day 9 — Deployment Safety and Diagnostics

**Date:** 22 October 2026

## Objective
Improve deployment safety through secure secrets handling, health checks, diagnostics, and rollback procedures.

## Tasks Performed
1. **Secret Variables:** Reviewed how sensitive values can be stored securely in Azure DevOps instead of being committed to source control.
2. **Service Connections:** Configured or reviewed service connections used by pipelines to access deployment resources.
3. **Pipeline Permissions:** Reviewed access permissions and authorization required for deployment tasks.
4. **Health Checks:** Added or reviewed health-check steps to verify whether the application is responding after deployment.
5. **Deployment Verification:** Examined pipeline results to confirm whether deployment validation succeeded.
6. **Failure Diagnostics:** Reviewed logs to identify deployment and health-check failures.
7. **Rollback Strategy:** Documented how to redeploy a previously published artifact to recover from an unsuccessful release.
8. **Failure Testing:** Tested or reviewed a simulated health-check failure and examined the resulting pipeline output.

## Observations
- Secrets should never be committed to Git or printed in pipeline logs.
- Service connections must be configured and authorized correctly.
- Health checks help identify application issues after deployment.
- A failed health check should be reported clearly.
- A documented rollback procedure helps restore a known working version.

## Outcome
Reviewed deployment security, health verification, diagnostic logging, and rollback procedures to support safer releases.

## Evidence to Capture
- Secure variable or service connection configuration, without exposing secrets.
- Successful health-check output.
- Failed health-check log.
- Previous artifact version and documented rollback steps.

## Recovery Procedure
1. Identify the failed deployment or health check.
2. Review the pipeline logs and deployment status.
3. Select the last known good artifact.
4. Redeploy that artifact using the approved process.
5. Run the health check again and record the result.