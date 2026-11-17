# 09 – Kubernetes and AKS

## Architecture
- Control plane: API Server, etcd, Scheduler, Controller Manager.
- Worker node: kubelet, container runtime and networking components.
- AKS is Azure's managed Kubernetes service.

## Main objects
- **Pod:** smallest deployable unit; contains one or more containers.
- **Deployment:** manages ReplicaSets and desired pod replicas.
- **Service:** stable network endpoint for pods.
- **Ingress:** HTTP(S) routing into cluster services.
- **ConfigMap:** non-sensitive configuration.
- **Secret:** sensitive configuration object; protect it with encryption, RBAC and suitable secret integration.
- **Namespace:** logical resource boundary.
- **PV/PVC:** persistent storage abstraction and request.
- **Helm:** Kubernetes package manager.

## Service types
- ClusterIP – internal cluster access.
- NodePort – exposes a port on each node.
- LoadBalancer – provisions/exposes an external load balancer where supported.

## Deployment example
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: task-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: task-app
  template:
    metadata:
      labels:
        app: task-app
    spec:
      containers:
      - name: task-app
        image: example.azurecr.io/task-app:v1
        ports:
        - containerPort: 3000
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
```

## Essential commands
```bash
kubectl get nodes
kubectl get pods -A
kubectl get deploy,svc
kubectl describe pod <pod>
kubectl logs <pod>
kubectl logs <pod> --previous
kubectl apply -f deployment.yaml
kubectl rollout status deployment/task-app
kubectl rollout history deployment/task-app
kubectl rollout undo deployment/task-app
kubectl get events --sort-by=.metadata.creationTimestamp
```

## Health probes
- Startup probe gives a slow-starting app time to initialize.
- Liveness probe detects a container that should be restarted.
- Readiness probe determines whether it should receive traffic.

## Common failures
- `Pending` – scheduling/resources/constraints.
- `ImagePullBackOff` – image or registry authorization.
- `CrashLoopBackOff` – process repeatedly exits.
- `OOMKilled` – memory limit exceeded.
- `Running` does not necessarily mean application is ready; inspect readiness and health.

## Security
Use RBAC, least privilege, network policies, resource requests/limits, non-root containers, image scanning and controlled secret access.

## Interview check
**Readiness vs liveness?** Readiness controls traffic eligibility; liveness determines whether Kubernetes should restart the container.
