param(
    [string]$ResourceGroup = "azurewebapp1_group",
    [string]$AppName = "day13-deploy-sandbox-20261029",
    [string]$PreviousImage = "day12ci331776.azurecr.io/day12-website@sha256:4463ebf2b60242965c593ddaf04cd3d41ab2af0d7d4663b1824e59a6f8902d61",
    [string]$HealthUrl = "https://day13-deploy-sandbox-20261029.azurewebsites.net/health"
)

$ErrorActionPreference = "Stop"

Write-Host "Starting rollback..."
Write-Host "App Service: $AppName"
Write-Host "Restoring image: $PreviousImage"

az webapp config set `
    --resource-group $ResourceGroup `
    --name $AppName `
    --container-image-name $PreviousImage `
    --output none

if ($LASTEXITCODE -ne 0) {
    throw "Rollback failed while applying the previous image."
}

az webapp restart `
    --resource-group $ResourceGroup `
    --name $AppName

if ($LASTEXITCODE -ne 0) {
    throw "Rollback image was configured, but the restart command failed."
}

Write-Host "Rollback image configured. Checking application health..."

& "$PSScriptRoot\smoke-test.ps1" -HealthUrl $HealthUrl

if ($LASTEXITCODE -ne 0) {
    throw "Rollback was applied, but the health check failed."
}

Write-Host "ROLLBACK VERIFIED: Previous image is configured and health check passed."
