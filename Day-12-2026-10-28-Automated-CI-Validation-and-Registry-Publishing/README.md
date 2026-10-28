\# Day 12 — Automated CI Validation and Registry Publishing



\*\*Date:\*\* 28 October 2026



\## Objective



Extend the Azure DevOps CI pipeline to validate application changes, run automated tests, build a Docker image, preserve image provenance, and publish the validated image to Azure Container Registry (ACR).



\## Pipeline Stages



1\. \*\*Checkout and Build Validation\*\* — Checks out the repository, installs Node.js dependencies, and validates JavaScript syntax.

2\. \*\*Automated Tests\*\* — Runs application quality tests and publishes JUnit test results.

3\. \*\*Build and Package Docker Image\*\* — Builds the container image and publishes an image archive with build and commit provenance.

4\. \*\*Publish Image to ACR\*\* — Authenticates to ACR and pushes the image using build ID and commit SHA tags.



\## Validation Results



\- Build validation: Passed.

\- Automated tests: Passed — 100%.

\- Docker image build: Passed.

\- Pipeline artifact publication: Passed.

\- ACR image publication: Pending — authentication failed because the configured managed identity could not obtain an access token.



\## Image Traceability



The pipeline tags images using the Azure DevOps build ID and source commit SHA. The image archive and provenance information are published as a pipeline artifact.



\## Security and Controls



\- Branch control is configured to restrict use of the ACR service connection to `main`.

\- ACR publishing must not be considered successful until authentication and image push complete successfully.

\- Credentials and secrets must not be committed to source control.

\- The ACR authentication issue remains open and must be resolved before production use.



\## Conclusion



The CI validation, automated testing, Docker image build, and artifact publication stages are working. Registry publication is not yet complete because the service connection cannot authenticate to ACR.

