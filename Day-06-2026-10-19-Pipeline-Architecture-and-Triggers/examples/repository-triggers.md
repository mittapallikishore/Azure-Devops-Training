# Azure DevOps Repository Triggers

## Objective
Document when the existing CI pipeline should run after repository changes.

## Current Trigger Configuration
- **Main branch:** Runs when matching file changes are pushed to `main`.
- **Feature branches:** Runs when matching file changes are pushed to branches matching `feature/*`.
- **Path filters:** The pipeline monitors `index.html`, `package.json`, files under `tests/`, and `azure-pipelines.yml`.
- **Other files:** Changes outside these paths may not trigger a CI run through this configuration.

## Pull Request Validation
The YAML does not explicitly define a `pr` trigger. Verify the effective pull-request validation behavior in Azure DevOps for the GitHub repository.

## Verification Steps
1. Save and commit the pipeline configuration.
2. Push a change to a monitored file on `main` or a `feature/*` branch.
3. Open Azure DevOps and check **Pipelines → Runs**.
4. Confirm whether a new run starts and inspect its logs.
5. Create a pull request and verify its validation behavior separately.

## Observation
Branch and path filters help avoid unnecessary pipeline runs. Pull-request validation must also be verified.

## Outcome
Documented the existing branch triggers, path filters, and pull-request validation checks.
