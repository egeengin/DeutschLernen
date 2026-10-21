# Git Workflow & Synchronization Learnings

## Core Rule: Commit and Push Regularly (MANDATORY)

1. **Continuous & Regular Git Commits and Pushes**:
   - Whenever a task, bug fix, refactor, or feature milestone is finished and verified, immediately commit the changes.
   - **MANDATORY**: Always push commits to the remote repository (`git push origin <branch>`) immediately after verifying that tests pass.
   - Do NOT leave completed code uncommitted or unpushed across long conversational turns or at the end of a response.
   - Do NOT wait for the user to prompt "pushed?" to synchronize remote.

2. **Commit Hygiene & Standards**:
   - Follow Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).
   - Write clear, descriptive commit messages describing the "what" and "why".
   - Keep commits atomic: one logical change per commit.

3. **Pre-commit & Pre-push Verification**:
   - Ensure the automated test suite passes: `python -m pytest tests/` and relevant Node.js unit tests (`node tests/...`).
   - Ensure zero syntax errors, broken links, or console exceptions.

