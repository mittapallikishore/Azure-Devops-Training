# Day 4 — CI Pipeline

**Date:** 15 October 2026

## Objective

Create a basic Continuous Integration (CI) pipeline in Azure DevOps to validate application changes automatically, run available tests, and publish build artifacts.

## Tasks Performed

1. **Azure DevOps Project:** Explored the Azure DevOps project and configured the connection to the GitHub repository.
2. **YAML Pipeline:** Created and configured an Azure DevOps pipeline using a YAML file stored in the repository.
3. **Dependency Installation:** Configured the pipeline to install the application's required dependencies when `package.json` is available.
4. **Build and Validation:** Added pipeline steps to check required project files and validate the application.
5. **Automated Tests:** Configured the pipeline to run the available tests when a test script is defined in `package.json`.
6. **Pipeline Triggers:** Configured the pipeline to run for changes on the `main` branch that match the configured project path filters.
7. **Pipeline Logs:** Reviewed pipeline execution logs to understand successful steps and troubleshoot failures.
8. **Repository Organization:** Moved the `DevOps-Capstone` folder from the Day 3 folder into `Day-04-2026-10-15-CI-Pipeline` to organize the CI pipeline work under the correct training day.
9. **Pipeline Path Update:** Updated the YAML `projectPath` variable and trigger path filters to match the new folder location.
10. **Git and GitHub:** Staged the folder move, committed the changes, and pushed them to the GitHub repository.
11. **Artifact Publication:** Configured the pipeline to publish the `DevOps-Capstone` project files as a pipeline artifact after successful validation.

## Repository Structure

```text
Demo-App-docs-upload/
├── Day-03-2026-10-14-Azure-Resources-and-Identity/
└── Day-04-2026-10-15-CI-Pipeline/
    ├── README.md
    └── DevOps-Capstone/
        ├── .gitignore
        ├── README.md
        ├── azure-pipelines.yml
        ├── src/
        ├── tests/
        └── docs/
```

The `DevOps-Capstone` folder contains the CI pipeline configuration and related project files. Additional folders or files may exist depending on the current repository contents.

## Pipeline Configuration

**Platform:** Azure DevOps  
**Source control:** Git and GitHub  
**Pipeline definition:** `azure-pipelines.yml`  
**Build agent:** `windows-latest`  
**Node.js version:** `20.x`  
**Primary branch:** `main`  
**Artifact name:** `DevOps-Capstone`

### YAML Pipeline Path

```text
/Day-04-2026-10-15-CI-Pipeline/DevOps-Capstone/azure-pipelines.yml
```

The Azure DevOps pipeline definition must reference this new YAML path after the file is moved in the repository.

### Pipeline Workflow

1. **Checkout:** Retrieves the source code from the connected repository.
2. **Check Project Files:** Verifies that the required project files, including `README.md` and `azure-pipelines.yml`, are present.
3. **Install Node.js:** Sets up Node.js version `20.x` on the build agent.
4. **Install Dependencies:** Runs `npm ci` when `package-lock.json` exists, or `npm install` otherwise, if `package.json` is present.
5. **Run Tests:** Runs `npm test` if a test script is configured in `package.json`.
6. **Publish Artifact:** Copies the project files and publishes the `DevOps-Capstone` artifact after the validation stage succeeds.

If dependency installation or configured tests fail, the validation stage fails and the artifact publication stage does not proceed.

## Pipeline Trigger Policy

The YAML pipeline uses branch and path filters to control when automatic runs start.

- **Main branch:** Changes on `main` that match the configured project path trigger the pipeline.
- **Path filter:** The configured path is `Day-04-2026-10-15-CI-Pipeline/DevOps-Capstone/**`.
- **Other repository paths:** Changes outside the configured path do not trigger the pipeline through this path filter.
- **Pull requests:** Pull-request validation depends on the configured PR trigger and repository provider settings.
- **Manual execution:** The pipeline can also be started manually from Azure DevOps.

## Git Workflow

The following commands can be used from the repository root in PowerShell to inspect, stage, commit, and push changes:

```powershell
git status
git add -A Day-03-2026-10-14-Azure-Resources-and-Identity/DevOps-Capstone Day-04-2026-10-15-CI-Pipeline/DevOps-Capstone
git diff --cached --check
git commit -m "Move CI pipeline project to Day 4 folder"
git push origin main
```

Before committing, review the staged changes with `git status`. Avoid including unrelated modified files, secrets, access tokens, passwords, or local dependency folders such as `node_modules`.

## Observations

- YAML defines pipeline stages, jobs, and tasks as code.
- Automated validation helps detect problems early in the development process.
- Pipeline logs make it easier to identify failed tasks and troubleshoot errors.
- Repository triggers help automate validation when relevant changes are pushed.
- Path filters help avoid unnecessary runs for unrelated repository changes.
- Publishing an artifact makes the validated project files available for later stages or release workflows.
- Moving a pipeline YAML