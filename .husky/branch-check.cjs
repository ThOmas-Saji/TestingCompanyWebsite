#!/usr/bin/env node

/**
 * HUSKY HOOK: Branch Protection Check
 *
 * PURPOSE: Prevents direct commits to the main branch to enforce PR workflow
 *
 * WHEN IT RUNS: During git commit (pre-commit hook)
 *
 * WHAT IT DOES:
 * - Checks if current branch is 'main'
 * - Blocks commits if on main branch
 * - Forces developers to use feature branches + Pull Requests
 *
 * PROTECTION LEVEL: Hard block (no bypass option)
 *
 * ENFORCED WORKFLOW:
 * 1. Create feature branch: git checkout -b feat/feature-name
 * 2. Make changes and commit to feature branch
 * 3. Push and create Pull Request
 * 4. Merge via PR review process
 *
 * ERROR: Shows workflow guidance if commit attempted on main
 */

/* eslint-env node */
/* eslint no-console: 0 */

const { execSync } = require('child_process');

// Check if we're on main branch and prevent direct commits
try {
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  }).trim();

  if (currentBranch === 'main') {
    const redBold = '\x1b[1;31m';
    const reset = '\x1b[0m';
    const bgRed = '\x1b[41m';
    const whiteBold = '\x1b[1;37m';
    const yellowBold = '\x1b[1;33m';

    console.error('');
    console.error(
      `${bgRed}${whiteBold}                                                      ${reset}`
    );
    console.error(
      `${bgRed}${whiteBold}      🚫 DIRECT COMMITS TO MAIN BLOCKED! 🚫         ${reset}`
    );
    console.error(
      `${bgRed}${whiteBold}                                                      ${reset}`
    );
    console.error('');
    console.error(
      `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
    );
    console.error(
      `${redBold}│  ❌ Direct commits to main branch are not allowed!  │${reset}`
    );
    console.error(
      `${redBold}│  🔀 Please create a feature branch and use PRs      │${reset}`
    );
    console.error(
      `${redBold}└──────────────────────────────────────────────────────┘${reset}`
    );
    console.error('');
    console.error(`${yellowBold}SUGGESTED WORKFLOW:${reset}`);
    console.error(`${yellowBold}──────────────────${reset}`);
    console.error(
      `${redBold}• git checkout -b feature/your-feature-name${reset}`
    );
    console.error(`${redBold}• Make your changes and commit${reset}`);
    console.error(
      `${redBold}• git push -u origin feature/your-feature-name${reset}`
    );
    console.error(`${redBold}• Create a Pull Request on GitHub${reset}`);
    console.error('');

    process.exit(1);
  }
} catch (branchError) {
  // If we can't get the branch name, continue silently
  console.warn('Warning: Could not determine current branch');
}

// Branch check passed - exit silently
process.exit(0);
