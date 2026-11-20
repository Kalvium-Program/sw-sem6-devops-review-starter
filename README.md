# Campus Events: Review an Operational Change

LU 2.4 uses the same Node.js and PostgreSQL reference application. Today you change only Git ignore rules. No app server, database, Docker or CI setup required.

## Prerequisites

Bash on macOS, Linux or Windows WSL Ubuntu; Git, Node.js 18+, npm and a GitHub account. A classmate with a separate GitHub account must review your PR.

## Begin

Use this template to create your own public repository. Clone your copy, enter its folder, then:

```bash
npm ci
node scripts/make-local-files.js
cat practice/change-request.md
git status --short --untracked-files=all
```

The generated files are dummy data. Keep them local; do not stage them. Do not use `git add .` before fixing and checking the ignore rules.

Inspect `README.md`, `.gitignore`, `.env.example`, and `git log --oneline -5` before making the correction. Open an issue, branch, repair `.gitignore`, verify, then open a focused PR. A PR template is supplied.

## Verification

```bash
git check-ignore -v .env logs/app.log coverage/summary.txt tmp/session.txt
git ls-files -- .env.example
git ls-files -- .env logs/app.log coverage/summary.txt tmp/session.txt
npm test
git diff -- .gitignore
```

All four local paths must be ignored. `.env.example` must remain tracked. The tracked-local-files command must print nothing.

## Peer review

Add your partner as a repository collaborator and let them accept the invitation. They review the Files changed tab and verification evidence, leave useful feedback, and approve only once satisfied. You reply or push a fix on the same branch. The owner merges the approved PR and confirms the linked issue closed.

GitHub authors cannot approve their own PR. Do not self-review. If a partner is unavailable, ask your mentor to review. You can do the local work while waiting, but do not present an unreviewed merge as complete.

## Boundaries

Do not change app code, commit generated files, expose credentials or add CI. Existing source code and package lockfile remain as supplied.
