# Day 10 — CI/CD Capstone and Release Review

**Date:** 23 October 2026

## Objective
Review and demonstrate an end-to-end CI/CD workflow covering code validation, artifact publication, deployment verification, and recovery.

## Tasks Performed
1. **Pull Request Validation:** Reviewed how pipeline checks validate code changes before merging.
2. **Build and Test:** Ran or reviewed pipeline stages for dependency installation, build validation, and automated tests.
3. **Artifact Publication:** Verified how build outputs are published and associated with a pipeline run.
4. **Gated Deployment:** Reviewed deployment approvals and checks used to control release progression.
5. **Smoke Testing:** Verified or reviewed basic application health checks after deployment.
6. **Failure Diagnosis:** Examined pipeline logs to identify validation or deployment failures.
7. **Rollback and Recovery:** Documented how to redeploy a previously validated artifact and verify application health.
8. **Permissions Review:** Reviewed pipeline permissions, service connections, and secure handling of secrets.
9. **Documentation and Handover:** Organized daily task documentation, pipeline configuration details, test evidence, and recovery instructions.

## Observations
- Automated validation helps identify problems before deployment.
- Published artifacts improve traceability between builds and releases.
- Deployment gates provide additional control over releases.
- Smoke tests help confirm that the application responds after deployment.
- Clear recovery instructions improve release reliability.

## Outcome
Consolidated the CI/CD learning tasks and documented the end-to-end pipeline workflow, validation approach, deployment safeguards, and recovery procedure.

## Final Review Checklist
- [ ] Pipeline YAML and configuration documented.
- [ ] Pull request and branch trigger behavior verified.
- [ ] Successful and failed validation results recorded.
- [ ] Artifact publication and versioning reviewed.
- [ ] Deployment approval and smoke-test evidence captured, where configured.
- [ ] Rollback procedure documented and tested where possible.
- [ ] Pipeline permissions and secret handling reviewed.
- [ ] All daily README files saved in the repository.

## Limitations and Next Steps
Record any stages that were reviewed but not fully implemented, such as deployment to a live environment, approval gates, or a complete rollback demonstration. Plan to validate these steps in a sandbox before using the pipeline for production releases.

## Execution Results

- **Build and validation:** Succeeded in Azure DevOps.
- **Artifact publication:** Succeeded. `Website-Release` contains only the website application files and `release-info.txt`; training documentation folders are excluded.
- **Deployment gate:** Manual approval stage configured to review the release artifact before deployment.
- **Smoke-test validation:** Succeeded. Confirmed that the website application directory and `index.html` exist.
- **Pull-request validation:** Not yet configured as an automatic PR trigger; the current pipeline uses manual execution.
- **Post-deployment smoke test:** Pending deployment to a real environment and verification through an HTTP health endpoint.
- **Rollback:** Recovery procedure documented, but actual rollback execution remains pending environment configuration.

## Conclusion

The capstone validation pipeline publishes a focused website artifact and includes a manual approval gate. A separate smoke-test pipeline verifies the required website files. Actual deployment, automatic PR validation, post-deployment verification, and rollback execution remain outstanding before the full end-to-end release acceptance criteria can be considered complete.
