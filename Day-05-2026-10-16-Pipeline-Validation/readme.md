# Day 5 — Pipeline Validation

## Objective
Validate pipeline execution, test success and failure scenarios, and verify artifact publication using Azure DevOps.

## 1. Success Pipeline
**File:** `azure-pipelines-success.yml`

- Checks whether the Day 4 project folder exists.
- Creates a demonstration artifact containing `result.txt`.
- Publishes the artifact as `Success-Demo`.

**Result:** Succeeded. The `result.txt` file was found in the published artifact.

## 2. Failure Pipeline
**File:** `azure-pipelines-failure.yml`

- Runs a PowerShell step that intentionally throws an error.
- Demonstrates how Azure DevOps detects errors and marks a pipeline run as failed.

**Result:** Failed as expected. The intentional failure message appeared in the pipeline logs.

## 3. Tools Used
- Azure DevOps Pipelines
- Git and GitHub
- Visual Studio Code
- PowerShell

## 4. What I Learned
- How to run pipelines manually.
- How to validate repository files.
- How to create and publish pipeline artifacts.
- How to test failure handling and inspect pipeline logs.

## Conclusion
Successfully demonstrated pipeline validation, artifact publication, and intentional failure handling in Azure DevOps.

“I created and tested separate Azure DevOps success and failure pipelines. I verified artifact publication, confirmed that result.txt was generated, tested intentional failure handling, and documented the results in GitHub.”