# Task 3 – Azure DevOps Pipeline Permission Audit

## 1. Objective

Audit manual pipeline queue permissions for five Azure DevOps build definitions without deleting pipelines, YAML files, repositories, artifacts, or historical runs.

## 2. Environment

- Organization: `mittapallikishore`
- Project: `azure-web-app`
- Project ID: `12c50bdd-148f-4752-92f8-41170fcc40a3`
- Security namespace: `33344d9c-fc72-4d6f-aba5-fa317101a7e9`
- Permission audited: `Queue builds`
- Permission bit: `128`
- Pipeline IDs: `23, 24, 27, 29, 30`

## 3. Why Queue builds permission matters

The Queue builds permission controls whether an identity can manually queue a build pipeline.

A pipeline can remain present in Azure DevOps while selected identities are denied permission to queue it.

The objective was to restrict manual queueing while preserving the pipeline definitions and their history.

## 4. Identities checked

The following identities were checked:

1. Contributors
2. Build Administrators
3. Project Administrators
4. The individual Azure DevOps account used for this audit

Inheritance was disabled for the five pipeline security entries, and Queue builds was set to Deny for the four selected identities.

## 5. Group permission verification

The Azure DevOps CLI permission-show operation was used with the Build security namespace, each identity descriptor, and a pipeline-specific token.

Pipeline token format:

`<Project-ID>/<Pipeline-ID>`

The three group identities were checked against all five pipeline IDs.

**Recorded result: 15/15 group checks passed.**

## 6. Individual account verification

The first lookup used an email address that Azure DevOps could not resolve.

The Azure DevOps user list was then inspected to identify the registered account and retrieve its identity descriptor.

The individual account was checked against all five pipeline IDs.

| Pipeline ID | Queue builds | Result |
|---|---|---|
| 23 | Deny | PASS |
| 24 | Deny | PASS |
| 27 | Deny | PASS |
| 29 | Deny | PASS |
| 30 | Deny | PASS |

**Recorded result: 5/5 individual checks passed.**

## 7. Combined result

| Audit category | Checks passed |
|---|---:|
| Contributors | 5/5 |
| Build Administrators | 5/5 |
| Project Administrators | 5/5 |
| Individual account | 5/5 |
| Total | 20/20 |

## 8. Interpretation

All 20 checks for the four selected identities returned an effective Queue builds permission of Deny.

This confirms the permission result for those selected identities and pipeline definitions. It is not proof that every possible organization identity, service account, or other user has been audited.

## 9. Resources preserved

The audit was intended to preserve:

- Pipeline definitions.
- YAML files.
- Repository contents.
- Published artifacts.
- Existing run history.

No pipeline deletion was part of this work.

## 10. Validation outcome

**Manual queue permission audit: PASS for all four selected identities across all five pipelines.**

The separate YAML automatic-trigger work is documented in the next task.
