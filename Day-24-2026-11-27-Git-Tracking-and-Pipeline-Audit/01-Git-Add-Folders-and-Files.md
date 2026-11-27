# Task 1 – Git: Adding Folders and Files

## 1. Objective

Understand how Git identifies new files and how to add folders and files to the staging area before committing them.

Git is a distributed version control system. It tracks file changes and allows developers to maintain project history.

## 2. Important Git concepts

- Working directory: the files currently present in the local project.
- Untracked file: a new file Git has not started tracking.
- Modified file: a tracked file whose content has changed.
- Staging area: the area containing selected changes prepared for a commit.
- Commit: a saved snapshot of staged changes in Git history.
- Repository: the project and its version-control history.

## 3. Create a folder

PowerShell:

```powershell
New-Item -ItemType Directory -Name "Git-Practice"
```

## 4. Create files inside the folder

```powershell
New-Item -ItemType File -Path "Git-Practice\README.md"
New-Item -ItemType File -Path "Git-Practice\notes.md"
```

Add sample content:

```powershell
Set-Content "Git-Practice\README.md" "# Git Practice"
Set-Content "Git-Practice\notes.md" "Learning Git add commands."
```

## 5. Check the repository status

```powershell
git status
```

New files should appear as untracked until they are staged.

## 6. Add one file

```powershell
git add "Git-Practice\README.md"
```

## 7. Add an entire folder

```powershell
git add "Git-Practice/"
```

This stages the files Git can track inside that folder, including files in its subfolders.

## 8. Add all changes

```powershell
git add -A
```

This stages additions, modifications, and deletions throughout the repository. Use it carefully because it can include unrelated changes.

## 9. Important: Git and empty folders

Git tracks files, not empty directories.

If an otherwise empty directory must be represented in Git, add a placeholder file such as:

```powershell
New-Item -ItemType File -Path "Git-Practice\EmptyFolder\.gitkeep" -Force
```

## 10. Practical learning

For this training day, the documentation folder itself is being created locally. Creating files does not automatically stage or commit them.

The next step is to review the files and deliberately choose which paths to stage.
