# Agent Guidelines & Workflow Rules

## 1. Git Workflow & Automatic Regular Push (MANDATORY)
- **Always Commit and Push Regularly**: Whenever a task, feature, refactoring, or bugfix is completed and verified with tests, you MUST immediately commit and push the changes to remote (`git push origin <branch>`).
- **Never Leave Code Unpushed**: Do NOT leave completed, tested code uncommitted or unpushed at the end of a turn. Do NOT wait for the user to ask "pushed?".
- **Verification First**: Always run and pass the automated test suites (`python -m pytest tests/` and relevant Node.js tests in `tests/`) before pushing.
- **Conventional Commits**: Format commit messages using standard prefixes: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`.

## 2. Code Quality & Standards
- Keep external dependencies to zero unless explicitly requested (Vanilla HTML5, modern CSS, lightweight Vanilla JS).
- Preserve existing data contracts, storage keys, DOM element IDs, and routing logic.
- Ensure touch targets are at least 44x44px for mobile devices.
- Guarantee offline PWA cache integrity in `sw.js` whenever adding new assets.
