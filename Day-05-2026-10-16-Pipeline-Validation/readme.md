# Day 5 - Pipeline Validation

## Objective
Validate Azure DevOps pipeline execution using separate success and intentional-failure scenarios, and verify artifact publication.

## 1. Success Pipeline

**Pipeline:** Day5-Pipeline-Validation-Success

**YAML:** azure-pipelines-success.yml

- Validates the Day 4 DevOps-Capstone folder.
- Creates a demonstration artifact containing result.txt.
- Publishes the artifact as Success-Demo.

**Execution evidence:**
- Pipeline ID: 31
- Run ID: 505
- Build number: 20261104.1
- Branch: test/pipeline-failure
- Result: Succeeded
- Artifact: Success-Demo
- Artifact ID: 322

Azure DevOps confirmed that the artifact was published. A local download attempt was blocked by authorization error TF400813, so local file-content verification remains pending.

Evidence: evidence/day5-success-run-505.txt

## 2. Intentional Failure Pipeline

**Pipeline:** Day5-Pipeline-Validation-Failure

**YAML:** azure-pipelines-failure.yml

- Executes a PowerShell step.
- Deliberately throws an error to demonstrate pipeline failure handling.

**Execution evidence:**
- Pipeline ID: 32
- Run ID: 506
- Build number: 20261104.1
- Branch: test/pipeline-failure
- Result: Failed as expected
- Log ID: 6
- Verified error: Intentional failure for Day 5 demonstration.
- PowerShell exit code: 1

Evidence: evidence/day5-failure-run-506.txt

## 3. Tools Used

- Azure DevOps Pipelines
- Azure CLI
- Git and GitHub
- PowerShell
- YAML

## 4. Learning Outcomes

- Registered YAML pipeline definitions in Azure DevOps.
- Triggered pipelines manually.
- Validated successful pipeline execution.
- Published and listed a Pipeline Artifact.
- Simulated and verified an intentional pipeline failure.
- Inspected Azure DevOps execution logs.

## Conclusion

Both Day 5 pipeline scenarios were executed and their results were verified in Azure DevOps. The success artifact was published, and intentional failure handling was confirmed through the pipeline logs. Local artifact download verification remains pending due to an authorization restriction.
