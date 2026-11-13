# Task 3: Understanding DevOps Fundamentals

## 1. Introduction to DevOps

DevOps is a combination of Development (Dev) and Operations (Ops).

It is a culture, set of practices, and tools that help development and IT operations teams collaborate to build, test, release, deploy, and maintain applications.

Traditional software development often separated development and operations teams. Developers wrote application code and handed it over to operations teams for deployment.

This separation could create communication gaps, deployment delays, and inconsistent environments.

DevOps improves collaboration through automation, continuous integration, continuous delivery, infrastructure automation, and continuous monitoring.

## 2. Why Organizations Use DevOps

Main objectives:

- Deliver software faster.
- Improve collaboration between teams.
- Automate repetitive processes.
- Improve software quality.
- Reduce deployment failures.
- Identify and resolve issues faster.
- Improve application availability.
- Continuously collect feedback.

Example:

A mobile banking development team creates a new login feature. DevOps practices help build the application, run automated tests, deploy backend changes, and monitor the release.

## 3. DevOps Lifecycle

The DevOps lifecycle contains continuous stages.

### 3.1 Plan

Define application requirements, tasks, priorities, and release objectives.

Examples:
- Azure Boards
- Jira

### 3.2 Code

Developers write and manage source code using version control.

Examples:
- Git
- GitHub
- Azure Repos

### 3.3 Build

Compile application code, resolve dependencies, and generate build packages.

Examples:
- Maven
- Gradle
- npm
- MSBuild

### 3.4 Test

Run automated and manual tests to verify software quality.

Examples:
- JUnit
- Selenium
- Playwright
- XCTest
- Android UI tests

### 3.5 Release

Prepare tested software for an approved release.

Activities include versioning, release notes, approvals, and artifact management.

### 3.6 Deploy

Deploy the application or service to the required environment.

Examples:
- Azure App Service
- Azure Container Apps
- Kubernetes
- Google Play testing tracks
- Apple TestFlight

### 3.7 Operate

Maintain application services, infrastructure, availability, and security.

### 3.8 Monitor

Collect logs, metrics, traces, and application health information.

Examples:
- Azure Monitor
- Application Insights
- Prometheus
- Grafana

Monitoring provides feedback for future development and operational improvements.

## 4. Important DevOps Practices

### 4.1 Version Control

Version control tracks source-code changes and enables multiple developers to collaborate.

Git is a distributed version control system.

GitHub and Azure Repos provide platforms for hosting Git repositories.

Important Git operations:

- git init
- git clone
- git status
- git add
- git commit
- git push
- git pull
- git branch
- git merge

### 4.2 Continuous Integration (CI)

Continuous Integration means frequently integrating code changes into a shared repository.

A CI pipeline commonly performs:

1. Detect code changes.
2. Download source code.
3. Install dependencies.
4. Build the application.
5. Run automated tests.
6. Publish build artifacts.

The purpose is to identify integration and code-quality issues early.

### 4.3 Continuous Delivery (CD)

Continuous Delivery keeps tested software ready for release.

Production deployment can require manual approval.

### 4.4 Continuous Deployment

Continuous Deployment automatically releases qualifying changes to production after the required checks pass.

Difference:

- Continuous Delivery prepares software for release.
- Continuous Deployment automatically deploys qualifying changes to production.

### 4.5 Infrastructure as Code (IaC)

Infrastructure as Code means defining infrastructure through configuration files instead of manually creating every resource.

Examples:
- Terraform
- Azure Bicep
- Azure Resource Manager templates

Benefits:
- Repeatable infrastructure.
- Version-controlled configurations.
- Consistent environments.
- Easier recovery and automation.

### 4.6 Configuration Management

Configuration management helps maintain consistent software and infrastructure configurations.

Examples:
- Ansible
- Chef
- Puppet

### 4.7 Monitoring and Logging

Monitoring and logging help identify application errors, infrastructure problems, and performance issues.

Examples:
- Azure Monitor
- Application Insights
- Prometheus
- Grafana

## 5. DevOps Tools and Their Purposes

| Tool | Purpose |
|---|---|
| Git | Version control |
| GitHub | Source-code hosting and collaboration |
| Azure DevOps | Boards, Repos, Pipelines and artifact management |
| Jenkins | Automation server |
| Docker | Containerization |
| Kubernetes | Container orchestration |
| Terraform | Infrastructure as Code |
| Ansible | Configuration management |
| SonarQube | Code quality analysis |
| Azure Monitor | Monitoring and observability |

## 6. DevOps in Mobile Application Development

Mobile DevOps supports the development, testing, signing, distribution, deployment, and maintenance of Android and iOS applications.

### Android workflow

1. Developers commit source code.
2. CI pipeline retrieves the repository.
3. Gradle builds the application.
4. Automated tests execute.
5. APK or Android App Bundle is generated.
6. Application is signed.
7. Build is distributed to a testing or production channel.
8. Application performance and crashes are monitored.

### iOS workflow

1. Developers commit source code.
2. CI pipeline retrieves the repository.
3. Xcode builds the application.
4. Automated tests execute.
5. Application archive is created.
6. Application is signed and prepared for distribution.
7. Application is distributed through TestFlight or the App Store.
8. Application performance and crashes are monitored.

iOS signing and distribution require appropriate Apple developer credentials and certificates.

Backend APIs also need CI/CD pipelines because mobile applications depend on backend services.

## 7. Development, Testing, Staging, and Production

Software is commonly deployed through different environments.

### Development

Used by developers to implement features and integrate code changes.

### Testing

Used to verify application functionality, integration, and quality.

### Staging

A production-like environment used for final release verification.

### Production

The live environment used by actual customers.

Benefits of separating environments:

- Reduces risk to production.
- Detects defects before release.
- Supports controlled testing.
- Improves release confidence.
- Allows environment-specific configuration.

## 8. DevOps vs Traditional Software Delivery

| Traditional Delivery | DevOps |
|---|---|
| Separate development and operations | Shared responsibility |
| More manual deployment | Automated deployment |
| Testing often happens late | Continuous testing |
| Slower feedback | Continuous feedback |
| Inconsistent environments | Standardized configurations |
| Difficult release coordination | Automated pipelines and collaboration |

## 9. DevSecOps

DevSecOps integrates security into the DevOps lifecycle.

Security is not treated as a final step. It is included during development, testing, deployment, and operation.

Examples:

- Dependency vulnerability scanning.
- Secret detection.
- Static code analysis.
- Container image scanning.
- Infrastructure security checks.
- Access control.
- Audit logging.

## 10. Reliability and Site Reliability Engineering

Reliability practices help maintain application availability and performance.

Important concepts:

- Health checks verify application availability.
- Logs help investigate failures.
- Metrics measure performance.
- Alerts notify engineering teams.
- Rollbacks help recover from problematic releases.
- Backups protect application data.
- Disaster recovery helps restore services after major failures.

Site Reliability Engineering (SRE) applies engineering practices to improve service reliability.

## 11. How DevOps Supports Mobile Applications

| Component | DevOps Responsibility |
|---|---|
| Android Application | Build, test, sign, and distribute |
| iOS Application | Build, test, sign, and distribute |
| Backend API | Build, test, deploy, and monitor |
| Database | Migrations, backups, and access control |
| Cloud Infrastructure | Provisioning and configuration |
| CI/CD Pipeline | Automate build, testing, and deployment |
| Monitoring | Track performance, errors, and availability |

## 12. Real-World Example

Consider a food delivery mobile application.

1. Developers create a new order-tracking feature.
2. They commit code to GitHub.
3. A CI pipeline starts automatically.
4. The application is built and tested.
5. Backend APIs are deployed to a testing environment.
6. The mobile application is tested against the backend.
7. The release is promoted to staging.
8. Final validation and approval are completed.
9. The application and backend are released to production.
10. Monitoring tools track API response times, application errors, and availability.

If a release causes a critical issue, the team investigates and can use a rollback or recovery strategy.

## 13. Benefits of DevOps

- Faster software delivery.
- Better collaboration.
- Improved application quality.
- Repeatable deployments.
- Reduced manual work.
- Improved security integration.
- Faster failure detection.
- Better application reliability.
- Continuous improvement.

## 14. Key Concepts

| Concept | Meaning |
|---|---|
| DevOps | Development and Operations collaboration |
| CI | Continuous Integration |
| CD | Continuous Delivery or Continuous Deployment |
| IaC | Infrastructure as Code |
| CI Pipeline | Automates build and testing |
| CD Pipeline | Automates release and deployment |
| Artifact | Packaged output produced by a build |
| Container | Packages an application and its dependencies |
| Monitoring | Observes system health and performance |
| DevSecOps | Integrates security into DevOps |
| SRE | Site Reliability Engineering |

## 15. Conclusion

DevOps combines collaboration, automation, continuous integration, delivery, infrastructure management, security, and monitoring.

For mobile applications, DevOps supports both Android and iOS release workflows and the backend services that power them.

Understanding DevOps is essential for building reliable CI/CD pipelines, deploying applications safely, managing cloud infrastructure, and maintaining production systems.

## 16. References

- Microsoft Learn - What is DevOps?
  https://learn.microsoft.com/en-us/devops/what-is-devops

- Azure Pipelines:
  https://learn.microsoft.com/en-us/azure/devops/pipelines/

- Git Documentation:
  https://git-scm.com/doc

- Docker Documentation:
  https://docs.docker.com/

- Kubernetes Documentation:
  https://kubernetes.io/docs/
