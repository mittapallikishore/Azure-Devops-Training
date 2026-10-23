# Day 6 — Pipeline Architecture and Repository Triggers

**Date:** 19 October 2026

## Objective
Design a clear CI/CD pipeline flow and configure repository triggers for automated validation.

## Tasks Performed
1. **Repository Inspection:** Reviewed the repository layout, application files, existing YAML pipeline files, and test folders.
2. **Pipeline Architecture:** Defined the workflow from code checkout through dependency installation, build, tests, artifact publication, and deployment.
3. **YAML Configuration:** Reviewed and updated the Azure DevOps pipeline YAML configuration.
4. **Branch Triggers:** Configured the pipeline to run when changes are pushed to the main branch.
5. **Pull Request Validation:** Reviewed how pull requests can trigger validation before changes are merged.
6. **Pipeline Execution:** Ran the pipeline and inspected its logs and results.
7. **Documentation:** Documented the pipeline stages, trigger behavior, and validation process.

## Observations
- YAML defines the pipeline workflow and its execution steps.
- Branch and pull request triggers help automate validation.
- Pipeline logs help identify configuration and execution errors.
- Trigger behavior depends on the YAML configuration, repository settings, and branch policies.

## Outcome
Documented the CI/CD workflow and reviewed repository triggers to support automated validation of application changes.