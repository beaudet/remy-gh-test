# Protected Files System - Usage Guide

This guide explains how to use the protected files system to prevent modifications to critical project files.

## Installation

To install the protected files system, follow these steps:

1. Install the required dependencies:

```bash
npm install
```

2. Install the Git hooks:

```bash
npm run install-hooks
```

This will install the pre-commit hook that prevents modifications to protected files.

## How It Works

The protected files system consists of several components:

1. **Configuration File** (`.protected-files.config.js`): Defines which files are protected and how to handle modification requests.

2. **Protection Script** (`scripts/protect-files.js`): Checks if a file is protected and prevents modifications.

3. **Git Hook** (`.git-hooks/pre-commit`): Runs the protection script before each commit to prevent protected files from being modified.

4. **Installation Script** (`scripts/install-hooks.js`): Installs the Git hooks and required dependencies.

## Protected Files

The following files are protected by default:

- README.md (root directory)
- Any other README.md files in subdirectories
- LICENSE

## Checking If a File Is Protected

You can check if a file is protected by running:

```bash
npm run check-protected -- path/to/file
```

This will output whether the file is protected or not.

## Adding New Protected Files

To add new protected files, modify the `.protected-files.config.js` file:

```javascript
module.exports = {
  protectedFiles: [
    'README.md',
    '**/README.md',
    'LICENSE',
    // Add new protected files or patterns here
    'CONTRIBUTING.md',
    'docs/CODEOWNERS'
  ],
  // ... rest of the configuration
};
```

## Creating Alternative Documentation

When you need to update documentation that's in a protected file:

1. Create a new file in the `docs/` directory with a descriptive name
2. Reference the original documentation without modifying it
3. Add your new information to the new file

Example:

```bash
# Instead of modifying README.md
touch docs/deployment-guide.md
```

## Troubleshooting

### Hook Not Running

If the pre-commit hook isn't running:

1. Make sure you've installed the hooks: `npm run install-hooks`
2. Check if the hook is executable: `ls -la .git/hooks/pre-commit`
3. Make the hook executable if needed: `chmod +x .git/hooks/pre-commit`

### Bypassing the Hook (Emergency Only)

In emergency situations, you can bypass the hook with:

```bash
git commit --no-verify
```

**Warning:** This should only be used in exceptional circumstances. The protected files policy exists for a reason!

## Best Practices

1. **Never modify protected files** - Create alternative documentation instead
2. **Keep documentation organized** - Use descriptive filenames for new documentation
3. **Reference original documentation** - Link to the original files when appropriate
4. **Update the configuration** - If new critical files are added to the project, update the protected files list
