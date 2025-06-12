# Protected Files Scripts

This directory contains scripts related to the protected files system.

## Scripts

### protect-files.js

This script checks if a file is protected based on the patterns defined in `.protected-files.config.js`. It is used by the Git pre-commit hook to prevent modifications to protected files.

Usage:
```bash
node scripts/protect-files.js <file-path>
# or
npm run check-protected -- <file-path>
```

### install-hooks.js

This script installs the Git hooks from the `.git-hooks` directory to the `.git/hooks` directory, making them active for the repository. It also installs the required dependencies.

Usage:
```bash
node scripts/install-hooks.js
# or
npm run install-hooks
```

### test-protection.js

This script tests the protected files system by attempting to modify protected and unprotected files and verifying that the protection mechanism works correctly.

Usage:
```bash
node scripts/test-protection.js
# or
npm test
# or
npm run test:protected-files
```

## How These Scripts Work Together

1. `install-hooks.js` sets up the Git hooks that will run before each commit
2. When a commit is made, the pre-commit hook runs `protect-files.js` on each modified file
3. `protect-files.js` checks if the file is protected and prevents the commit if it is
4. `test-protection.js` can be used to verify that this process works correctly

## Dependencies

These scripts require the following dependencies:

- Node.js (>= 14.0.0)
- minimatch (for pattern matching)

## Related Documentation

For more information about the protected files system, see the documentation in the `docs/` directory:

- [Protected Files Policy](../docs/protected-files-policy.md)
- [Protected Files Usage Guide](../docs/protected-files-usage.md)
- [Protected Files Diagram](../docs/protected-files-diagram.md)
- [Protected Files Documentation Index](../docs/protected-files-index.md)
