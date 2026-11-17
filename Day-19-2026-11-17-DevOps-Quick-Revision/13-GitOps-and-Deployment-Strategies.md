# 13 – GitOps and Deployment Strategies

## GitOps fundamentals
GitOps uses Git as the source of truth for declarative infrastructure and application configuration. A controller compares the desired state in Git with the actual cluster state and reconciles differences.

Principles:
- Declarative desired state.
- Versioned and reviewed configuration.
- Automated pull-based reconciliation.
- Continuous drift detection and correction.

## CI/CD and GitOps together
1. Developer commits application code.
2. CI tests and scans the code.
3. CI builds and pushes a versioned image to ACR.
4. A configuration repository is updated with the new image tag/digest.
5. A pull request is reviewed and merged.
6. Argo CD detects the Git change.
7. Argo CD reconciles AKS with the declared configuration.
8. Monitoring validates health; a Git revert can restore the previous desired version.

CI builds and validates artifacts; GitOps controls Kubernetes deployment state.

## Argo CD
Argo CD is a GitOps continuous delivery controller for Kubernetes.

Key components include API server/UI, repository server and application controller; Redis supports caching and Dex can support identity integration depending on configuration.

An Argo CD Application describes:
- Source repository, revision and path/chart.
- Destination cluster and namespace.
- Sync policy and options.

Statuses:
- Sync: Synced, OutOfSync, Unknown.
- Health: Healthy, Progressing, Degraded, Missing, Suspended.

Auto-sync applies Git changes automatically. `prune` removes resources no longer declared in Git. `selfHeal` corrects live drift. Enable these only with clear ownership and review controls.

## Illustrative Application manifest
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: task-management
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/example/task-management-gitops.git
    targetRevision: main
    path: apps/task-management/overlays/dev
  destination:
    server: https://kubernetes.default.svc
    namespace: task-management
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```
Replace the example repository and path with real values in an actual setup.

## GitOps repository structure
```text
task-management-app/
  src/
  Dockerfile
  package.json
  azure-pipelines.yml

task-management-gitops/
  apps/
    task-management/
      base/
        deployment.yaml
        service.yaml
      overlays/
        dev/
        staging/
        production/
  argocd/
    applications/
```

## Helm and Kustomize
- Helm packages Kubernetes resources into charts with templates and values.
- Kustomize overlays customize base manifests for environments.
- Argo CD can render Helm charts or Kustomize configurations from Git.
- Avoid manually managing the same Argo CD-owned resources with a competing deployment process.

## Deployment strategies
| Strategy | How it works | Main trade-off |
|---|---|---|
| Recreate | Stop old version, start new | Downtime possible |
| Rolling | Replace instances gradually | Mixed versions can coexist temporarily |
| Blue-Green | Switch traffic between two environments | Extra capacity/cost |
| Canary | Gradually route traffic to new version | Requires traffic control and analysis |
| A/B | Route user segments to different experiences | Needs targeting and measurement |
| Shadow | Mirror traffic to new version without serving its responses | Extra load; protect data and side effects |

Feature flags control feature exposure and can be combined with deployment strategies; they are not themselves a deployment mechanism.

## Kubernetes rolling update
`maxSurge` controls how many extra pods may be created above the desired replica count. `maxUnavailable` controls how many pods may be unavailable during an update.

Rollback:
```bash
kubectl rollout status deployment/task-app
kubectl rollout history deployment/task-app
kubectl rollout undo deployment/task-app
```

For GitOps-managed resources, prefer reverting the configuration commit and letting Argo CD reconcile. Argo CD rollback behavior has constraints when automated sync is enabled; Git remains the source of truth.

## Database migration safety
Use backward-compatible expand-and-contract migrations: add compatible schema first, deploy code that supports old and new forms, migrate data, then remove obsolete schema only after old code is gone.

## Security
Do not commit plaintext secrets. Use an approved integration such as External Secrets Operator with Key Vault, SOPS or Sealed Secrets. Restrict repository credentials, Argo CD RBAC, destinations and namespaces.

## Interview check
**Blue-Green vs Canary?** Blue-Green switches traffic from one complete environment to another; Canary gradually exposes a subset of traffic to the new version and expands after validation.
