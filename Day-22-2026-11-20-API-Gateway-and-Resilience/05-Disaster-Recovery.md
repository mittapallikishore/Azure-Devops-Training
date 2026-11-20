# 05 – Disaster Recovery

## 1. What is Disaster Recovery?

Disaster Recovery (DR) is the planned process of restoring applications, infrastructure, services, and data after a major outage or disruptive event.

It ensures that an organization can recover critical systems within an acceptable period and limit data loss.

Example: If an Azure application hosted in one region becomes unavailable because of a regional outage, the organization may restore or activate its recovery environment in another region.

## 2. Why is Disaster Recovery Required?

- Reduces business downtime.
- Minimizes data loss.
- Protects critical business applications.
- Supports business continuity.
- Helps recover from regional outages and major infrastructure failures.
- Provides a planned response to accidental deletion, corruption, and cyber incidents.
- Defines responsibilities and recovery procedures before an incident occurs.

## 3. When is Disaster Recovery Required?

Possible disaster scenarios include:
- Cloud-region outage.
- Database corruption.
- Ransomware or destructive cyberattack.
- Accidental deletion of critical resources.
- Storage failure.
- Major networking failure.
- Loss of a data center.
- Failed infrastructure or application changes.
- Human error affecting production systems.

Not every application error requires a full DR event. DR is intended for major disruptions that exceed normal operational recovery procedures.

## 4. Where is Disaster Recovery Implemented?

- Primary and secondary cloud regions.
- Secondary data centers.
- Backup storage accounts.
- Recovery databases.
- Recovery AKS clusters.
- Replicated application infrastructure.
- DNS and global traffic-management systems.

A recovery environment may be in a different Azure region or another approved location, depending on business and compliance requirements.

## 5. Important DR Terminology

### RTO – Recovery Time Objective

The maximum acceptable time to restore a service after a disruption.

Example: RTO = 2 hours means the target is to restore the service within two hours.

### RPO – Recovery Point Objective

The maximum acceptable amount of data loss measured in time.

Example: RPO = 15 minutes means the recovery plan aims to limit data loss to the most recent 15 minutes of data.

RTO measures recovery time. RPO measures the acceptable data-loss window.

### Backup

A separate copy of data or configuration used for restoration.

### Replication

Copies data or changes from one system to another.

### Failover

Switching application traffic or operations from the primary environment to a recovery environment.

### Failback

Returning operations to the original or designated primary environment after it has been recovered and validated.

## 6. Disaster Recovery Strategies

### Backup and Restore

Data and configuration are backed up. After a disaster, infrastructure and applications are restored.

Advantages:
- Lower running cost.
- Straightforward for many systems.

Limitations:
- Recovery may take longer.
- Infrastructure must be recreated or restored.
- Recovery depends on backup quality and restoration testing.

### Pilot Light

A minimal set of critical resources is kept ready in the recovery region. Additional infrastructure is created or scaled during recovery.

Advantages:
- Lower cost than a fully running secondary environment.
- Faster than starting entirely from backups.

Limitations:
- Requires automation and scaling.
- Recovery still takes time.

### Warm Standby

A smaller but functional recovery environment is running in the secondary region.

Advantages:
- Faster recovery than backup-only strategies.
- Less startup work during an incident.

Limitations:
- Higher cost.
- May need scaling before handling full production traffic.

### Active/Active

Multiple regions actively serve production traffic.

Advantages:
- Can provide very low recovery time.
- Traffic may continue through another region.

Limitations:
- Highest architectural complexity.
- Higher cost.
- Requires careful data consistency, routing, and conflict handling.

## 7. Azure Multi-Region DR Architecture

Example:

**Primary Region**
- Azure API Management or gateway entry.
- AKS cluster.
- Application services.
- Database.
- Cache.
- Storage.
- Monitoring.

**Recovery Region**
- Recovery gateway configuration or deployment.
- Recovery AKS cluster or deployable infrastructure.
- Replicated or restorable database.
- Accessible container images.
- Recovery storage.
- Secrets, identity, network, and monitoring configuration.

**Traffic Management**
- Azure Front Door or another supported routing mechanism.
- Health-based routing or a documented manual traffic-switch procedure.
- DNS configuration where applicable.

The architecture must be designed for the selected Azure service tiers and regional availability. Do not assume every service automatically fails over or that every APIM tier has identical multi-region capabilities.

## 8. Database Backup and Replication

### Full Backup
A complete copy of the database at a particular point in time.

### Differential Backup
Captures changes made since the last full backup.

### Incremental Backup
Captures changes since the previous backup in the backup chain.

### Transaction Log Backup
Captures database transaction-log changes, where supported, and can support point-in-time recovery.

### Synchronous Replication
The primary waits for the secondary to confirm the replicated write according to the technology's commit behavior. It can reduce data loss but may increase latency and depends on the database platform.

### Asynchronous Replication
The primary does not wait for the secondary to confirm every write. It may reduce latency but can lose recent changes if the primary fails before replication catches up.

Important: Replication is not a replacement for backups. Corruption or malicious changes may also replicate. Maintain protected backups and test restoration.

## 9. Disaster Recovery for API Gateway

API Gateway recovery planning should include:
- API definitions and routes.
- Gateway policies.
- Authentication and authorization configuration.
- Certificates and custom domains.
- Backend service URLs.
- Identity and access permissions.
- Network connectivity.
- Secrets and configuration references.
- Rate-limit and traffic-management policies.
- Monitoring and alerting.

Keep configuration in version control or infrastructure-as-code where appropriate. Store secrets securely rather than committing them to Git.

## 10. Disaster Recovery for AKS

A recovery plan for AKS should include:

### Application Configuration
- Kubernetes manifests.
- Helm charts.
- Deployment and Service definitions.
- ConfigMaps and secret references.
- Ingress and network policies.

### Container Images
- Store versioned images in a registry accessible to the recovery environment.
- Ensure image retention and access permissions.

### Infrastructure
- Cluster configuration.
- Node pools.
- Virtual networks and subnets.
- Identity and role assignments.
- DNS and ingress configuration.
- Storage configuration.

### Application Data
- Database backups and replicas.
- Persistent-volume recovery strategy.
- Message queues and their recovery procedures.
- Required external service configuration.

Infrastructure as Code and version-controlled deployment manifests make recovery more repeatable.

## 11. Example Recovery Process

1. Detect the incident through monitoring or an operational alert.
2. Assess the impact and determine whether DR should be declared.
3. Notify responsible teams and stakeholders.
4. Identify the latest usable backups or replication state.
5. Activate or create recovery infrastructure.
6. Restore or promote databases according to the recovery plan.
7. Deploy application images and configuration.
8. Restore gateway routes, identity, secrets, and networking.
9. Validate health endpoints and critical business transactions.
10. Redirect traffic to the recovery environment.
11. Monitor the recovery environment.
12. Plan and execute failback when the primary environment is safe.

## 12. Example RTO and RPO Targets

These are hypothetical targets for a sample payment application.

| Component | RTO target | RPO target |
|---|---:|---:|
| API Gateway | 30 minutes | Configuration recovery target |
| Application services | 1 hour | Depends on persistent data |
| Payment database | 1 hour | 5 minutes |
| Static content | 2 hours | 24 hours |

Targets must be approved through business-impact analysis and validated by recovery testing. Configuration recovery does not always use the same RPO measurement as transactional data.

## 13. Failover vs Failback

### Failover
The organization switches production operations to the recovery environment because the primary environment is unavailable or unsafe.

### Failback
After the primary environment is restored, data is reconciled or synchronized as required, the environment is validated, and operations are moved back according to an approved plan.

Failback must consider data consistency, transactions performed during the outage, and the possibility of conflicting writes.

## 14. Disaster Recovery Testing

A DR plan must be tested.

Common testing approaches:
- **Tabletop exercise:** Teams discuss how they would respond to a disaster.
- **Backup restoration test:** Restore data and verify its integrity.
- **Component recovery test:** Recover an individual service or database.
- **Simulation:** Simulate a failure without disrupting real production traffic.
- **Failover test:** Switch to a recovery environment under controlled conditions.
- **Full DR exercise:** Test the complete recovery process and business validation.

Record actual recovery times, data recovery points, issues, and improvement actions.

## 15. Azure Services Supporting DR

| Azure service | Purpose |
|---|---|
| Azure Backup | Backup and restore supported workloads |
| Azure Site Recovery | Replication and recovery for supported workloads |
| Azure Storage | Backup and recovery data storage |
| Azure SQL recovery features | Database backup and restore options |
| Azure Front Door | Global traffic routing |
| Azure Monitor | Incident detection and monitoring |
| Azure Kubernetes Service | Recovery application platform |
| Azure Container Registry | Stores application images |

Service-specific recovery features, region support, retention, and pricing should be checked before selecting a design.

## 16. Security Considerations

- Encrypt backups and replicated data.
- Restrict access to recovery resources.
- Use separate permissions for backup administration.
- Protect backups against deletion and ransomware.
- Use managed identities where appropriate.
- Store secrets in a secure secret-management service.
- Audit recovery operations.
- Test recovery access without relying on compromised production credentials.

## 17. Common DR Mistakes

- Assuming replication is the same as backup.
- Never testing restoration.
- Ignoring secrets and certificates.
- Forgetting DNS and network configuration.
- Not preserving container images.
- Choosing RTO and RPO without business approval.
- Failing to document recovery responsibilities.
- Ignoring data consistency during failover and failback.
- Assuming a secondary region is automatically ready for production.

## 18. Real-World Example

An e-commerce application operates in a primary Azure region. A major regional outage makes the application unavailable. The operations team declares a disaster, activates the recovery environment, restores or promotes the database according to the approved plan, deploys the application, validates payment and order processing, and redirects traffic to the recovery region.

Once the primary region is stable, the team reconciles data and performs a controlled failback.

## 19. Key Takeaway

Disaster Recovery is a planned and tested process for restoring applications, infrastructure, and data after major disruptions while meeting defined RTO and RPO objectives.
