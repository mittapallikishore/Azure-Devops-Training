# 04 – Git and GitHub

## Fundamentals
- **Git:** distributed version control system.
- **GitHub:** hosted platform for Git repositories, collaboration, pull requests and automation.
- Working directory → staging area → local repository → remote repository.

## Everyday workflow
```bash
git status
git switch -c feature/task-api
git add .
git commit -m "Add task API"
git push -u origin feature/task-api
git fetch origin
git pull
git log --oneline --graph
```

## Important concepts
- `commit` records a snapshot.
- `branch` isolates a line of development.
- `merge` combines histories.
- `rebase` replays commits on a new base; avoid rewriting shared history without coordination.
- `cherry-pick` applies selected commits.
- `stash` temporarily shelves working changes.
- `revert` creates a new commit that reverses an earlier commit.
- `reset` moves a branch pointer; `--hard` can discard local work.
- `tag` identifies a release/version.

## Collaboration
1. Create a feature branch.
2. Commit and push changes.
3. Open a Pull Request.
4. Run automated checks and request review.
5. Resolve feedback and merge under repository policy.

## Conflict handling
Inspect conflict markers, edit the affected files, test the result, then `git add` and complete the merge/rebase. Use `git merge --abort` or `git rebase --abort` when appropriate.

## Safety
- Never commit passwords, tokens, private keys or production secrets.
- Use `.gitignore` for generated files and local configuration.
- Protect important branches with review and status-check policies.
- Use `git reflog` to investigate recoverable local reference movements.

## Interview check
**Merge vs rebase?** Merge combines histories and preserves branch topology; rebase replays commits to create a more linear history.
