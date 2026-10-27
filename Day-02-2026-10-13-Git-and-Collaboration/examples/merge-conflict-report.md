# Git Merge Conflict Practice Report

## Objective
Understand how Git identifies and resolves conflicting changes.

## Practical Steps
1. Created a starting file named `conflict-practice.txt`.
2. Created the `feature/dev-environment` branch and changed the environment line.
3. Created the `feature/prod-environment` branch from `main` and changed the same line differently.
4. Merged `feature/dev-environment` into `feature/prod-environment`.
5. Git reported a content conflict because both branches changed the same line.
6. Resolved the conflict by editing the file and removing the conflict markers.
7. Staged and committed the resolution.
8. Pushed the practice branch to GitHub.

## Final Resolution
`Environment: Development and Production`

## Key Learning
Git cannot always combine competing changes automatically. The developer must review the conflicting content, choose the correct resolution, test it where appropriate, and commit the result.

## Outcome
Practised a Git merge conflict and documented the resolution process.

## Additional Practice: Conflict Resolution

### What I Did
- Created two feature branches from `main`.
- Changed the same line differently in each branch.
- Merged one branch into the other and observed Git's content conflict.
- Resolved the conflict by editing the file and removing Git's conflict markers.
- Committed the resolved file and pushed the practice branch to GitHub.

### Final Resolution
`Environment: Development and Production`

### Learning Outcome
Learned how to identify, resolve, and commit a Git merge conflict.