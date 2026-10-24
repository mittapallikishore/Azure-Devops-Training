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
Set `SIMULATE_HEALTH_FAILURE` to `true` in the pipeline YAML and run the pipeline to confirm that the health-check step fails with a clear message. Restore it to `false` and rerun to confirm success.

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
