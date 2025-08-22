#!/usr/bin/env node

/**
 * HUSKY HOOK: Branch Naming Convention Check
 *
 * PURPOSE: Enforces Conventional Commit branch naming standards
 *
 * WHEN IT RUNS: During git commit (pre-commit hook)
 *
 * WHAT IT VALIDATES:
 * - Branch names follow conventional patterns: type/description or type(scope)/description
 * - Valid types: feat, fix, docs, style, refactor, perf, test, chore, build, ci, revert, hotfix
 * - Special case: release/version (e.g., release/v1.2.0)
 * - Uses lowercase letters and hyphens only
 * - Skips validation for main/master branches
 *
 * VALID EXAMPLES:
 * ✅ feat/user-authentication
 * ✅ feat(auth)/login-system
 * ✅ fix/validation-error
 * ✅ chore(deps)/update-packages
 * ✅ release/v1.2.0
 *
 * INVALID EXAMPLES:
 * ❌ feature/UserAuth (wrong type & case)
 * ❌ fix_login_bug (underscores not allowed)
 * ❌ random-branch-name (no conventional type)
 *
 * BYPASS OPTION: SKIP_BRANCH_NAME_CHECK=true git commit -m "message"
 *
 * ERROR: Shows detailed naming rules and examples for invalid names
 */

/* eslint-env node */
/* eslint no-console: 0 */

const { execSync } = require('child_process');

// Check if branch name validation should be skipped
const skipBranchName = process.env.SKIP_BRANCH_NAME_CHECK === 'true';

if (skipBranchName) {
  console.log(
    '\x1b[1;33m⚠️  Branch name check skipped (SKIP_BRANCH_NAME_CHECK=true)\x1b[0m'
  );
  process.exit(0);
}

try {
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  }).trim();

  // Skip validation for main/master branches (they're protected separately)
  if (currentBranch === 'main' || currentBranch === 'master') {
    process.exit(0);
  }

  // Valid branch name patterns based on Conventional Commits with optional scope
  const validPatterns = [
    /^feat(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // feat/description or feat(scope)/description
    /^fix(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // fix/description or fix(scope)/description
    /^docs(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // docs/description or docs(scope)/description
    /^style(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // style/description or style(scope)/description
    /^refactor(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // refactor/description or refactor(scope)/description
    /^perf(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // perf/description or perf(scope)/description
    /^test(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // test/description or test(scope)/description
    /^chore(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // chore/description or chore(scope)/description
    /^build(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // build/description or build(scope)/description
    /^ci(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // ci/description or ci(scope)/description
    /^revert(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // revert/description or revert(scope)/description
    /^hotfix(\([a-z0-9-]+\))?\/[a-z0-9-]+$/, // hotfix/description or hotfix(scope)/description
    /^release\/[a-z0-9.-]+$/, // release/v1.2.0 (no scope needed for releases)
  ];

  const isValidBranch = validPatterns.some(pattern =>
    pattern.test(currentBranch)
  );

  if (!isValidBranch) {
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
      `${bgRed}${whiteBold}        🚫 INVALID BRANCH NAME! 🚫                  ${reset}`
    );
    console.error(
      `${bgRed}${whiteBold}                                                      ${reset}`
    );
    console.error('');
    console.error(
      `${redBold}┌──────────────────────────────────────────────────────┐${reset}`
    );
    console.error(
      `${redBold}│  ❌ Branch name doesn't follow naming convention     │${reset}`
    );
    console.error(
      `${redBold}│  🏷️  Current branch: ${currentBranch.padEnd(25)} │${reset}`
    );
    console.error(
      `${redBold}└──────────────────────────────────────────────────────┘${reset}`
    );
    console.error('');
    console.error(`${yellowBold}CONVENTIONAL COMMIT BRANCH PATTERNS:${reset}`);
    console.error(`${yellowBold}────────────────────────────────────${reset}`);
    console.error(
      `${redBold}• feat/description              # New features${reset}`
    );
    console.error(
      `${redBold}• feat(scope)/description       # New features with scope${reset}`
    );
    console.error(
      `${redBold}• fix/description               # Bug fixes${reset}`
    );
    console.error(
      `${redBold}• fix(scope)/description        # Bug fixes with scope${reset}`
    );
    console.error(
      `${redBold}• docs/description              # Documentation changes${reset}`
    );
    console.error(
      `${redBold}• style/description             # Code style/formatting${reset}`
    );
    console.error(
      `${redBold}• refactor/description          # Code refactoring${reset}`
    );
    console.error(
      `${redBold}• perf/description              # Performance improvements${reset}`
    );
    console.error(
      `${redBold}• test/description              # Adding/updating tests${reset}`
    );
    console.error(
      `${redBold}• chore/description             # Maintenance tasks${reset}`
    );
    console.error(
      `${redBold}• build/description             # Build system changes${reset}`
    );
    console.error(
      `${redBold}• ci/description                # CI/CD pipeline changes${reset}`
    );
    console.error(
      `${redBold}• revert/description            # Reverting changes${reset}`
    );
    console.error(
      `${redBold}• hotfix/description            # Critical production fixes${reset}`
    );
    console.error(
      `${redBold}• release/v1.2.0               # Release branches${reset}`
    );
    console.error('');
    console.error(`${yellowBold}NAMING RULES:${reset}`);
    console.error(`${yellowBold}─────────────${reset}`);
    console.error(`${redBold}• Use lowercase letters only${reset}`);
    console.error(
      `${redBold}• Use hyphens (-) instead of spaces or underscores${reset}`
    );
    console.error(`${redBold}• Start with type/ prefix${reset}`);
    console.error(`${redBold}• Use descriptive names${reset}`);
    console.error('');
    console.error(`${yellowBold}EXAMPLES:${reset}`);
    console.error(`${yellowBold}─────────${reset}`);
    console.error(
      `${redBold}✅ feat/user-authentication          # New feature${reset}`
    );
    console.error(
      `${redBold}✅ feat(auth)/login-system           # New feature with scope${reset}`
    );
    console.error(
      `${redBold}✅ fix/validation-error              # Bug fix${reset}`
    );
    console.error(
      `${redBold}✅ fix(dashboard)/chart-display      # Bug fix with scope${reset}`
    );
    console.error(
      `${redBold}✅ docs(api)/update-endpoints        # Documentation with scope${reset}`
    );
    console.error(
      `${redBold}✅ chore(deps)/update-packages       # Maintenance with scope${reset}`
    );
    console.error(
      `${redBold}✅ perf(db)/optimize-queries         # Performance with scope${reset}`
    );
    console.error(`${redBold}❌ feature/UserAuth (wrong type & case)${reset}`);
    console.error(
      `${redBold}❌ fix_login_bug (underscores not allowed)${reset}`
    );
    console.error(
      `${redBold}❌ random-branch-name (no conventional type)${reset}`
    );
    console.error('');
    console.error(`${yellowBold}TO RENAME CURRENT BRANCH:${reset}`);
    console.error(`${yellowBold}────────────────────────${reset}`);
    console.error(`${redBold}• git branch -m feat/your-feature-name${reset}`);
    console.error(
      `${redBold}• git branch -m feat(module)/your-feature-name${reset}`
    );
    console.error('');
    console.error(`${yellowBold}TO SKIP THIS CHECK (temporarily):${reset}`);
    console.error(`${yellowBold}─────────────────────────────────${reset}`);
    console.error(
      `${redBold}• SKIP_BRANCH_NAME_CHECK=true git commit -m "message"${reset}`
    );
    console.error('');
    console.error(
      `${bgYellow}${redBold}                                                      ${reset}`
    );
    console.error(
      `${bgYellow}${redBold}   💡 Good branch names improve project organization ${reset}`
    );
    console.error(
      `${bgYellow}${redBold}                                                      ${reset}`
    );
    console.error('');

    process.exit(1);
  }

  // Branch name is valid - continue silently
  process.exit(0);
} catch (branchError) {
  console.warn(
    'Warning: Could not determine current branch for name validation'
  );
  process.exit(0);
}
