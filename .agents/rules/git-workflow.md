# Git Workflow & Synchronization Learnings

## Core Rule: Update Git Regularly

1. **Continuous & Regular Git Commits**:
   - Whenever a task, bug fix, refactor, or feature milestone is finished and verified, immediately commit the changes.
   - Do not leave completed code uncommitted across long conversational turns or multiple unrelated requests.
   - Always push commits to the remote repository (`git push origin <branch>`) after verifying that tests pass.

2. **Commit Hygiene & Standards**:
   - Follow Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).
   - Write clear, descriptive commit messages describing the "what" and "why".
   - Keep commits atomic: one logical change per commit.

3. **Pre-commit Verification**:
   - Ensure the automated test suite passes: `python3 -m unittest discover -s tests`.
   - Ensure zero syntax errors, broken links, or console exceptions.
