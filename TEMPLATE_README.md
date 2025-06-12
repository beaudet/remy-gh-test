# Protected Files System

This project was created from the [remy-ai-planner-template](https://github.com/OWNER/remy-ai-planner-template), which provides a protected files system to prevent modifications to critical project files.

## Features

- Prevents modifications to critical files (README.md, LICENSE, etc.)
- Uses Git hooks to enforce the protection
- Configurable through .protected-files.config.js

## Getting Started

1. Update the package.json file with your project details:
   ```bash
   # Edit package.json and update:
   # - name
   # - description
   # - repository URL
   # - author
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Git hooks:
   ```bash
   npm run install-hooks
   ```

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
    'LICENSE'
    // Add your own protected files here
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

## How It Works

The protected files system consists of several components:

1. **Configuration File** (`.protected-files.config.js`): Defines which files are protected and how to handle modification requests.

2. **Protection Script** (`scripts/protect-files.js`): Checks if a file is protected and prevents modifications.

3. **Git Hook** (`.git-hooks/pre-commit`): Runs the protection script before each commit to prevent protected files from being modified.

4. **Installation Script** (`scripts/install-hooks.js`): Installs the Git hooks and required dependencies.

## Documentation

See the [docs](./docs) directory for detailed documentation on the protected files system:

- [Protected Files Policy](./docs/protected-files-policy.md)
- [Protected Files Usage Guide](./docs/protected-files-usage.md)
- [Protected Files Diagram](./docs/protected-files-diagram.md)
- [Protected Files Documentation Index](./docs/protected-files-index.md)

## License

This project is licensed under the GNU Lesser General Public License v2.1 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original template created by the National Gallery of Art
- Based on the remy-ai-planner-template
