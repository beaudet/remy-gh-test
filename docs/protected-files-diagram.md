# Protected Files System - Visual Diagram

This document provides a visual representation of the protected files system architecture and workflow.

## System Architecture

```mermaid
graph TD
    A[Developer] -->|Modifies files| B[Git]
    B -->|Pre-commit| C[.git-hooks/pre-commit]
    C -->|Checks files| D[scripts/protect-files.js]
    D -->|Loads config| E[.protected-files.config.js]
    
    E -->|Defines| F[Protected Files]
    F -->|Includes| G[README.md]
    F -->|Includes| H[**/README.md]
    F -->|Includes| I[LICENSE]
    
    D -->|If protected| J[Reject Commit]
    D -->|If not protected| K[Allow Commit]
    
    J -->|Suggests| L[Create Alternative Doc]
    L -->|In| M[docs/ directory]
    
    A -->|Installs hooks| N[scripts/install-hooks.js]
    N -->|Copies to| O[.git/hooks]
    N -->|Installs| P[Dependencies]
```

## Workflow

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as Git
    participant Hook as Pre-commit Hook
    participant Protect as protect-files.js
    participant Config as .protected-files.config.js
    
    Dev->>Git: git commit
    Git->>Hook: Trigger pre-commit
    Hook->>Protect: Check modified files
    Protect->>Config: Load protected files list
    Config-->>Protect: Return protected files patterns
    
    alt File is protected
        Protect-->>Hook: Reject (exit code 1)
        Hook-->>Git: Abort commit
        Git-->>Dev: Show error message
        Dev->>Dev: Create alternative doc in docs/
    else File is not protected
        Protect-->>Hook: Allow (exit code 0)
        Hook-->>Git: Continue commit
        Git-->>Dev: Commit successful
    end
```

## Installation Process

```mermaid
flowchart TD
    A[Start] --> B[npm install]
    B --> C[npm run install-hooks]
    C --> D[scripts/install-hooks.js]
    D --> E[Copy hooks to .git/hooks]
    D --> F[Make hooks executable]
    D --> G[Install dependencies]
    G --> H[minimatch]
    E --> I[End: Protected Files System Active]
    F --> I
    H --> I
```

## Documentation Structure

```mermaid
graph TD
    A[Protected Files Documentation] --> B[protected-files-policy.md]
    A --> C[protected-files-usage.md]
    A --> D[protected-files-index.md]
    A --> E[protected-files-diagram.md]
    A --> F[swaggerhub-evaluation-results.md]
    
    B -->|Explains| G[Policy Overview]
    C -->|Provides| H[Usage Instructions]
    D -->|Lists| I[All Documentation]
    E -->|Shows| J[Visual Diagrams]
    F -->|Demonstrates| K[Example Alternative Doc]
```

## Testing Process

```mermaid
flowchart TD
    A[Start Test] --> B[npm test]
    B --> C[scripts/test-protection.js]
    
    C --> D{Test 1: Check Protected File}
    D -->|Should Fail| E[Verify Error]
    
    C --> F{Test 2: Check Unprotected File}
    F -->|Should Pass| G[Verify Success]
    
    C --> H{Test 3: Commit Protected File}
    H -->|Should Fail| I[Verify Hook Blocks]
    
    C --> J{Test 4: Commit Unprotected File}
    J -->|Should Pass| K[Verify Hook Allows]
    
    E --> L[All Tests Passed?]
    G --> L
    I --> L
    K --> L
    
    L -->|Yes| M[System Working Correctly]
    L -->|No| N[Fix Issues]
    N --> A
