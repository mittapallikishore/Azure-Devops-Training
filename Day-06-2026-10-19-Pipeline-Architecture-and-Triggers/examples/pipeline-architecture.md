# CI/CD Pipeline Architecture

## Objective
Document the existing Azure DevOps pipeline for the sample Node.js website.

## Stage 1 - Build and Test
- Checks out the repository.
- Configures Node.js 22.
- Installs dependencies and runs quality tests.
- Publishes JUnit test results and test logs.
- Creates a website artifact with index.html and provenance.txt.
- Records build ID, build number, commit SHA, and repository name.

## Stage 2 - Deploy to Test
- Downloads the website artifact.
- Verifies that index.html and provenance.txt exist.
- Performs artifact verification, not a live deployment.

## Stage 3 - Promote to Staging
- Downloads the same website artifact.
- Displays provenance information.
- Verifies the website HTML file.
- Performs artifact verification, not a live deployment.

## Current Configuration Gaps
1. Application files are inside azure-website-project, but path filters use root-level paths.
2. npm ci, npm test, and cp index.html need a verified application working directory.
3. No explicit PR trigger is defined in the inspected YAML.
4. Test and Staging approvals and checks need verification.
5. Actual website deployment is not implemented.

## Outcome
Documented the three pipeline stages, artifact flow, provenance details, and remaining configuration gaps.
