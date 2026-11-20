# Change request: keep local output out of Git

The app and documents are already supplied. Do not change application code.

After running `node scripts/make-local-files.js`, four local files appear:

- `.env`: dummy local settings, standing in for a real secret file
- `logs/app.log`: generated log
- `coverage/summary.txt`: generated coverage output
- `tmp/session.txt`: temporary runtime file

The current ignore rules miss all four. Make one focused change to `.gitignore` so these remain local. Preserve existing rules and keep `.env.example`, scripts, lockfile and source code tracked.

Create an issue, work on a branch, and use a PR linked to the issue. Complete a documented author self-check, then merge as repository owner once any existing requirements pass. No second-person approval is required in this solo exercise. This is not formal GitHub approval.

Verification must include `git check-ignore -v` for all four paths and `git ls-files` for `.env.example`. Run `npm test` as a regression check; tests alone do not validate ignore rules.

Review challenge: a single line `*.log` ignores the log but does not ignore coverage or temporary files. Check the full request, not only the easiest example.
