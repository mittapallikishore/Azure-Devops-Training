\# Day 13 – Final Mini-Project: End-to-End Containerized CI/CD Pipeline



\*\*Date:\*\* 29–30 October 2026  

\*\*Platform:\*\* Azure DevOps, Azure Container Registry (ACR), Azure App Service



\## 1. Objective



Build and validate an end-to-end Azure DevOps pipeline for a containerized application. The pipeline builds the application, runs automated tests, creates and publishes a Docker image, deploys it to Azure App Service, performs health checks, and demonstrates automatic rollback and recovery.



\## 2. Project Structure



```text

Final-Mini-Project/

├── app/

├── evidence/

│   └── image-provenance.txt

├── pipelines/

│   ├── azure-pipelines-seven-stage.yml

│   └── azure-pipelines.yml

├── scripts/

├── acr-config.json

└── health-config.json

```



\## 3. Seven-Stage Pipeline



1\. \*\*Checkout and Build Validation\*\* – Retrieves source code and validates the application.

2\. \*\*Automated Tests\*\* – Runs application tests.

3\. \*\*Build Docker Image\*\* – Builds and tags the container image.

4\. \*\*Publish Image to ACR\*\* – Publishes the image to Azure Container Registry.

5\. \*\*Deploy to Azure App Service\*\* – Deploys the published image to the sandbox application.

6\. \*\*Health Check and Verification\*\* – Checks application availability and blocks successful release when verification fails.

7\. \*\*Rollback and Recovery\*\* – Restores the previous working image and verifies application health.



\## 4. Execution Evidence – Build #405



\*\*Pipeline:\*\* azure-web-app  

\*\*Build ID:\*\* 405  

\*\*Branch:\*\* test/pipeline-failure



\- Docker image `day13-final-app:405` was deployed to Azure App Service.

\- The health-check stage failed, demonstrating the release-blocking path.

\- The rollback stage executed automatically.

\- The previous working image `day12ci331776.azurecr.io/day13-final-app:402` was restored.

\- The first rollback health-check attempt timed out.

\- A subsequent health check returned `{"status":"healthy"}`.

\- The rollback log confirmed: `Rollback successful. Previous application is healthy.`

\- The live `/health` endpoint was also checked in the browser and returned a healthy response.



\## 5. Deployment Target



\*\*Azure App Service:\*\* `day13-deploy-sandbox-20261029`



\*\*Health endpoint:\*\*



http://day13-deploy-sandbox-20261029.azurewebsites.net/health



\*\*Container image repository:\*\* `day12ci331776.azurecr.io/day13-final-app`



\## 6. Evidence to Retain



Capture and retain screenshots or exported logs for:



\- Seven-stage pipeline execution overview.

\- Automated test results.

\- Docker image build and ACR publication.

\- Deployment of image tag 405.

\- Health-check failure.

\- Previous image capture and rollback to image 402.

\- Successful rollback health-check response.

\- Browser verification of the live health endpoint.

\- Image provenance information.



The existing `evidence/image-provenance.txt` file records image provenance information.



\## 7. Final Outcome



The end-to-end containerized CI/CD workflow was implemented and executed. The pipeline demonstrated source validation, automated testing, Docker image creation, registry publishing, deployment, health-check failure handling, automatic rollback, and recovery.



\*\*Final verification:\*\* The previous working image was restored successfully, and the live application health endpoint returned a healthy response.

