
param(
    [string]$HealthUrl = "https://day13-deploy-sandbox-20261029.azurewebsites.net/health",
    [int]$MaxAttempts = 6,
    [int]$DelaySeconds = 10
)

$ErrorActionPreference = "Stop"

if ($env:SIMULATE_SMOKE_TEST_FAILURE -eq "true") {
    Write-Warning "Simulating a smoke-test failure for rollback validation."
    $HealthUrl = "https://127.0.0.1:1/health"
}

Write-Host "Starting deployment smoke test..."
Write-Host "Health URL: $HealthUrl"

for ($attempt = 1; $attempt -le $MaxAttempts; $attempt++) {
    try {
        $response = Invoke-RestMethod -Uri $HealthUrl -Method Get -TimeoutSec 5

        if ($response.status -eq "healthy") {
            Write-Host "SMOKE TEST PASSED: Application is healthy."
            Write-Host "Response status: $($response.status)"
            exit 0
        }

        Write-Warning "Attempt $attempt returned an unexpected health response."
    }
    catch {
        Write-Warning "Attempt $attempt failed: $($_.Exception.Message)"
    }

    if ($attempt -lt $MaxAttempts) {
        Start-Sleep -Seconds $DelaySeconds
    }
}

Write-Error "SMOKE TEST FAILED: Application did not become healthy."
exit 1
