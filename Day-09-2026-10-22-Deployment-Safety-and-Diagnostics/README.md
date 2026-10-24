# Day 9 — Deployment Safety and Diagnostics

## Objective
Improve pipeline safety by validating release files, checking health status, diagnosing failures, and documenting recovery steps.

## Tasks Performed
1. **Clean checkout:** The pipeline starts with a clean repository checkout.
2. **Release validation:** It checks that the Day 8 release documentation exists.
3. **Health check:** It runs a health-check stage that passes normally and can be configured to fail for testing.
4. **Failure diagnostics:** Clear error messages help identify why a pipeline step failed.
5. **Secret management:** No secrets are hardcoded or printed. Real deployment credentials should be stored securely in Azure DevOps secret variables or service connections.
6. **Recovery plan:** If validation fails, investigate the logs and rerun after fixing the issue. For a real deployment, redeploy the last known-good artifact and verify application health.


## Failure Test

A separate `azure-pipelines-failure.yml` file was created to simulate a health-check failure without modifying the successful `azure-pipelines.yml` pipeline.

The failure pipeline was executed in Azure DevOps and failed at the `Simulate health-check failure` step as expected. The logs displayed the intentional failure message and diagnosis.

The normal pipeline remains separate and can be run independently.

## Test Results

- Normal validation pipeline: Succeeded.
- Simulated health-check failure pipeline: Failed as expected.
- Failure logs: Verified.


## Observations
- Clean checkout helps avoid using stale workspace files.
- Release-file validation catches missing inputs early.
- Health-check failures should stop the pipeline and provide actionable logs.
- Real deployment and rollback require a configured target environment and a previously published artifact.

## Result
A starter deployment-safety validation pipeline has been created. Actual deployment, secret-backed service connections, and rollback execution remain dependent on environment configuration.

## Evidence to Capture
- Successful pipeline run.
- Failed simulated health-check run.
- Logs showing the failure message.
- Successful run after restoring the health-check setting.

## Recovery Instructions
1. Open the failed pipeline run and inspect the failing step.
2. Fix the missing file or restore the health-check setting.
3. Rerun validation.
4. For a real deployment, redeploy the last known-good artifact and verify the application health endpoint.


## Recovery and Rollback Plan

1. Open the failed Azure DevOps pipeline run and inspect the logs.
2. Identify the failing validation or health-check step.
3. Correct the problem and rerun the validation pipeline.
4. If a real deployment causes problems, redeploy the last known-good published artifact.
5. Run the application health check after redeployment.
6. Confirm the application is healthy before considering recovery complete.

### Security and Permissions

- Store credentials in Azure DevOps secret variables or service connections.
- Never commit passwords, tokens, or other secrets to Git.
- Do not print secret values in pipeline logs.
- Restrict deployment permissions to authorized users and environments.

**Limitation:** The current Day 9 pipelines test validation and simulated failure. Actual deployment, secret-backed service connections, and rollback execution still need a configured deployment environment.
