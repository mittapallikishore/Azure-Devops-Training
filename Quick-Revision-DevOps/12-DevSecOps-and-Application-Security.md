# 12 – DevSecOps and Application Security

## DevSecOps
DevSecOps integrates security throughout planning, coding, building, testing, release and operations instead of treating security as a final gate.

## Secure SDLC
Threat model → secure design → code review → automated scans → security testing → protected release → runtime monitoring and response.

## OWASP risk areas
Study the OWASP Top 10 and understand access control, misconfiguration, software supply chain, cryptography, injection, insecure design, authentication, integrity, logging/alerting and exception handling.

## Security testing types
- **SAST:** analyzes source code without running the application.
- **DAST:** tests a running application from the outside.
- **SCA:** identifies vulnerable or risky third-party dependencies and licenses.
- **Container scanning:** checks image packages and configuration.
- **IaC scanning:** identifies risky infrastructure definitions.

## Common tools
- SonarQube – code quality and static analysis.
- OWASP ZAP – dynamic application security testing.
- `npm audit` – dependency vulnerability report.
- Trivy – scans images, filesystems and configuration.
- Secret scanners – detect accidentally committed credentials.

## Secure coding
- Validate input on the server.
- Use parameterized SQL queries.
- Enforce authentication and authorization.
- Use secure password hashing.
- Apply safe error handling and security logging.
- Keep dependencies updated.

## Secrets
Never commit plaintext secrets or bake them into Docker images. Use Azure Key Vault, managed identities, external secret integrations or an approved encrypted secret workflow.

## Container and Kubernetes security
Run as non-root, use minimal trusted images, scan and pin images, restrict capabilities, configure resource limits, apply RBAC and network policies, and protect secret access.

## Supply-chain security
Generate an SBOM, preserve build provenance, sign images where appropriate, use immutable image digests and protect build agents and release credentials.

## Pipeline security sequence
Checkout → dependency install → tests → SAST/SCA → build image → image scan → publish approved artifact → controlled deployment.

## Interview check
**SAST vs DAST?** SAST examines code or bytecode without executing the application; DAST tests a running application by sending requests and observing behavior.
