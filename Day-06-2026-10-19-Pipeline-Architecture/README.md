# Day 6 — Pipeline Architecture and Repository Triggers

## 1. Objective

Design and document a basic Azure DevOps validation pipeline that checks repository structure and publishes a readable artifact.

## 2. Repository and Branching

- Platform: Azure DevOps Pipelines
- Source control: GitHub
- Working branch: `test/pipeline-failure`
- Pipeline configuration: `azure-pipelines.yml`

## 3. Pipeline Flow

1. **Checkout:** Downloads a clean copy of the repository.
2. **Validation:** Checks that the Day 4 project folder exists.
3. **Artifact creation:** Creates `result.txt` containing the validation result.
4. **Artifact publication:** Publishes the file as `Day6-Validation`.

See `pipeline-diagram.md` for the pipeline flow diagram.

## 4. Trigger Policy

The YAML pipeline is configured to trigger on changes to:

- `main`
- `feature/*`
- `test/*`

Pull-request validation is not enabled in YAML (`pr: none`). Configure and verify the appropriate pull-request validation policy in Azure DevOps if supported by the repository and project settings.

## 5. Testing and Expected Results

- A clean checkout should retrieve the repository files.
- The validation step should pass when the Day 4 project folder exists.
- The pipeline should create and publish `result.txt`.
- If the