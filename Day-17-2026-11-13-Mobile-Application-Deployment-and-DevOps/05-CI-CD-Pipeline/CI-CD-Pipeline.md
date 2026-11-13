# Task 5: Understanding CI/CD Pipelines

## 1. Introduction

CI/CD is an important DevOps practice that automates software integration, testing, packaging, delivery, and deployment.

It helps development teams deliver reliable software frequently while reducing manual work and deployment errors.

CI/CD stands for:
- Continuous Integration (CI)
- Continuous Delivery (CD)
- Continuous Deployment (CD)

## 2. What Is Continuous Integration?

Continuous Integration is the practice of frequently integrating developers' code changes into a shared repository.

Whenever developers push changes, an automated pipeline can:
1. Retrieve the latest source code.
2. Install dependencies.
3. Build the application.
4. Run automated tests.
5. Perform code-quality and security checks.
6. Report the result.

The purpose is to identify integration problems as early as possible.

### Benefits of CI

- Detects bugs early.
- Reduces integration problems.
- Provides faster feedback.
- Keeps the shared codebase healthier.
- Reduces manual testing effort.
- Improves team collaboration.

## 3. What Is Continuous Delivery?

Continuous Delivery is the practice of automatically building, testing, and preparing software so it is ready for release.

The application can be deployed to production after an authorized person or release process approves it.

Example:
- Developer pushes code.
- Pipeline builds and tests the application.
- A release artifact is generated.
- The artifact is deployed to staging.
- Validation is completed.
- Production deployment waits for approval.

The important point is that the software is kept in a deployable state.

## 4. What Is Continuous Deployment?

Continuous Deployment extends automation further.

Every change that successfully passes the required pipeline checks can be automatically deployed to production without a separate manual release approval.

Example:
- Developer pushes code.
- Pipeline builds the application.
- Automated tests pass.
- Security and quality gates pass.
- Application is automatically deployed to production.
- Monitoring checks the deployed application.

Continuous Deployment requires strong automated testing, security controls, monitoring, and rollback capabilities.

## 5. Continuous Delivery vs Continuous Deployment

| Continuous Delivery | Continuous Deployment |
|---|---|
| Application is automatically prepared for release | Application is automatically deployed to production |
| Production release may require approval | Production release generally requires no manual approval |
| Human-controlled production release is possible | Deployment follows successful automated checks |
| Keeps software release-ready | Automates the complete release process |

Both approaches depend on Continuous Integration.

## 6. Why Do Organizations Use CI/CD?

Traditional software delivery often requires manual building, testing, packaging, and deployment.

This can lead to:
- Slow release cycles.
- Human errors.
- Inconsistent environments.
- Late discovery of defects.
- Difficult troubleshooting.
- Repeated manual tasks.

CI/CD improves the process by automating repetitive steps and providing consistent validation.

## 7. CI/CD Pipeline Architecture

A typical pipeline contains these stages:

1. Source
2. Build
3. Test
4. Security and quality checks
5. Package
6. Artifact publishing
7. Deployment
8. Post-deployment validation
9. Monitoring

The basic pipeline diagram is stored separately in:

diagrams/basic-cicd-pipeline.md

## 8. Stage 1: Source Code Management

The source stage retrieves the application code from a version control repository.

Common source platforms:
- GitHub
- Azure Repos
- GitLab
- Bitbucket

A pipeline may be triggered by:
- A developer pushing code.
- A pull request being created or updated.
- A scheduled execution.
- A manual pipeline run.

The pipeline should use the intended branch and source revision.

## 9. Stage 2: Build

The build stage converts source code into an application package or executable output.

Examples:

Android:
- Uses Gradle.
- Compiles Java or Kotlin code.
- Produces APK or AAB packages.

iOS:
- Uses Xcode.
- Compiles Swift or Objective-C code.
- Produces an application archive and distribution package.

Web applications:
- Install dependencies.
- Compile or bundle frontend code.
- Prepare server application files.

Build validation helps detect compilation and dependency errors.

## 10. Stage 3: Automated Testing

Automated tests verify application functionality.

### Unit Testing

Tests individual functions, classes, or components independently.

### Integration Testing

Checks whether multiple components work together correctly.

Example: Mobile application communicating with a backend API.

### UI Testing

Checks user interface behavior and user workflows.

Example: Opening a mobile application, signing in, and navigating to a screen.

### Smoke Testing

Performs basic checks to confirm that the application is working after deployment.

Testing should run before an artifact is promoted to production.

## 11. Stage 4: Security and Quality Checks

Pipelines can include automated security and quality validation.

Examples:
- Dependency vulnerability scanning.
- Static application security testing.
- Secret detection.
- Code-quality analysis.
- License checks.
- Configuration validation.

Credentials, certificates, API keys, and signing passwords must be stored securely.

They should never be hardcoded into source files or committed to Git.

## 12. Stage 5: Application Packaging

After successful build and testing, the pipeline creates a distributable artifact.

Examples:

| Application type | Build output |
|---|---|
| Android | APK or AAB |
| iOS | IPA or application archive |
| Web | Build output or deployment package |
| Containerized application | Docker image |

Artifacts should have traceable version numbers or identifiers.

## 13. Stage 6: Artifact Publishing

The pipeline publishes the generated artifact to a storage or distribution location.

Examples:
- Azure Pipeline Artifacts.
- Azure Artifacts.
- Azure Container Registry.
- GitHub Packages.
- Mobile application distribution services.

Benefits:
- Preserves build outputs.
- Supports release traceability.
- Enables artifact promotion.
- Helps with rollback.
- Separates building from deployment.

## 14. Stage 7: Deployment

Deployment installs or releases the validated application to a target environment.

Examples:
- Development environment.
- Testing environment.
- Staging environment.
- Production environment.

Mobile applications may be distributed through:
- Internal testing.
- Firebase App Distribution.
- Google Play internal or production tracks.
- Apple TestFlight.
- Apple App Store.

The target platform and signing requirements must be considered.

## 15. Stage 8: Post-Deployment Validation

After deployment, the pipeline should confirm that the application is functioning correctly.

Validation may include:
- Health checks.
- Smoke tests.
- API endpoint checks.
- Application startup checks.
- Database connectivity checks.
- Basic user workflow checks.

If validation fails, the release may be stopped or rolled back.

## 16. Stage 9: Monitoring

Monitoring helps teams understand application behavior after deployment.

Common monitoring information:
- Application availability.
- Crash reports.
- Error rates.
- API response times.
- CPU and memory usage.
- Network failures.
- User experience.

Mobile monitoring may include crash analytics, performance metrics, and device-specific issues.

## 17. CI/CD for Android Applications

A typical Android CI/CD process:

1. Developer writes Android code using Kotlin or Java.
2. Code is pushed to GitHub.
3. Pipeline starts on a compatible build agent.
4. JDK and Android build tools are prepared.
5. Gradle builds the application.
6. Unit and other configured tests run.
7. Pipeline produces an APK or AAB.
8. Application is signed using securely managed credentials.
9. Artifact is published.
10. Application is distributed to testers or a release track.

Android builds commonly use Gradle tasks such as:

```bash
./gradlew assembleDebug
./gradlew test
./gradlew bundleRelease
```

The exact tasks depend on the project configuration.

## 18. CI/CD for iOS Applications

A typical iOS CI/CD process:

1. Developer writes Swift or Objective-C code.
2. Code is pushed to GitHub.
3. Pipeline runs on a compatible macOS agent.
4. Xcode resolves dependencies.
5. Application is compiled.
6. Unit and UI tests run.
7. Xcode archives the application.
8. Signing and provisioning are applied.
9. IPA or archive output is produced.
10. Application is distributed through TestFlight or the App Store release process.

iOS builds require Apple development tools and suitable signing configuration.

## 19. CI/CD Environments

### Development

Used by developers for implementing and testing new features.

### Testing

Used for automated testing and quality validation.

### Staging

A production-like environment used for final release validation.

### Production

The live environment used by real customers.

A good release process promotes a validated artifact between environments and applies environment-specific configuration securely.

## 20. Deployment Approval and Quality Gates

A quality gate is a condition that must pass before the pipeline can continue.

Examples:
- Unit tests must pass.
- Required security scans must pass.
- Code-quality thresholds must be met.
- Required reviewers must approve a pull request.
- Production deployment must receive approval.

Quality gates prevent known failures from reaching later stages.

## 21. What Happens When a Pipeline Fails?

When a pipeline stage fails:

1. The pipeline identifies the failed task.
2. Developers inspect the execution logs.
3. The cause is investigated.
4. Source code or configuration is corrected.
5. A new commit is pushed.
6. The pipeline runs again.
7. Deployment continues only after required checks pass.

Failure notifications and clear logs help reduce troubleshooting time.

## 22. Rollback and Recovery

Rollback means returning an application to a previously known working version.

Rollback may be required when:
- A deployment introduces a critical bug.
- The application fails health checks.
- API communication stops working.
- Performance becomes unacceptable.
- Users experience major application failures.

A reliable release process should preserve previous artifacts and deployment configuration so recovery can be performed safely.

## 23. CI/CD Tools

| Tool | Main purpose |
|---|---|
| Azure Pipelines | Build, test, and deploy applications |
| GitHub Actions | Automate repository workflows |
| Jenkins | Automate CI/CD tasks |
| Gradle | Android build automation |
| Xcode | iOS application building and archiving |
| Docker | Container image creation |
| SonarQube | Code-quality analysis |
| Azure Monitor | Application and infrastructure monitoring |

## 24. Azure DevOps CI/CD Example

Azure Pipelines supports YAML-based pipeline definitions.

A simple Node.js example:

```yaml
trigger:
  - main

pool:
  vmImage: ubuntu-latest

steps:
  - script: npm ci
    displayName: Install dependencies

  - script: npm test
    displayName: Run automated tests

  - script: npm run build
    displayName: Build application
```

This is a basic example for a Node.js project. Android and iOS applications require platform-specific build tasks and agents.

## 25. CI/CD Best Practices

- Use version control for all application code.
- Run automated tests on every important change.
- Keep pipeline tasks repeatable.
- Store secrets in secure variable stores or secret managers.
- Use quality and security gates.
- Version and preserve build artifacts.
- Promote validated artifacts between environments.
- Require production approvals when appropriate.
- Monitor application behavior after release.
- Maintain a rollback strategy.
- Review failed pipeline logs and correct root causes.

## 26. How CI/CD Connects Development and DevOps

CI/CD connects software development with operational delivery.

Developer:
Writes and updates application code.

Git:
Tracks source-code changes.

CI pipeline:
Builds and tests the code.

Artifact storage:
Preserves the validated package.

CD pipeline:
Deploys the package to the selected environment.

Monitoring:
Checks application health and performance.

This creates a repeatable software delivery process.

## 27. Practical Learning Exercise

Study a sample pipeline and identify:

1. Which source branch triggers the pipeline?
2. Which build agent is used?
3. Which dependencies are installed?
4. Which build command is executed?
5. Which tests are run?
6. What artifact is generated?
7. Where is the artifact published?
8. Which environment receives the deployment?
9. How is deployment validated?
10. What happens if a stage fails?

## 28. Task 5 Summary

CI/CD automates the process of integrating, building, testing, packaging, and releasing software.

Continuous Integration validates frequent code changes. Continuous Delivery prepares software for release, while Continuous Deployment automatically releases qualifying changes to production.

For mobile applications, CI/CD supports Android and iOS builds, automated testing, application signing, artifact publishing, distribution, and post-release monitoring.

## 29. Learning Outcome

After completing this task, I understand:

- The meaning of CI/CD.
- Continuous Integration, Continuous Delivery, and Continuous Deployment.
- The stages of a CI/CD pipeline.
- Application build and automated testing.
- Artifact creation and publishing.
- Android and iOS CI/CD processes.
- Deployment environments and approvals.
- Pipeline failures and troubleshooting.
- Rollback and recovery.
- The role of Azure Pipelines and other automation tools.
