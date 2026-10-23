# Day 6 — Pipeline Architecture and Repository Triggers

## 1. Objective
Design a basic Azure DevOps validation pipeline, define repository triggers, and publish a readable validation artifact.

## 2. Repository Details
- Source control: GitHub
- Working branch: `test/pipeline-failure`
- Pipeline file: `azure-pipelines.yml`

## 3. Pipeline Flow
1. **Checkout:** Retrieves a clean copy of the repository.
2. **Validation:** Checks that the Day 4 project folder exists.
3. **Artifact creation:** Creates `result.txt` with the validation result.
4. **Artifact publication:** Publishes the `Day6-Validation` artifact.

See `pipeline-diagram.md` for the pipeline flow diagram.

## 4. Trigger Policy
- **Main branch:** Runs on changes to `main`.
- **Feature branches:** Runs on changes to `feature/*`.
- **Test branches:** Runs on changes to `test/*`.
- **Pull requests:** YAML is configured to validate pull requests targeting `main`.

Actual trigger behavior must be verified by observing pipeline runs after the relevant branch updates or pull requests.

## 5. Validation Results
- Pipeline run: Succeeded.
- Clean checkout: Configured with `clean: true`.
- Artifact: `Day6-Validation`.
- Output file: `result.txt`.
- Expected output: `Repository validation passed.`

## 6. Acceptance Criteria
- [x] Pipeline configuration documented.
- [x] Pipeline diagram created.
- [x] Pipeline run succeeded.
- [x] Readable validation artifact published.
- [ ] Pull-request trigger verified with an actual pull request.

## 7. Conclusion
The basic validation pipeline successfully checks repository structure and publishes a readable artifact. Pull-request behavior remains subject to verification through an actual pull request targeting `main`.
