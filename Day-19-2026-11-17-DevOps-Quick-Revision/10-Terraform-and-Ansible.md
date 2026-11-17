# 10 – Terraform and Ansible

## Infrastructure as Code
IaC defines infrastructure through version-controlled files so environments can be reviewed, repeated and automated.

## Terraform
Terraform is declarative: describe desired resources and Terraform calculates changes.

Workflow:
1. `terraform init` – initialize providers/modules/backend.
2. `terraform fmt` – format configuration.
3. `terraform validate` – validate configuration.
4. `terraform plan` – preview changes.
5. `terraform apply` – apply approved changes.
6. State – map Terraform resources to real infrastructure.

Useful commands:
```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
terraform state list
terraform output
```

## Terraform concepts
- Provider – API integration, such as AzureRM.
- Resource – infrastructure managed by Terraform.
- Data source – reads existing information.
- Variable/output – parameterize and expose values.
- Module – reusable configuration.
- State – resource mapping and metadata.
- Backend – stores state; remote state supports collaboration.
- Drift – actual infrastructure differs from declared configuration.

Protect state: it can contain sensitive values. Use secure remote storage, access controls, encryption and locking where supported.

## Ansible
Ansible is commonly agentless and connects to managed hosts using SSH or WinRM.

Key concepts:
- Inventory – target hosts/groups.
- Playbook – YAML automation definition.
- Task – action to perform.
- Module – reusable operation.
- Handler – runs when notified.
- Role – reusable structure.
- Facts – gathered host information.
- Ansible Vault – encrypts sensitive values.

## Example playbook
```yaml
- name: Configure web server
  hosts: webservers
  become: true
  tasks:
    - name: Install nginx
      ansible.builtin.package:
        name: nginx
        state: present
    - name: Ensure nginx is running
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: true
```

## Terraform vs Ansible
Terraform primarily provisions and manages infrastructure resources. Ansible primarily configures systems and orchestrates operational tasks. They can be used together.

## Safety
Always review Terraform plans, protect state and secrets, test playbooks in a safe environment and avoid broad destructive changes.

## Interview check
**What is idempotency?** Repeating an automation task with the same desired inputs should leave the system in the same desired state rather than repeatedly changing it.
