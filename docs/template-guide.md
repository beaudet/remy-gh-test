# Template Guide

This document provides guidance on using the remy-ai-planner-template as a GitHub template and customizing it for your own projects.

## Creating a Repository from the Template

1. Navigate to the [remy-ai-planner-template](https://github.com/OWNER/remy-ai-planner-template) repository on GitHub
2. Click the "Use this template" button
3. Enter a name for your new repository (e.g., "remy-gh-test")
4. Choose whether to make the repository public or private
5. Click "Create repository from template"

## Post-Creation Setup

After creating your repository from the template, follow these steps:

1. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   cd YOUR-REPOSITORY
   ```

2. The setup script will automatically run when you first install dependencies:
   ```bash
   npm install
   ```

   This script will:
   - Replace the README.md with the template-specific version
   - Prompt you to update package.json with your project details
   - Install Git hooks to enforce the protected files policy

3. Update your package.json file with your project details:
   - Update the "name" field
   - Update the "description" field
   - Update the "repository" URL
   - Update the "author" field

4. Verify the protected files system is working:
   ```bash
   npm test
   ```

## Customizing Protected Files

Edit the `.protected-files.config.js` file to customize which files are protected and how modification requests are handled:

```javascript
module.exports = {
  // Files that should never be modified
  protectedFiles: [
    'README.md',
    '**/README.md',
    'LICENSE',
    // Add your own protected files here
    'CONTRIBUTING.md',
    'CODE_OF_CONDUCT.md'
  ],
  
  // Policy for handling protected files
  policy: {
    // What to do when a request to modify a protected file is received
    onModificationRequest: 'CREATE_ALTERNATIVE',
    
    // Where to create alternative documentation
    alternativeLocation: 'docs/',
    
    // Message to display when a protected file modification is attempted
    message: 'This file is protected and cannot be modified. Please create supplementary documentation in the docs/ directory instead.'
  }
};
```

## Adding Your Own Protected Files

You may want to add your own files to the protected list. Here are some common files you might want to protect:

- `CONTRIBUTING.md`: Guidelines for contributing to the project
- `CODE_OF_CONDUCT.md`: Code of conduct for project participants
- `SECURITY.md`: Security policy for the project
- `CHANGELOG.md`: Record of changes to the project
- Configuration files that should not be modified directly

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

## Example: Creating a Project from the Template

Here's an example of creating a project called "remy-gh-test" from the template:

1. Create a new repository from the template on GitHub, naming it "remy-gh-test"

2. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/remy-gh-test.git
   cd remy-gh-test
   ```

3. Install dependencies and run the setup script:
   ```bash
   npm install
   ```

4. Update package.json:
   ```json
   {
     "name": "remy-gh-test",
     "description": "A test project created from the remy-ai-planner-template",
     "repository": {
       "type": "git",
       "url": "git+https://github.com/YOUR-USERNAME/remy-gh-test.git"
     },
     "author": "Your Name"
   }
   ```

5. Test the protected files system:
   ```bash
   npm test
   ```

6. Start using the project with the protected files system in place!

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
