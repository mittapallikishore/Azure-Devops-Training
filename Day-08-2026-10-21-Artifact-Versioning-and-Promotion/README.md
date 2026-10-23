# Day 8 — Artifact Versioning and Environment Promotion

**Date:** 21 October 2026

## Objective
Understand how to version build artifacts and promote the same validated artifact between environments safely.

## Tasks Performed
1. **Artifact Versioning:** Reviewed how build numbers and Git commit IDs can uniquely identify a build.
2. **Artifact Publication:** Configured or reviewed how pipeline outputs are published as downloadable artifacts.
3. **Build and Deployment Separation:** Understood why building the application separately from deployment improves consistency.
4. **Artifact Traceability:** Reviewed how to link an artifact to its source commit and pipeline run.
5. **Environment Configuration:** Explored how environment-specific settings can be managed separately from application artifacts.
6. **Environment Promotion:** Reviewed how the same artifact can be promoted from a test environment to staging after validation.
7. **Approvals and Gates:** Learned how environment approvals and checks help control deployment progression.

## Observations
- Unique artifact versions help identify exactly what was built.
- Reusing the same artifact reduces differences between environments.
- Environment-specific configuration should be kept separate from build outputs.
- Approvals and checks help prevent unverified releases from progressing.

## Outcome
Understood artifact versioning, traceability, build and deployment separation, and controlled promotion between environments.

## Evidence to Capture
- Pipeline run number or source commit ID.
- Published artifact and its version.
- Artifact download or publication result.
- Environment approval or promotion result, if configured.