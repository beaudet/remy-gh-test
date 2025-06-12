# Protected Files Documentation Index

This index provides links to all documentation related to the protected files policy.

## Core Documentation

- [Protected Files Policy](./protected-files-policy.md) - Overview of the policy and its implementation
- [Protected Files Usage Guide](./protected-files-usage.md) - How to use the protected files system
- [Protected Files Diagram](./protected-files-diagram.md) - Visual representation of the system architecture and workflow
- [SwaggerHub Evaluation Results](./swaggerhub-evaluation-results.md) - Example of supplementary documentation
- [Template Guide](./template-guide.md) - Guide for using this project as a GitHub template

## Implementation Files

- [.protected-files.config.js](../.protected-files.config.js) - Configuration file defining protected files
- [scripts/protect-files.js](../scripts/protect-files.js) - Script to check if a file is protected
- [scripts/install-hooks.js](../scripts/install-hooks.js) - Script to install Git hooks
- [scripts/test-protection.js](../scripts/test-protection.js) - Script to test the protected files system
- [scripts/setup-template.js](../scripts/setup-template.js) - Script to set up a new repository from the template
- [.git-hooks/pre-commit](../.git-hooks/pre-commit) - Git hook to prevent modifications to protected files
- [TEMPLATE_README.md](../TEMPLATE_README.md) - Template-specific README that replaces the main README in new repositories

## GitHub Template Configuration

- [.github/template.yml](../.github/template.yml) - GitHub template configuration
- [.github/workflows/template-test.yml](../.github/workflows/template-test.yml) - GitHub Actions workflow to test the template

## How to Use This Documentation

1. Start with the [Protected Files Policy](./protected-files-policy.md) to understand the overall approach
2. Review the [Protected Files Diagram](./protected-files-diagram.md) for a visual representation of the system
3. Read the [Protected Files Usage Guide](./protected-files-usage.md) for practical instructions
4. If you're using this project as a template, read the [Template Guide](./template-guide.md)
5. Use the [SwaggerHub Evaluation Results](./swaggerhub-evaluation-results.md) as an example of how to create supplementary documentation

## Quick Start

To install the protected files system:

```bash
# Install dependencies
npm install

# Install Git hooks
npm run install-hooks
```

To check if a file is protected:

```bash
npm run check-protected -- path/to/file
```

To test the protected files system:

```bash
npm test
# or
npm run test:protected-files
```

## Using as a GitHub Template

To use this project as a GitHub template:

1. Navigate to the repository on GitHub
2. Click the "Use this template" button
3. Follow the instructions in the [Template Guide](./template-guide.md)

## Best Practices

1. **Never modify protected files** - Create alternative documentation instead
2. **Keep documentation organized** - Use descriptive filenames for new documentation
3. **Reference original documentation** - Link to the original files when appropriate
4. **Update the configuration** - If new critical files are added to the project, update the protected files list
