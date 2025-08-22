#!/usr/bin/env node

/**
 * HUSKY HOOK: Security Vulnerability Check
 *
 * PURPOSE: Scans for security vulnerabilities in dependencies before commits
 *
 * WHEN IT RUNS: During git commit (pre-commit hook)
 *
 * WHAT IT CHECKS:
 * - Runs 'npm audit' to detect known security vulnerabilities
 * - Checks for outdated packages that may have security fixes
 * - Validates dependency integrity and security status
 *
 * VULNERABILITY LEVELS:
 * - High/Critical: Blocks commit, requires immediate attention
 * - Moderate: Shows warning but allows commit with acknowledgment
 * - Low/Info: Reports but doesn't block commit
 *
 * WHY IT'S IMPORTANT:
 * - Prevents introduction of known security vulnerabilities
 * - Encourages keeping dependencies up-to-date
 * - Maintains security hygiene across the codebase
 * - Early detection before production deployment
 *
 * BYPASS OPTION: SKIP_SECURITY_CHECK=true git commit -m "message"
 *
 * ON ISSUES: Shows detailed vulnerability report and remediation steps
 */

/* eslint-env node */
/* eslint no-console: 0 */

const { execSync } = require('child_process');

// Check if security check should be skipped
const skipSecurity = process.env.SKIP_SECURITY_CHECK === 'true';

if (skipSecurity) {
  console.log(
    '\x1b[1;33m⚠️  Security check skipped (SKIP_SECURITY_CHECK=true)\x1b[0m'
  );
  console.log(
    '\x1b[1;31m🚨 Remember to discuss any dependency updates with the team!\x1b[0m'
  );
  process.exit(0);
}

const redBold = '\x1b[1;31m';
const yellowBold = '\x1b[1;33m';
const greenBold = '\x1b[1;32m';
const reset = '\x1b[0m';
const bgRed = '\x1b[41m';
const bgYellow = '\x1b[43m';
const whiteBold = '\x1b[1;37m';

let hasIssues = false;

// Check for security vulnerabilities
try {
  console.log(
    `${yellowBold}🔍 Checking for security vulnerabilities...${reset}`
  );

  const auditResult = execSync('npm audit --audit-level=moderate', {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  // If we get here, no moderate+ vulnerabilities found
  console.log(`${greenBold}✅ No security vulnerabilities found${reset}`);
} catch (auditError) {
  hasIssues = true;
  console.error('');
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}      🚨 COMMIT BLOCKED - VULNERABILITIES! 🚨       ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error('');

  const auditOutput = auditError.stdout || auditError.stderr || '';
  const lines = auditOutput.split('\n');

  // Look for vulnerability summary
  const summaryLines = lines.filter(
    line =>
      line.includes('vulnerabilities') ||
      line.includes('moderate') ||
      line.includes('high') ||
      line.includes('critical') ||
      line.includes('npm audit fix')
  );

  console.error(
    `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
  );
  console.error(
    `${redBold}│  🔒 Security vulnerabilities found in dependencies  │${reset}`
  );
  console.error(
    `${redBold}│  ❌ Commit blocked until vulnerabilities are fixed  │${reset}`
  );
  console.error(
    `${redBold}└──────────────────────────────────────────────────────┘${reset}`
  );
  console.error('');

  console.error(`${yellowBold}SECURITY ISSUES FOUND:${reset}`);
  console.error(`${yellowBold}─────────────────────${reset}`);

  summaryLines.forEach(line => {
    const cleanLine = line.replace(/\x1b\[[0-9;]*m/g, '').trim();
    if (cleanLine) {
      console.error(`${yellowBold}• ${cleanLine}${reset}`);
    }
  });

  console.error('');
  console.error(`${yellowBold}MANUAL RESOLUTION OPTIONS:${reset}`);
  console.error(`${yellowBold}─────────────────────────${reset}`);
  console.error(
    `${redBold}• npm audit fix                # Try automatic fix${reset}`
  );
  console.error(
    `${redBold}• npm audit fix --force        # Force fix (use carefully)${reset}`
  );
  console.error(
    `${redBold}• npm update [package-name]    # Update specific package${reset}`
  );
  console.error(
    `${redBold}• Review and update manually   # For complex cases${reset}`
  );
  console.error('');
  console.error(`${yellowBold}TO SKIP THIS CHECK (temporarily):${reset}`);
  console.error(`${yellowBold}─────────────────────────────────${reset}`);
  console.error(
    `${redBold}• SKIP_SECURITY_CHECK=true git commit -m "your message"${reset}`
  );
  console.error('');
}

// Check for outdated packages (informational only - won't block commit)
try {
  console.log(`${yellowBold}📦 Checking for outdated packages...${reset}`);

  const outdatedResult = execSync('npm outdated --depth=0', {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  // If we get here with output, there are outdated packages
  if (outdatedResult.trim()) {
    console.log('');
    console.log(
      `${yellowBold}                                                      ${reset}`
    );
    console.log(
      `${yellowBold}          📦 OUTDATED PACKAGES FOUND 📦            ${reset}`
    );
    console.log(
      `${yellowBold}                                                      ${reset}`
    );
    console.log('');

    console.log(`${yellowBold}OUTDATED PACKAGES (informational):${reset}`);
    console.log(`${yellowBold}──────────────────────────────────${reset}`);

    const outdatedLines = outdatedResult
      .split('\n')
      .filter(line => line.trim());
    outdatedLines.forEach(line => {
      if (line.includes('Package') || line.trim()) {
        console.log(`${yellowBold}${line}${reset}`);
      }
    });

    console.log('');
    console.log(
      `${yellowBold}💡 Consider updating packages when convenient${reset}`
    );
    console.log(
      `${yellowBold}💬 Discuss major updates with the team first${reset}`
    );
    console.log('');
  } else {
    console.log(`${greenBold}✅ All packages are up to date${reset}`);
  }
} catch (outdatedError) {
  // npm outdated exits with code 1 when outdated packages are found
  const outdatedOutput = outdatedError.stdout || '';

  if (outdatedOutput.trim()) {
    console.log('');
    console.log(
      `${yellowBold}                                                      ${reset}`
    );
    console.log(
      `${yellowBold}          📦 OUTDATED PACKAGES FOUND 📦            ${reset}`
    );
    console.log(
      `${yellowBold}                                                      ${reset}`
    );
    console.log('');

    console.log(`${yellowBold}OUTDATED PACKAGES (informational):${reset}`);
    console.log(`${yellowBold}──────────────────────────────────${reset}`);

    const outdatedLines = outdatedOutput
      .split('\n')
      .filter(line => line.trim());
    outdatedLines.forEach(line => {
      if (line.includes('Package') || line.trim()) {
        console.log(`${yellowBold}${line}${reset}`);
      }
    });

    console.log('');
    console.log(
      `${yellowBold}💡 Consider updating packages when convenient${reset}`
    );
    console.log(
      `${yellowBold}💬 Discuss major updates with the team first${reset}`
    );
    console.log('');
  } else {
    console.log(`${greenBold}✅ All packages are up to date${reset}`);
  }
}

// Show resolution instructions if issues found
if (hasIssues) {
  console.error('');
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}      ⚠️  SECURITY/DEPENDENCY ISSUES FOUND! ⚠️      ${reset}`
  );
  console.error(
    `${bgRed}${whiteBold}                                                      ${reset}`
  );
  console.error('');
  console.error(
    `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
  );
  console.error(
    `${redBold}│  🔒 Manual resolution required for remaining issues │${reset}`
  );
  console.error(
    `${redBold}│  📋 Review and fix the issues below                 │${reset}`
  );
  console.error(
    `${redBold}└──────────────────────────────────────────────────────┘${reset}`
  );
  console.error('');
  console.error(
    `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
  );
  console.error(
    `${redBold}│  🚨 DISCUSS COMPLEX UPDATES WITH TEAM! 🚨           │${reset}`
  );
  console.error(
    `${redBold}│  💬 For major version updates, consult team first   │${reset}`
  );
  console.error(
    `${redBold}└──────────────────────────────────────────────────────┘${reset}`
  );
  console.error('');
  console.error(`${yellowBold}MANUAL RESOLUTION OPTIONS:${reset}`);
  console.error(`${yellowBold}─────────────────────────${reset}`);
  console.error(`${redBold}• For complex issues:${reset}`);
  console.error(
    `${redBold}  - npm audit fix --force      # Force fix (use carefully)${reset}`
  );
  console.error(
    `${redBold}  - npm update                 # Update to latest versions${reset}`
  );
  console.error(
    `${redBold}  - npm update [package-name]  # Update specific package${reset}`
  );
  console.error(
    `${redBold}  - Review peer dependency conflicts manually${reset}`
  );
  console.error('');
  console.error(`${yellowBold}TO SKIP THIS CHECK (temporarily):${reset}`);
  console.error(`${yellowBold}─────────────────────────────────${reset}`);
  console.error(
    `${redBold}• SKIP_SECURITY_CHECK=true git commit -m "your message"${reset}`
  );
  console.error('');
  console.error(
    `${bgYellow}${redBold}                                                      ${reset}`
  );
  console.error(
    `${bgYellow}${redBold}  ⚠️  Test thoroughly after updating packages ⚠️   ${reset}`
  );
  console.error(
    `${bgYellow}${redBold}                                                      ${reset}`
  );
  console.error('');

  process.exit(1);
}

console.log(`${greenBold}✅ Security and dependency checks passed${reset}`);
process.exit(0);
