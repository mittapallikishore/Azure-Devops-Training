# Day 7 - YAML Quality and Test Gates

**Date:** 20 October 2026

## Objective

Improve pipeline quality using YAML validation, reusable templates, static checks, automated tests, and failure gates.

## Tasks Completed

1. Reviewed successful and intentional-failure pipeline configurations.
2. Created and corrected a reusable YAML validation template.
3. Added Node.js setup and dependency installation using npm ci.
4. Added JavaScript syntax validation using node --check.
5. Integrated the existing HTML quality test script.
6. Added a deliberate failure condition to demonstrate pipeline blocking.
7. Configured artifact publishing to run only after successful validation.

## Local Validation Results

* npm ci completed successfully.
* npm test passed all three HTML quality checks.
* node --check server.js completed successfully.
* npm reported zero vulnerabilities.
* JUnit report generation is included in the existing quality test script.

## Pipeline Design

* Success pipeline uses runFailingTest: false.
* Failure pipeline uses runFailingTest: true.
* Artifact publishing is conditional on successful validation.
* Both pipelines are configured for manual execution.

## Pending Verification

* Run the Day 7 success pipeline in Azure DevOps.
* Run the intentional-failure pipeline and verify artifact publishing is skipped.
* Capture pipeline logs and test evidence.
* Verify PR validation and branch policies separately, if configured.

## Outcome

Improved practical understanding of reusable YAML templates, automated quality checks, test execution, and pipeline failure gates.

## Azure DevOps Execution Results



\- Success pipeline executed successfully.

\- Failure pipeline demonstrated the intentional test-gate failure.

\- Automated HTML quality tests validated the website structure.

\- Pipeline artifact publishing was configured to run only after successful validation.

\- The failure demonstration prevented artifact publishing.



\## Evidence



Screenshots captured:

\- Successful pipeline execution.

\- Intentional failure pipeline execution.

\- Automated test results.

\- Pipeline artifact publishing.



\## Completion Status



Day 7 YAML Quality and Test Gates practical implementation and pipeline validation completed.

