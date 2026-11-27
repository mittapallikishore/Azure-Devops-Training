# Task 5 – Today's Work Summary and Next Steps

## 1. Training date

27 November 2026

## 2. Git learning

Today's Git learning covers:

- Creating folders and files.
- Understanding tracked and untracked files.
- Adding an individual file with `git add`.
- Adding a complete folder with `git add`.
- Understanding why Git does not track empty folders.
- Checking changes with `git status`.
- Reviewing staged and unstaged differences.
- Unstaging changes safely with `git restore --staged`.
- Reviewing changes before a commit.

## 3. Azure DevOps practical work

The practical work focused on auditing manual queue permissions for pipeline definitions 23, 24, 27, 29, and 30.

The Queue builds permission was checked for:

- Contributors.
- Build Administrators.
- Project Administrators.
- The individual account used for the audit.

Recorded verification:

- Group checks: 15/15 passed.
- Individual account checks: 5/5 passed.
- Combined checks: 20/20 passed.

## 4. YAML configuration work

Two YAML files were modified locally:

- Pipeline 23 YAML.
- Pipeline 24 YAML.

Both now contain:

```yaml
trigger: none
pr: none
```

The shared YAML used by pipelines 27, 29, and 30 already had these declarations.

`git diff --check` passed.

## 5. Repository safety

The working branch is:

`test/pipeline-failure`

The two YAML changes are still uncommitted.

Unrelated untracked backup and project files must be preserved. They must not be included accidentally in the staging area.

## 6. Pending activities

- Review the new Day 24 documentation.
- Review the complete YAML diff.
- Stage only approved files.
- Check the staged file list and content.
- Obtain approval before committing.
- Obtain approval before pushing.
- Verify the remote repository after the approved push.

## 7. Final outcome

The manual Queue builds permission audit passed for all four selected identities across the five target pipelines.

The local YAML changes for pipelines 23 and 24 are prepared but not yet live in the remote repository.

This training day demonstrates both Git change-management practices and a practical Azure DevOps pipeline security audit.
