# TeamFlow – Git Workflow Implementation

## Objective

Establish a consistent collaboration workflow for backend and frontend contributors.

## Branch Strategy

- main: shared stable integration branch.
- feature/*: new functionality.
- fix/*: bug fixes.
- docs/*: documentation changes.
- refactor/*: code restructuring.

## Pull Request Workflow

1. Create a short-lived working branch from main.
2. Implement the assigned changes.
3. Commit changes using the agreed commit conventions.
4. Push the branch to GitHub.
5. Open a pull request targeting main.
6. Review changes and resolve feedback.
7. Merge after required checks and approvals.

## Documentation Updated

- CONTRIBUTING.md
- docs/GIT_WORKFLOW.md

## Outcome

The repository documentation was aligned with a main-based workflow. The inconsistent develop branch references were removed from the documented workflow and CI triggers.