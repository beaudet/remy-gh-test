#!/usr/bin/env node

/**
 * Protected Files Enforcement Script
 * 
 * This script checks if a file is protected before allowing modifications.
 * It can be used as a pre-commit hook or integrated into build processes.
 */

const fs = require('fs');
const path = require('path');
const minimatch = require('minimatch');

// Load the protected files configuration
const configPath = path.join(process.cwd(), '.protected-files.config.js');
let config;

try {
  config = require(configPath);
} catch (error) {
  console.error('Error loading protected files configuration:', error.message);
  process.exit(1);
}

/**
 * Check if a file is protected
 * @param {string} filePath - Path to the file to check
 * @returns {boolean} - True if the file is protected, false otherwise
 */
function isProtectedFile(filePath) {
  // Get relative path from project root
  const relativePath = path.relative(process.cwd(), filePath);
  
  // Check if the file matches any of the protected patterns
  return config.protectedFiles.some(pattern => 
    minimatch(relativePath, pattern, { nocase: true })
  );
}

/**
 * Handle a request to modify a protected file
 * @param {string} filePath - Path to the file
 */
function handleProtectedFile(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  
  console.error(`⛔ ERROR: Attempted to modify protected file: ${relativePath}`);
  console.error(config.policy.message);
  
  if (config.policy.onModificationRequest === 'CREATE_ALTERNATIVE') {
    const fileName = path.basename(filePath, path.extname(filePath));
    const alternativePath = path.join(
      process.cwd(),
      config.policy.alternativeLocation,
      `${fileName}-supplement.md`
    );
    
    console.log(`ℹ️ Suggestion: Create documentation at ${path.relative(process.cwd(), alternativePath)}`);
  }
  
  process.exit(1);
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: protect-files <file-path>');
    process.exit(1);
  }
  
  const filePath = path.resolve(args[0]);
  
  if (isProtectedFile(filePath)) {
    handleProtectedFile(filePath);
  } else {
    console.log(`✅ File is not protected: ${path.relative(process.cwd(), filePath)}`);
    process.exit(0);
  }
}

// Run the script
main();
