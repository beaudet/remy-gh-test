/**
 * Protected Files Configuration
 * 
 * This configuration file defines files that should never be modified
 * by automated tools or assistants in this project.
 */

module.exports = {
  // Files that should never be modified
  protectedFiles: [
    // Root README
    'README.md',
    
    // Any README in subdirectories (using glob pattern)
    '**/README.md',
    
    // License file
    'LICENSE'
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
