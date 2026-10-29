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

## Pipeline Validation and Sandbox Publication



\### Pipeline Stages

1\. \*\*Build Validation:\*\* Checks out the source code, installs dependencies, and validates the application.

2\. \*\*Automated Tests:\*\* Runs automated tests and publishes JUnit test results.

3\. \*\*Image Build:\*\* Builds a Docker image and tags it using the Azure DevOps build ID and source commit SHA.

4\. \*\*Sandbox Publication:\*\* Downloads the image artifact, loads the image, and validates its tags without pushing to an external registry.



\### Failure-Gate Validation

A deliberate test failure was triggered during Azure DevOps run #234. The automated test stage failed, and the image build and publication stages were skipped. This verified that failed tests block downstream image processing.



\### Registry Status

The sandbox workflow validates the image artifact and its tags locally. Actual image publication to Azure Container Registry (ACR) remains pending because registry authentication has not been configured successfully.



\### Security

The sandbox workflow does not require registry credentials. No registry secrets are embedded in the image or printed in pipeline logs.



\### Result

The pipeline is configured to validate code, execute automated tests, build a traceable container image, and prevent publication steps from proceeding when prerequisite stages fail.





\## Conclusion



The CI validation, automated testing, Docker image build, and artifact publication stages are working. Registry publication is not yet complete because the service connection cannot authenticate to ACR.


## Validation Results and Evidence

### Successful CI and Image Publication
- The Azure DevOps pipeline validates the application and runs automated quality tests.
- A successful run builds and publishes the Docker image to Azure Container Registry (ACR).
- Registry: `day12ci331776.azurecr.io`
- Repository: `day12-website`
- Verified image tags: `242`, `243`, and source commit SHA `aedaba88f1a0cdafec6383a5e03754482be0da2e`.

### Image Provenance
- ACR manifest metadata was checked to verify image digests and creation timestamps.
- Image tag `243` and the source commit SHA resolve to the same digest: `sha256:01f37f378dea6898f605c9de5aac4b0ef9d6f6498683b74eb46944ddb5d53416`.
- This provides evidence that the image can be traced to its source commit.

### Failure-Gate Validation
- The test script supports a deliberate failure using `DAY12_FORCE_TEST_FAILURE=true`.
- A local test confirmed the failure path by returning exit code `1`.
- An Azure DevOps failure run was performed to validate that unsuccessful tests block subsequent image stages. Confirm the run shows `AutomatedTests` failed and `ImageBuild` and `ImagePublication` skipped before marking this gate fully verified.

### Security
- Registry authentication uses the configured Azure DevOps service connection `sc-day12-acr`.
- Credentials should remain in secure service connections or secret variables and must not be printed in logs.

