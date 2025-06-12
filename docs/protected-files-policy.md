# Protected Files Policy

## Overview

This document outlines our policy regarding protected files in the project that should never be modified directly.

## Protected Files

The following files are protected and should never be modified:

- README.md (root directory)
- Any other README.md files in subdirectories
- LICENSE

These files contain critical project information and licensing details that must remain unchanged.

## Configuration

The policy is enforced through the `.protected-files.config.js` file in the root directory. This configuration file defines:

1. Which files are protected
2. How to handle requests to modify protected files
3. Where to create alternative documentation

```javascript
// Excerpt from .protected-files.config.js
module.exports = {
  protectedFiles: [
    'README.md',
    '**/README.md',
    'LICENSE'
  ],
  policy: {
    onModificationRequest: 'CREATE_ALTERNATIVE',
    alternativeLocation: 'docs/',
    message: 'This file is protected and cannot be modified. Please create supplementary documentation in the docs/ directory instead.'
  }
};
```

## Documentation Approach

When documentation needs to be updated:

1. **DO NOT** modify any README.md files or LICENSE
2. Create new documentation files in the docs/ directory
3. Reference existing documentation without modifying it

## Example

If you need to document new information about the SwaggerHub evaluation:

❌ **Don't:** Modify README.md  
✅ **Do:** Create a new file like `docs/swaggerhub-evaluation-results.md`

## Implementation

This policy is implemented through:

1. The `.protected-files.config.js` configuration file
2. Documentation guidelines in this document
3. System instructions for any automated tools or assistants

## Benefits

This approach ensures:

- Critical project information remains stable and unchanged
- Documentation history is preserved
- Supplementary information can be added without risk to core documentation
- Clear separation between original project documentation and additional information
