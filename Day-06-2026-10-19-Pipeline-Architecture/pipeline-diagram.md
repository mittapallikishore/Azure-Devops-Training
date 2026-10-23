
# Day 6 — Pipeline Architecture Diagram

## Pipeline Flow

```text
Developer commits changes
          |
          v
   Repository Checkout
     (Clean Checkout)
          |
          v
 Validate Project Folder
          |
          v
 Create result.txt Artifact
          |
          v
 Publish Day6-Validation
          |
          v
     Pipeline Result
   Success or Failure
```

## Stage Explanation

1. **Checkout:** Gets a clean copy of the source repository.
2. **Validation:** Checks whether the Day 4 project folder exists.
3. **Artifact creation:** Creates a readable `result.txt` file.
4. **Artifact publication:** Publishes the file as `Day6-Validation`.
5. **Result:** The run succeeds if all steps pass; otherwise, it fails.
