#!/usr/bin/env node

/**
 * HUSKY HOOK: Build Verification Check
 *
 * PURPOSE: Ensures code builds successfully before allowing commits
 *
 * WHEN IT RUNS: During git commit (pre-commit hook)
 *
 * WHAT IT DOES:
 * - Executes 'npm run build' command
 * - Validates that the build process completes without errors
 * - Prevents commits if build fails
 *
 * WHY IT'S IMPORTANT:
 * - Catches build-breaking changes before they reach the repository
 * - Ensures all committed code is in a buildable state
 * - Prevents broken deployments and CI/CD pipeline failures
 *
 * ON SUCCESS: Exits silently, allows commit to proceed
 *
 * ON FAILURE: Shows detailed error message with build output and blocks commit
 *
 * BYPASS: No bypass option - build must pass to commit
 */

/* eslint-env node */
/* eslint no-console: 0 */

const { execSync } = require('child_process');

try {
  // Run the build command and capture output
  execSync('npm run build', {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  // Build succeeded - exit silently
  process.exit(0);
} catch (error) {
  // Build failed - show highlighted error message
  const redBold = '\x1b[1;31m';
  const yellowBold = '\x1b[1;33m';
  const reset = '\x1b[0m';
  const bgRed = '\x1b[41m';
  const bgYellow = '\x1b[43m';
  const whiteBold = '\x1b[1;37m';

  console.error('');
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}      🚨 COMMIT BLOCKED - BUILD FAILED! 🚨          ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error('');
  console.error(
    `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
  );
  console.error(
    `${redBold}│  ❌ The build must pass before committing code!     │${reset}`
  );
  console.error(
    `${redBold}│  🔧 Please fix the errors below and try again       │${reset}`
  );
  console.error(
    `${redBold}└──────────────────────────────────────────────────────┘${reset}`
  );
  console.error('');

  // Extract meaningful error lines from stderr
  const stderr = error.stderr || '';
  const stdout = error.stdout || '';

  // Look for specific error patterns and file references
  const allOutput = stderr + stdout;
  const lines = allOutput.split('\n');

  // Find the main error message
  const errorLines = lines.filter(
    line =>
      line.includes('✗ Build failed') ||
      line.includes('error during build:') ||
      line.includes('Could not resolve') ||
      line.includes('file:') ||
      (line.includes('Error') && !line.includes('ReferenceError')) ||
      line.includes('Failed to')
  );

  console.error(`${yellowBold}BUILD ERRORS:${reset}`);
  console.error(`${yellowBold}─────────────${reset}`);

  if (errorLines.length > 0) {
    errorLines.forEach(line => {
      // Clean up ANSI escape codes for better readability
      const cleanLine = line.replace(/\x1b\[[0-9;]*m/g, '').trim();
      if (cleanLine) console.error(`${redBold}• ${cleanLine}${reset}`);
    });
  } else {
    // Fallback - show first few lines of stderr that contain useful info
    const fallbackLines = lines
      .filter(line => line.trim().length > 0)
      .slice(0, 5);
    fallbackLines.forEach(line => console.error(`${redBold}• ${line}${reset}`));
  }

  console.error('');
  console.error(
    `${bgYellow}${redBold}                                                      ${reset}`
  );
  console.error(
    `${bgYellow}${redBold}     💡 Run 'npm run build' to fix issues locally   ${reset}`
  );
  console.error(
    `${bgYellow}${redBold}                                                      ${reset}`
  );
  console.error('');

  process.exit(1);
}
