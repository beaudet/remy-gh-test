# Git Hooks for Protected Files

This directory contains Git hooks that enforce the protected files policy.

## Hooks

### pre-commit

The pre-commit hook runs before each commit and checks if any of the files being committed are protected. If a protected file is found, the commit is aborted.

## Installation

These hooks are not active by default. They need to be installed to the `.git/hooks` directory to be active. You can install them using the provided script:

```bash
npm run install-hooks
```

This will copy the hooks to the `.git/hooks` directory and make them executable.

## How It Works

1. When you run `git commit`, Git executes the pre-commit hook
2. The hook gets a list of all files being committed
3. For each file, it runs the `scripts/protect-files.js` script
4. If any of the files are protected, the commit is aborted with an error message
5. If none of the files are protected, the commit proceeds normally

## Bypassing Hooks (Emergency Only)

In emergency situations, you can bypass the hooks with:

```bash
git commit --no-verify
```

**Warning:** This should only be used in exceptional circumstances. The protected files policy exists for a reason!

## Related Documentation

For more information about the protected files system, see the documentation in the `docs/` directory:

- [Protected Files Policy](../docs/protected-files-policy.md)
- [Protected Files Usage Guide](../docs/protected-files-usage.md)
- [Protected Files Diagram](../docs/protected-files-diagram.md)
- [Protected Files Documentation Index](../docs/protected-files-index.md)
