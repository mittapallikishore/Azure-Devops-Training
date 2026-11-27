# Task 4 – Pipeline YAML Trigger Changes and Validation

## 1. Objective

Review CI and PR triggers in the YAML files used by five Azure DevOps pipeline definitions.

The target configuration is:

```yaml
trigger: none
pr: none
```

This disables YAML-defined CI and PR triggers for the pipeline using that YAML configuration.

## 2. Pipeline 23

File:

`Day-12-2026-10-28-Automated-CI-Validation-and-Registry-Publishing/pipelines/azure-pipelines.yml`

The original top-level CI branch configuration and PR trigger for `main` were changed locally to:

```yaml
trigger: none
pr: none
```

A backup of the original file was saved outside the repository.

## 3. Pipeline 24

File:

`Day-13-2026-10-29-Deployment-Promotion-and-Rollback/pipelines/azure-pipelines-deploy.yml`

The original CI trigger for `test/pipeline-failure` was changed locally to:

```yaml
trigger: none
pr: none
```

A backup of the original file was saved outside the repository.

## 4. Pipelines 27, 29, and 30

These pipeline definitions use the shared YAML file:

`Day-13-2026-10-29-Deployment-Promotion-and-Rollback/Final-Mini-Project/pipelines/azure-pipelines-seven-stage.yml`

The file already contains:

```yaml
trigger: none
pr: none
```

No additional edit was needed for these three definitions.

## 5. Validation performed

The following validation was completed:

```powershell
git diff --check
git status --short
```

The YAML changes passed `git diff --check`.

## 6. Important distinction: local versus live configuration

The changes to the YAML files for pipelines 23 and 24 are local and have not yet been committed or pushed.

Therefore, the new trigger configuration for those two definitions is not yet live in the remote repository.

Pipelines 27, 29, and 30 already have the required trigger declarations in their shared YAML file.

## 7. What remains

After reviewing and approving the documentation and YAML diff:

1. Stage only the two intended YAML files and the approved Day 24 documentation.
2. Review the staged file list.
3. Review the staged diff.
4. Commit only after explicit approval.
5. Push only after explicit approval.
6. Verify the remote YAML contents and the resulting pipeline trigger configuration.

## 8. Safety

Do not delete or rename pipeline definitions.

Do not modify unrelated files or backup files.

Do not claim automatic trigger shutdown for pipelines 23 and 24 until the YAML changes are committed, pushed, and verified.
