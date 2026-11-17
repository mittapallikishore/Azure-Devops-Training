# 14 – Final Revision and Interview Preparation

## End-to-end DevOps workflow
Plan → Code → Git → CI build → automated tests → security scans → Docker image → ACR → infrastructure provisioning → deployment to App Service/AKS → health checks → monitoring → feedback and rollback.

For GitOps-based AKS delivery: CI publishes an immutable image, updates the GitOps configuration repository, and Argo CD reconciles the cluster.

## Technology map
| Area | Tools/technology |
|---|---|
| Source control | Git, GitHub |
| Operating system | Linux, Bash |
| Application | HTML, CSS, JavaScript, Node.js, Express |
| Database | PostgreSQL |
| CI/CD | Azure DevOps Pipelines |
| Containers | Docker, Docker Compose |
| Registry | Azure Container Registry |
| Cloud | Microsoft Azure |
| Orchestration | Kubernetes, AKS, Helm |
| IaC/configuration | Terraform, Ansible |
| Monitoring | Prometheus, Grafana, Azure Monitor |
| Security | OWASP, SonarQube, Trivy |
| GitOps | Argo CD |

## High-value comparisons
- Git vs GitHub: version control vs hosting/collaboration platform.
- Image vs container: template vs running instance.
- Docker vs Kubernetes: container build/runtime tooling vs orchestration.
- Terraform vs Ansible: infrastructure provisioning vs configuration management.
- Metrics vs logs vs traces: measurements vs events vs request journeys.
- SAST vs DAST: static code analysis vs testing a running application.
- CI vs CD: integration/validation vs delivery/deployment.
- Blue-Green vs Canary: environment switch vs gradual traffic exposure.

## Troubleshooting method
1. Identify user impact and scope.
2. Check recent changes and deployment history.
3. Inspect pipeline, platform and application logs.
4. Check health, dependencies, network and resource usage.
5. Form a hypothesis and test it safely.
6. Mitigate or roll back.
7. Validate recovery and communicate.
8. Record root cause and preventive actions.

## Interview project explanation framework
Explain:
1. What the application does and its architecture.
2. How code is version-controlled and reviewed.
3. How CI builds, tests and scans it.
4. How Docker packages the application.
5. How the image is stored in ACR.
6. How Azure infrastructure is provisioned.
7. How the application is deployed and validated.
8. How monitoring, security and rollback work.

Be accurate about what you personally implemented, what you tested and what you studied.

## Final self-check
- Can I explain the complete delivery workflow without notes?
- Can I create a branch, commit and open a PR?
- Can I build and troubleshoot a Docker container?
- Can I explain a YAML CI/CD pipeline?
- Can I explain Kubernetes workloads, networking and probes?
- Can I describe Terraform state and Ansible idempotency?
- Can I explain security scans and secret management?
- Can I describe GitOps reconciliation and deployment strategies?
- Can I troubleshoot a failed deployment systematically?

## 20 quick interview prompts
1. What is DevOps?
2. What is CI/CD?
3. What is a Git merge conflict?
4. What is a pipeline agent?
5. What is an artifact?
6. What is a Docker image?
7. What is a Docker volume?
8. What is Kubernetes?
9. What is a Pod?
10. What is a Deployment?
11. What is a Service?
12. What is an Ingress?
13. What is Terraform state?
14. What is Ansible idempotency?
15. What are metrics, logs and traces?
16. What are SLI, SLO and SLA?
17. What is DevSecOps?
18. What is an SBOM?
19. What is GitOps?
20. How do you roll back a faulty release?

## Final reminder
Practise explaining concepts aloud and run commands only in a safe lab. Review permissions, target environments, costs and destructive effects before changing cloud infrastructure.
