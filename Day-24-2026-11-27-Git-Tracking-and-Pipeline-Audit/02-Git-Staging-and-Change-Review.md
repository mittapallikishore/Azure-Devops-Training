# Task 2 – Git Staging and Change Review

## 1. Objective

Learn how to inspect changes, stage selected files, review staged content, and safely remove files from staging without deleting their local contents.

## 2. Check the current branch

```powershell
git branch --show-current
```

The active branch during today's work is:

`test/pipeline-failure`

## 3. Inspect working-directory changes

```powershell
git status --short
git status
```

Common status indicators:

- `??` – untracked file.
- ` M` – modified file not staged.
- `A ` – added file staged.
- `M ` – modified file staged.
- `D ` – deleted file staged.

## 4. Stage a specific file

```powershell
git add "path/to/file.md"
```

## 5. Stage a specific folder

```powershell
git add "path/to/folder/"
```

## 6. Review staged files

```powershell
git diff --cached --name-only
```

Review the actual staged content:

```powershell
git diff --cached
```

## 7. Review unstaged changes

```powershell
git diff
```

## 8. Unstage a file safely

If a file was staged accidentally:

```powershell
git restore --staged "path/to/file.md"
```

This removes it from the staging area but preserves the local file and its edits.

## 9. Validate whitespace and patch formatting

```powershell
git diff --check
git diff --cached --check
```

## 10. Recommended workflow

1. Check the active branch.
2. Run `git status`.
3. Review changed and untracked files.
4. Stage only the intended files.
5. Review `git diff --cached`.
6. Run validation checks.
7. Commit only after reviewing and receiving the required approval.
8. Push only when explicitly approved.

## 11. Today's practical rule

Do not use `git add -A` blindly in a repository containing unrelated backups or other untracked files.

For today's pipeline work, only the intended training documentation and approved YAML changes should eventually be selected. The YAML changes are not being committed as part of this task.
