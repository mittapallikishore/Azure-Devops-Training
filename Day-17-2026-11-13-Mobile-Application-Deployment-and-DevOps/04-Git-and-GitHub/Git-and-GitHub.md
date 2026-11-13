# Task 4: Git and GitHub Fundamentals

## 1. Introduction

Modern software development involves multiple developers working on the same application. Developers need a reliable way to track source-code changes, collaborate, review updates, and maintain different versions of a project.

Git and GitHub help teams manage these activities.

## 2. What Is Version Control?

Version control is a system that records changes made to files over time.

It helps developers:
- Track who changed files and when.
- Compare different versions.
- Restore earlier versions.
- Work on separate features.
- Collaborate without constantly sharing files manually.

### Types of Version Control

1. Local version control: Tracks file versions on one computer.
2. Centralized version control: Uses a central server to store project history.
3. Distributed version control: Each developer can have a complete local repository and history.

Git is a distributed version control system.

## 3. What Is Git?

Git is a free, open-source distributed version control system.

It records project changes through commits. Developers can work locally, create branches, compare changes, merge work, and synchronize with remote repositories.

Important Git capabilities:
- Change tracking.
- Branching and merging.
- Commit history.
- Collaboration.
- Recovery of earlier versions.
- Offline development.

## 4. What Is GitHub?

GitHub is a cloud-based platform for hosting Git repositories and collaborating on software projects.

GitHub provides:
- Remote repository hosting.
- Pull requests and code reviews.
- Issue tracking.
- Project collaboration.
- Access management.
- GitHub Actions for automation.
- Documentation through README and Markdown files.

Git manages version history. GitHub provides a platform for sharing and collaborating on Git repositories.

## 5. Git vs GitHub

| Git | GitHub |
|---|---|
| Version control software | Cloud-based development platform |
| Installed and used locally | Accessed through web or Git tools |
| Tracks file changes | Hosts Git repositories |
| Supports commits and branches | Supports pull requests and reviews |
| Can work offline | Usually requires network access for remote collaboration |

## 6. Important Git Terminology

### Repository
A repository is a project location where Git tracks files and their history.

### Working Directory
The working directory contains the files developers currently edit.

### Staging Area
The staging area contains selected changes that will be included in the next commit.

### Commit
A commit is a saved snapshot of staged changes. Each commit has an identifier and a message.

### Branch
A branch is an independent line of development. It allows developers to work on features without directly changing the main branch.

### Merge
Merge combines changes from one branch into another.

### Remote Repository
A remote repository is another copy of a Git repository, usually hosted on GitHub or another Git server.

### Origin
Origin is the conventional default name for the remote repository from which a project was cloned.

### Pull Request
A pull request is a collaboration mechanism used to propose, review, discuss, and merge code changes.

## 7. Git Repository Areas

Git development commonly involves three main areas:

1. Working Directory: Files being edited.
2. Staging Area: Changes selected for the next commit.
3. Local Repository: Commits saved in Git history.

The remote repository stores shared commits on a platform such as GitHub.

Typical workflow:

Working Directory -> Staging Area -> Local Repository -> Remote Repository

## 8. Installing and Checking Git

After installing Git, verify the installation:

```bash
git --version
```

Configure the author information used for commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Check the configuration:

```bash
git config --global --list
```

Use your own name and email address. Do not publish private credentials.

## 9. Creating and Cloning Repositories

### Initialize a new repository

```bash
mkdir sample-project
cd sample-project
git init
```

This creates a local Git repository.

### Clone an existing repository

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Cloning downloads the repository and its Git history to the local computer.

### Check the remote

```bash
git remote -v
```

This displays configured remote repository URLs.

## 10. Basic Git Commands

### Check repository status

```bash
git status
```

Displays modified, staged, untracked, and other relevant file states.

### Stage a file

```bash
git add README.md
```

### Stage all changes

```bash
git add .
```

### Create a commit

```bash
git commit -m "Add project documentation"
```

### View commit history

```bash
git log --oneline
```

### View differences

```bash
git diff
```

Shows unstaged changes.

```bash
git diff --staged
```

Shows staged changes.

## 11. Understanding Git Branches

Branches allow multiple developers to work on different features independently.

Common branch names:
- main: Main stable development branch.
- develop: Shared development branch in some workflows.
- feature/login: New login functionality.
- bugfix/api-error: Fix for an API issue.

### Create a branch

```bash
git branch feature/login
```

### Switch branches

```bash
git switch feature/login
```

### Create and switch in one command

```bash
git switch -c feature/login
```

### List branches

```bash
git branch
```

### Merge a branch

Switch to the target branch first, then merge:

```bash
git switch main
git merge feature/login
```

### Delete a merged local branch

```bash
git branch -d feature/login
```

## 12. Working with Remote Repositories

### View remotes

```bash
git remote -v
```

### Download remote updates

```bash
git fetch origin
```

Fetch downloads remote updates without integrating them into the current branch.

### Pull remote changes

```bash
git pull origin main
```

Pull fetches remote updates and integrates them into the current branch.

### Push local commits

```bash
git push origin main
```

Push uploads local commits to the remote repository.

### Push a new branch and set its upstream

```bash
git push -u origin feature/login
```

The upstream relationship makes future push and pull commands easier.

## 13. Git Pull vs Git Fetch

| Git Fetch | Git Pull |
|---|---|
| Downloads remote updates | Downloads and integrates remote updates |
| Does not automatically merge into the current branch | Usually integrates through merge or configured rebase |
| Useful for reviewing updates first | Useful when ready to update the current branch |

Example:

```bash
git fetch origin
git log --oneline HEAD..origin/main
```

This allows a developer to inspect commits available on the remote main branch.

## 14. Pull Requests and Code Reviews

A pull request proposes merging changes from one branch into another.

Typical pull request process:

1. Create a feature branch.
2. Make code changes.
3. Run local tests.
4. Commit changes.
5. Push the branch to GitHub.
6. Open a pull request.
7. Request review from teammates.
8. Address review comments.
9. Complete required checks.
10. Merge the approved pull request.

Benefits:
- Improves code quality.
- Encourages team collaboration.
- Provides a review history.
- Helps identify defects early.
- Protects important branches.

## 15. Understanding Merge Conflicts

A merge conflict occurs when Git cannot automatically combine changes.

For example, two developers may modify the same lines of a file in different branches.

Conflict resolution process:

1. Run git status.
2. Open the conflicting file.
3. Locate conflict markers.
4. Review both versions.
5. Select or combine the correct changes.
6. Remove conflict markers.
7. Stage the resolved file.
8. Complete the merge or rebase operation.

Example conflict markers:

```text
<<<<<<< HEAD
Current branch content
=======
Incoming branch content
>>>>>>> feature/login
```

These markers are temporary conflict indicators and must be removed after resolution.

## 16. Understanding .gitignore

The .gitignore file specifies files and folders Git should ignore when they are untracked.

Examples:

```gitignore
node_modules/
.env
*.log
dist/
build/
```

Common ignored content:
- Dependencies.
- Build outputs.
- Temporary files.
- Local environment configuration.
- Logs.

Important: .gitignore does not automatically stop tracking files already committed. Previously tracked files must be removed from the index separately if they should no longer be tracked.

Never commit passwords, access tokens, API keys, or other secrets.

## 17. README and Documentation

README.md is commonly used to explain a repository.

A useful README may include:
- Project overview.
- Application purpose.
- Technology stack.
- Installation instructions.
- Configuration requirements.
- How to run the application.
- How to execute tests.
- Deployment information.

Markdown is commonly used to create readable project documentation on GitHub.

## 18. GitHub Collaboration Workflow

A typical team workflow:

1. Clone the repository.
2. Pull the latest main branch.
3. Create a feature branch.
4. Develop the required feature.
5. Test the changes.
6. Stage and commit the changes.
7. Push the feature branch.
8. Create a pull request.
9. Participate in code review.
10. Merge approved changes.

This workflow reduces direct changes to the main branch and makes collaboration easier.

## 19. GitHub Actions Introduction

GitHub Actions is an automation platform integrated with GitHub.

It can automate:
- Build processes.
- Unit tests.
- Code validation.
- Security checks.
- Deployment workflows.

A workflow is commonly defined in YAML under:

```text
.github/workflows/
```

For example, a workflow can run tests whenever a developer pushes changes or opens a pull request.

## 20. Common Git Problems

| Problem | Possible solution |
|---|---|
| Working tree has uncommitted changes | Review with git status |
| Push rejected | Fetch and integrate remote changes |
| Merge conflict | Resolve conflicting files manually |
| Wrong branch | Check with git branch |
| File not staged | Run git add |
| No commit created | Review staged changes and run git commit |
| Remote not configured | Check git remote -v |
| Accidentally committed a secret | Rotate/revoke the exposed secret immediately |

Be careful with destructive commands such as git reset --hard and git clean. Understand their impact before using them.

## 21. Git Best Practices

- Create meaningful commit messages.
- Keep commits focused on related changes.
- Use feature branches.
- Pull or fetch updates regularly.
- Review changes before committing.
- Test changes before opening pull requests.
- Use pull requests for team review.
- Protect important branches.
- Maintain a useful README.
- Configure .gitignore.
- Never commit secrets.
- Avoid force-pushing shared branches unless the team explicitly agrees.

## 22. Git and GitHub in Azure DevOps

Git is also used with Azure DevOps Repos.

Azure DevOps provides:
- Git repositories.
- Branch policies.
- Pull requests.
- Code reviews.
- Pipeline integration.
- Work item integration.

A repository hosted in GitHub can also be connected to Azure Pipelines for CI/CD automation.

Example workflow:

Developer -> Git commit -> GitHub repository -> Azure Pipeline -> Build -> Test -> Deploy

This connects source-code collaboration with automated software delivery.

## 23. Practical Learning Exercise

Practice the following in a test repository:

1. Create a local Git repository.
2. Add a README.md file.
3. Stage and commit the file.
4. Create a feature branch.
5. Make a change and create another commit.
6. Merge the feature branch into main.
7. Connect the repository to GitHub.
8. Push the main branch.
9. Create a second feature branch.
10. Push it and open a pull request.

Do not perform these practice operations directly in an important training repository unless you intend to modify it.

## 24. Task 4 Summary

Git is a distributed version control system used to track changes in source code. GitHub hosts Git repositories and provides collaboration features such as pull requests, reviews, issues, and automation.

Understanding repositories, staging, commits, branches, merges, remotes, and pull requests is essential for software development and DevOps.

## 25. Learning Outcome

After completing this task, I understand:

- The difference between Git and GitHub.
- The purpose of version control.
- Repository structure and Git working areas.
- Basic Git commands.
- Branching and merging.
- Remote repository operations.
- Pull requests and code reviews.
- Merge conflict resolution.
- The purpose of .gitignore and README files.
- How GitHub integrates with Azure DevOps and CI/CD pipelines.
