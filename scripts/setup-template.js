#!/usr/bin/env node

/**
 * Template Setup Script
 * 
 * This script runs when a new repository is created from the template.
 * It sets up the repository with the correct configuration and installs
 * the necessary dependencies.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up your new repository from the remy-ai-planner template...');

// Rename TEMPLATE_README.md to README.md if it exists
if (fs.existsSync('TEMPLATE_README.md')) {
  console.log('📝 Setting up README.md...');
  
  // Backup the original README.md to docs/original-README.md
  if (fs.existsSync('README.md')) {
    console.log('📦 Backing up original README.md to docs/original-README.md...');
    
    // Create docs directory if it doesn't exist
    if (!fs.existsSync('docs')) {
      fs.mkdirSync('docs', { recursive: true });
    }
    
    fs.copyFileSync('README.md', 'docs/original-README.md');
  }
  
  // Replace README.md with TEMPLATE_README.md
  fs.renameSync('TEMPLATE_README.md', 'README.md');
  console.log('✅ README.md has been set up.');
}

// Update package.json with repository details
console.log('📦 Please update your package.json with your project details.');
console.log('   - Update the "name" field');
console.log('   - Update the "description" field');
console.log('   - Update the "repository" field with your repository URL');
console.log('   - Update the "author" field with your name or organization');

// Install dependencies
try {
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully.');
} catch (error) {
  console.error('❌ Error installing dependencies:', error.message);
  console.log('⚠️ Please manually install dependencies: npm install');
}

// Install Git hooks
try {
  console.log('🔗 Installing Git hooks...');
  execSync('npm run install-hooks', { stdio: 'inherit' });
  console.log('✅ Git hooks installed successfully.');
} catch (error) {
  console.error('❌ Error installing Git hooks:', error.message);
  console.log('⚠️ Please manually install Git hooks: npm run install-hooks');
}

console.log('\n🎉 Setup complete! Your repository is ready to use.');
console.log('\nNext steps:');
console.log('1. Update package.json with your project details');
console.log('2. Customize .protected-files.config.js to match your project needs');
console.log('3. Run npm test to verify the protected files system is working');
console.log('\nFor more information, see the documentation in the docs/ directory.');
