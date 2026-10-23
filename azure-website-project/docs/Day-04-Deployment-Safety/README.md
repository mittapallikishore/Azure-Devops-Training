# Day 4 — Deployment Safety, Secrets and Diagnostics

## 1. Objective
Improve release safety by protecting credentials, checking application health, and documenting recovery procedures.

## 2. Steps Performed
1. Reviewed secure variable and service connection configuration.
2. Checked that sensitive values were not intentionally printed in pipeline logs.
3. Configured or reviewed the deployment health-check step.
4. Examined health-check logs to understand success and failure conditions.
5. Documented rollback or redeployment of a previously published artifact, where supported.

## 3. Configuration Used
- Platform: Azure DevOps
- Pipeline file: `pipelines/azure-pipelines.yml`
- Health-check configuration: pipeline variables and verification steps

## 4. Observations
Service connections provide controlled access to external resources. Health checks help verify application availability after deployment. A failed health check should be investigated before considering a release successful.

## 5. Result
Documented deployment safety controls, diagnostic steps, and the intended recovery process.

## 6. Evidence
- Service connection configuration, without credentials
- Health-check pipeline logs
- Failure-test output, if performed
- Rollback or redeployment instructions

**Note:** Record only the security controls and recovery steps actually tested.
