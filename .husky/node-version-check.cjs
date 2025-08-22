#!/usr/bin/env node

/**
 * HUSKY HOOK: Node.js Version Compatibility Check
 *
 * PURPOSE: Ensures developers use compatible Node.js version
 *
 * WHEN IT RUNS: During git commit (pre-commit hook)
 *
 * WHAT IT CHECKS:
 * - Current Node.js version against minimum required version
 * - Currently requires Node.js v22 or higher (LTS)
 * - Prevents commits if Node.js version is too old
 *
 * WHY IT'S IMPORTANT:
 * - Ensures all team members use compatible Node.js versions
 * - Prevents version-specific bugs and inconsistencies
 * - Maintains consistent development environment
 * - Avoids package compatibility issues
 *
 * ON SUCCESS: Exits silently if version meets requirements
 *
 * ON FAILURE: Shows version info and upgrade instructions
 *
 * BYPASS: No bypass option - proper Node.js version required
 */

/* eslint-env node */
/* eslint no-console: 0 */

// Check Node.js version - require v22 or higher (current LTS)
const requiredMajorVersion = 22;
const currentVersion = process.version;
const currentMajorVersion = parseInt(currentVersion.slice(1).split('.')[0], 10);

if (currentMajorVersion < requiredMajorVersion) {
  const redBold = '\x1b[1;31m';
  const reset = '\x1b[0m';
  const bgRed = '\x1b[41m';
  const whiteBold = '\x1b[1;37m';
  const yellowBold = '\x1b[1;33m';
  const bgYellow = '\x1b[43m';

  console.error('');
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}       ⚠️  NODE.JS VERSION TOO OLD! ⚠️              ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error('');
  console.error(
    `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
  );
  console.error(
    `${redBold}│  ❌ Node.js ${requiredMajorVersion}+ required (current: ${currentVersion})        │${reset}`
  );
  console.error(
    `${redBold}│  🔄 Please upgrade to the current LTS version       │${reset}`
  );
  console.error(
    `${redBold}└──────────────────────────────────────────────────────┘${reset}`
  );
  console.error('');
  console.error(`${yellowBold}UPGRADE INSTRUCTIONS:${reset}`);
  console.error(`${yellowBold}────────────────────${reset}`);
  console.error(`${redBold}• Visit: https://nodejs.org/en/download${reset}`);
  console.error(
    `${redBold}• Download Node.js ${requiredMajorVersion} LTS or newer${reset}`
  );
  console.error(`${redBold}• Or use a version manager:${reset}`);
  console.error(
    `${redBold}  - nvm: nvm install ${requiredMajorVersion} && nvm use ${requiredMajorVersion}${reset}`
  );
  console.error(
    `${redBold}  - fnm: fnm install ${requiredMajorVersion} && fnm use ${requiredMajorVersion}${reset}`
  );
  console.error('');
  console.error(
    `${bgYellow}${redBold}                                                      ${reset}`
  );
  console.error(
    `${bgYellow}${redBold}    💡 Restart your terminal after upgrading        ${reset}`
  );
  console.error(
    `${bgYellow}${redBold}                                                      ${reset}`
  );
  console.error('');

  process.exit(1);
}

// Version check passed - exit silently
process.exit(0);
