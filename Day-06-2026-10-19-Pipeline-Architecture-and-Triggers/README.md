# Day 6 - Pipeline Architecture and Repository Triggers

**Date:** 19 October 2026

## Objective
Review and document the CI/CD pipeline architecture, repository triggers, artifact flow, and environment promotion process.

## Work Reviewed
1. Inspected the repository and application folder structure.
2. Reviewed the existing Azure DevOps pipeline YAML.
3. Identified the Build and Test, Deploy to Test, and Promote to Staging stages.
4. Reviewed branch and path filters.
5. Examined test reporting, log publication, and artifact provenance.
6. Identified configuration gaps requiring correction or verification.

## Pipeline Architecture
The inspected pipeline contains three stages:
- Build and Test
- Deploy to Test
- Promote to Staging

The Build and Test stage publishes a website artifact with application HTML and provenance information. Test and Staging download and verify the same artifact.

**Important:** Test and Staging currently perform artifact verification simulations, not live website deployments.

See `examples/pipeline-architecture.md` for details.

## Repository Triggers
- Branch filters: `main` and `feature/*`
- Path filters: `index.html`, `package.json`, `tests/*`, and `azure-pipelines.yml`
- No explicit `pr` trigger in the inspected YAML.

See `examples/repository-triggers.md` for details.

## Configuration Gaps
- Application files are inside `azure-website-project`, but configured path filters use root-level paths.
- `npm ci`, `npm test`, and `cp index.html` appear to run from the repository root rather than the application directory.
- Pull-request validation requires separate verification.
- Test and Staging approvals and checks require verification in Azure DevOps.
- Actual website deployment is not implemented in the inspected pipeline.

## Outcome
Reviewed and documented the existing pipeline architecture and trigger configuration. Identified path-filter and working-directory issues that should be corrected before treating the pipeline as fully reproducible.
