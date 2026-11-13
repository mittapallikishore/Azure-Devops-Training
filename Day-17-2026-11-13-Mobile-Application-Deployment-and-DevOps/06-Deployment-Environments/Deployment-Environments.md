# Task 6: Understanding Deployment Environments

## 1. Introduction

A deployment environment is a separate setup in which an application is developed, tested, validated, or used by customers.

Environments help organizations control software changes and reduce the risk of releasing unfinished or defective applications.

A typical software lifecycle uses four environments:

1. Development
2. Testing
3. Staging
4. Production

## 2. What Is an Environment?

An application environment can include:

- Application source code and runtime.
- Application servers or cloud services.
- Databases.
- Network configuration.
- Security settings.
- Environment variables.
- Monitoring and logging services.

Different environments may use different configurations and access permissions.

## 3. Development Environment

The development environment is where developers implement application features and perform initial validation.

Typical activities:

- Writing application code.
- Debugging errors.
- Developing new features.
- Running local builds.
- Performing unit tests.
- Integrating APIs.
- Testing database operations.

Example:

A developer creates a login screen for a mobile application and connects it to a development API.

The development environment changes frequently as developers implement and modify features.

## 4. Testing Environment

The testing environment is used to validate application behavior and identify defects.

Typical activities:

- Functional testing.
- Integration testing.
- Regression testing.
- API testing.
- UI testing.
- Performance testing.
- Security testing.
- Mobile device compatibility testing.

Example:

QA engineers verify login, registration, password reset, and API communication on different mobile devices.

The testing environment should be sufficiently controlled to produce reliable test results.

## 5. Staging Environment

Staging is a production-like environment used for final release validation.

Typical activities:

- Final release testing.
- User acceptance testing.
- Deployment verification.
- Database migration validation.
- Configuration validation.
- Release candidate testing.
- Approval before production deployment.

Example:

Before releasing a mobile application update, the team tests the release candidate against staging backend services.

Staging should resemble production as closely as practical, while avoiding unnecessary exposure of real customer data.

## 6. Production Environment

Production is the live environment where real customers use the application.

Typical activities:

- Processing real user requests.
- Handling customer transactions.
- Serving application APIs.
- Monitoring availability.
- Tracking errors and crashes.
- Managing application performance.
- Applying approved updates.
- Performing recovery when necessary.

Production requires strong security, restricted access, monitoring, backups, and controlled deployment procedures.

## 7. Environment Comparison

| Feature | Development | Testing | Staging | Production |
|---|---|---|---|---|
| Purpose | Develop features | Validate quality | Final release validation | Live application |
| Users | Developers | QA engineers | Testers and release team | Customers |
| Data | Sample data | Test data | Production-like data | Real data |
| Stability | Frequently changing | Controlled | Highly controlled | Highly stable |
| Deployment | Frequent | After development changes | Release candidates | Approved releases |
| Access | Developer access | QA access | Restricted | Strictly controlled |

## 8. Application Promotion Between Environments

A typical release flow is:

Development -> Testing -> Staging -> Production

The process:

1. Developer completes a feature.
2. Code is committed and pushed to the source repository.
3. CI pipeline builds the application.
4. Automated tests execute.
5. The validated application artifact is deployed to testing.
6. QA validates the application.
7. The release candidate is promoted to staging.
8. Final validation and approval are completed.
9. The artifact is deployed to production.
10. Monitoring checks application health.

A failed validation should stop the release from progressing to the next required environment.

## 9. Importance of Separate Environments

Separate environments help organizations:

- Prevent unfinished code from affecting customers.
- Identify defects before production.
- Validate API integrations.
- Test database changes.
- Check application performance.
- Restrict access to sensitive resources.
- Control production deployments.
- Prepare rollback and recovery plans.

## 10. Environment-Specific Configuration

Each environment may require different configuration values.

Examples include:

- API endpoints.
- Database connection strings.
- Logging levels.
- Feature flags.
- Storage locations.
- Authentication configuration.
- Network settings.

Example configuration:

| Setting | Development | Testing | Staging | Production |
|---|---|---|---|---|
| API | dev-api.example.com | test-api.example.com | staging-api.example.com | api.example.com |
| Database | Development DB | Testing DB | Staging DB | Production DB |
| Logging | Debug | Detailed | Controlled | Operational |
| Access | Developers | QA | Restricted | Strict |

The hostnames above are illustrative examples.

Secrets such as passwords, tokens, and private keys must not be committed to source control.

They should be managed through secure configuration stores, secret managers, or protected pipeline variables.

## 11. Mobile Application Environments

Mobile applications often use separate backend configurations for each environment.

### Development Build

- Connects to development APIs.
- Uses sample accounts and test data.
- Helps developers debug application features.

### Testing Build

- Connects to testing APIs.
- Used by QA engineers.
- Validates functionality and integrations.

### Staging Build

- Connects to staging APIs.
- Used for release candidate testing.
- Validates production-like behavior.

### Production Build

- Connects to production APIs.
- Distributed to real customers.
- Uses production security and monitoring settings.

Android can use Gradle build variants and configuration files. iOS can use Xcode configurations and schemes to select environment-specific settings.

## 12. Azure DevOps Environment Management

Azure DevOps supports pipeline stages, deployment environments, approvals, checks, variables, and service connections.

### Stages

Stages divide a pipeline into logical phases such as Build, Test, Staging, and Production.

### Jobs

Jobs contain the tasks that execute within a stage.

### Approvals and Checks

Approvals and checks control whether a deployment can proceed.

### Service Connections

Service connections allow pipelines to authenticate with Azure or other external services.

### Variable Groups

Variable groups share configuration values across pipeline stages.

### Secrets

Sensitive values should be protected and securely stored rather than hardcoded into YAML.

## 13. Example Azure Pipeline Environment Flow

A simplified pipeline may use:

```yaml
stages:
- stage: Build
  jobs:
  - job: BuildApplication
    steps:
    - script: echo "Building application"

- stage: Testing
  dependsOn: Build
  jobs:
  - job: TestApplication
    steps:
    - script: echo "Running tests"

- stage: Staging
  dependsOn: Testing
  jobs:
  - job: DeployStaging
    steps:
    - script: echo "Deploying to staging"

- stage: Production
  dependsOn: Staging
  jobs:
  - job: DeployProduction
    steps:
    - script: echo "Deploying to production"
```

This is a conceptual learning example. A real pipeline requires actual build and deployment tasks, appropriate agents, secure service connections, and environment configuration.

## 14. Deployment Strategies

### Rolling Deployment

Updates application instances gradually instead of replacing everything at once.

### Blue-Green Deployment

Uses two production environments. One serves current traffic while the other receives and validates the new release. Traffic can be switched after validation.

### Canary Deployment

Releases the application to a small percentage of users before expanding to more users.

### In-Place Deployment

Updates the existing application deployment directly.

Mobile applications can also use staged store releases and testing tracks to control distribution.

## 15. Production Deployment Failure and Recovery

If production deployment fails:

1. Stop further rollout.
2. Inspect pipeline logs and monitoring alerts.
3. Identify the cause.
4. Roll back to the previous stable version if appropriate.
5. Validate application health.
6. Correct the underlying problem.
7. Test the corrected release.
8. Deploy again through the controlled release process.

For mobile applications, rollback can be more complicated because users may retain older installed versions. Backend compatibility and store-release controls are important.

## 16. Security Across Environments

- Use separate credentials for each environment.
- Restrict access to production.
- Never commit secrets to Git.
- Avoid using production customer data in lower environments unless properly protected and authorized.
- Use secure communication such as HTTPS.
- Apply least-privilege access.
- Audit important deployment actions.
- Protect signing certificates and keys.
- Store secrets in secure services.

## 17. Monitoring Across Environments

Monitoring helps teams identify application problems.

Important measurements include:

- Application availability.
- API response time.
- Error rates.
- Crash reports.
- CPU and memory utilization.
- Database connectivity.
- Network failures.
- User experience.

Production monitoring is especially important because real users depend on the application.

## 18. Practical Learning Exercise

Answer the following questions:

1. Where do developers initially write and test code?
2. Which environment is commonly used by QA?
3. Why should staging resemble production?
4. Where do real customers use the application?
5. Why should production credentials not be used in development?
6. What is the purpose of production approval?
7. What happens if staging validation fails?
8. Why is monitoring important after production deployment?
9. What is the difference between rolling and canary deployment?
10. Why should previous stable artifacts be preserved?

## 19. Task 6 Summary

Development, testing, staging, and production environments provide separate stages for application development and release.

Development is used to implement features, testing validates functionality, staging performs final release validation, and production serves real customers.

Environment separation, secure configuration, approvals, monitoring, and rollback planning help organizations deploy applications reliably.

## 20. Learning Outcome

After completing this task, I understand:

- The meaning and purpose of deployment environments.
- Development, testing, staging, and production.
- How code moves through environments.
- Environment-specific configuration.
- Mobile application environment management.
- Azure DevOps stages and deployment controls.
- Deployment strategies.
- Production failure and recovery.
- Security and monitoring across environments.
