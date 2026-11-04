# Azure DevOps Repository Triggers

## Objective
Document the branch and path filters configured in the existing application pipeline.

## Current Branch Filters
- `main`
- `feature/*`

## Current Path Filters
- `index.html`
- `package.json`
- `tests/*`
- `azure-pipelines.yml`

These paths are currently configured relative to the repository root.

## Path Filter Configuration Gap
Application files are located inside `azure-website-project`.

If the intention is to monitor those application files, review repository-relative paths such as:
- `azure-website-project/index.html`
- `azure-website-project/package.json`
- `azure-website-project/package-lock.json`
- `azure-website-project/tests/*`
- `azure-website-project/azure-pipelines.yml`

These are recommended paths, not the currently configured values.

## Pull Request Validation
The inspected YAML does not explicitly define a `pr` trigger. Verify pull-request validation and branch policies separately in Azure DevOps.

## Verification Steps
1. Review branch and path filters in the pipeline YAML.
2. Confirm that the paths match the repository structure.
3. Check CI run history in Azure DevOps.
4. Inspect pipeline logs.
5. Verify pull-request validation separately.
6. Review Test and Staging environment approvals and checks.

## Outcome
Documented existing branch and path filters, identified the application-directory mismatch, and recorded pull-request validation checks requiring verification.
