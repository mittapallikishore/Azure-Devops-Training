# Day 8 — Artifact Versioning and Environment Promotion

## Objective
Build a versioned release artifact and validate its promotion through Test and Production stages using Azure DevOps YAML pipelines.

## Tasks Performed

1. **Build pipeline:** Configured the pipeline to check out the repository, install Node.js dependencies, validate JavaScript syntax, and run unit tests.
2. **Artifact publication:** Published the `Website-Release` artifact containing `index.html`, `server.js`, and `release-info.txt`.
3. **Artifact versioning:** Recorded the pipeline Build ID and source commit in `release-info.txt` to trace the release back to its source.
4. **Separate promotion pipeline:** Created `azure-pipelines-promotion.yml` to download and validate the release artifact.
5. **Test validation:** Verified that all required release files exist in the Test stage.
6. **Production validation:** Verified the release files again in the Production stage, which runs only after Test succeeds.

## Pipeline Flow

GitHub Repository → Build and Test → Publish `Website-Release` → Test Validation → Production Validation

## Observations

- The build pipeline completed successfully.
- The `Website-Release` artifact was published successfully.
- The release metadata identifies the build and source commit.
- The separate promotion pipeline completed successfully.
- Both Test and Production validation stages passed.

## Result

The artifact build, publication, version traceability, and staged validation workflow was demonstrated successfully using Azure DevOps.

**Scope note:** Test and Production are pipeline validation stages for this exercise. No deployment to actual application servers was performed.

## Evidence to Attach

- Screenshot of the successful build pipeline.
- Screenshot showing the published `Website-Release` artifact.
- Screenshot of the successful promotion pipeline with both stages passing.
- Screenshot or contents of `release-info.txt`.

## Recovery Notes

If a pipeline fails, inspect the failed task and its logs. Confirm that the selected build run contains the `Website-Release` artifact and that the expected files are present before rerunning the promotion pipeline.