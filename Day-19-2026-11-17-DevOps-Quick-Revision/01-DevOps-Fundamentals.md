# 01 – DevOps Fundamentals

## Core idea
DevOps combines people, processes and technology to improve collaboration between development and operations and deliver software reliably and frequently.

## DevOps lifecycle
1. **Plan** – requirements, backlog and priorities.
2. **Code** – develop and review source code.
3. **Build** – compile/package the application.
4. **Test** – run automated tests and quality checks.
5. **Release** – approve and prepare a version.
6. **Deploy** – deliver to an environment.
7. **Operate** – run and support the application.
8. **Monitor** – measure health and collect feedback.

## CI/CD
- **Continuous Integration (CI):** frequently integrate code and automatically build/test it.
- **Continuous Delivery:** keep validated changes ready for release; production release may require approval.
- **Continuous Deployment:** automatically release validated changes to production.

## Key practices
- Automation, version control, small changes, peer review, infrastructure as code.
- Continuous testing, monitoring, feedback and blameless incident learning.
- Security integrated throughout the lifecycle (DevSecOps).

## Typical workflow
Developer commit → Git repository → CI build/test/security scan → artifact or container image → registry → deployment → health checks → monitoring → feedback/rollback.

## Deployment strategies
- **Recreate:** stop old version, then start new; can cause downtime.
- **Rolling:** gradually replace instances.
- **Blue-Green:** maintain two environments and switch traffic after validation.
- **Canary:** expose a small percentage of traffic to the new version, then increase gradually.
- **Feature flags:** control feature exposure independently of deployment.

## Remember
DevOps is not just a toolset or a job title. It is a culture supported by automation, shared ownership and measurable feedback.

## Interview check
**What is the main goal of DevOps?** Improve delivery speed and reliability through collaboration, automation, continuous feedback and shared responsibility.
