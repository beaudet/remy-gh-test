#!/usr/bin/env node

/**
 * Git Hooks Installation Script
 * 
 * This script installs the Git hooks from the .git-hooks directory
 * to the .git/hooks directory, making them active for the repository.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const projectRoot = process.cwd();
const sourceHooksDir = path.join(projectRoot, '.git-hooks');
const gitDir = path.join(projectRoot, '.git');
const targetHooksDir = path.join(gitDir, 'hooks');

// Check if .git directory exists
if (!fs.existsSync(gitDir)) {
  console.error('❌ Error: .git directory not found. Are you in a Git repository?');
  process.exit(1);
}

// Create hooks directory if it doesn't exist
if (!fs.existsSync(targetHooksDir)) {
  console.log('📁 Creating hooks directory...');
  fs.mkdirSync(targetHooksDir, { recursive: true });
}

// Check if source hooks directory exists
if (!fs.existsSync(sourceHooksDir)) {
  console.error('❌ Error: .git-hooks directory not found.');
  process.exit(1);
}

// Get all hooks from the source directory
const hooks = fs.readdirSync(sourceHooksDir);

if (hooks.length === 0) {
  console.log('ℹ️ No hooks found in .git-hooks directory.');
  process.exit(0);
}

// Install each hook
let installedCount = 0;

hooks.forEach(hook => {
  const sourcePath = path.join(sourceHooksDir, hook);
  const targetPath = path.join(targetHooksDir, hook);
  
  // Copy the hook
  fs.copyFileSync(sourcePath, targetPath);
  
  // Make the hook executable
  try {
    execSync(`chmod +x "${targetPath}"`);
    console.log(`✅ Installed hook: ${hook}`);
    installedCount++;
  } catch (error) {
    console.error(`❌ Error making ${hook} executable: ${error.message}`);
  }
});

// Install dependencies
console.log('\n📦 Installing required dependencies...');
try {
  // Install locally instead of globally to avoid permission issues in CI environments
  execSync('npm install minimatch', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully.');
} catch (error) {
  console.error(`❌ Error installing dependencies: ${error.message}`);
  console.log('⚠️ Please manually install minimatch: npm install minimatch');
}

console.log(`\n🎉 Successfully installed ${installedCount} Git hooks!`);
console.log('The protected files policy is now enforced for this repository.');
