# Campus Events: Review an Operational Change

This is the same Campus Events app (Node.js and PostgreSQL). Today you change only the Git ignore rules. No app server, database, Docker or CI setup required.

## Prerequisites

Bash on macOS, Linux or Windows WSL Ubuntu; Git, Node.js 18+, npm and a GitHub account. This is a solo exercise; no reviewer is required.

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

## Solo PR self-check

Inspect Files changed. Post a comment confirming scope, exclusions, safe example, passing tests and absence of credentials/generated files. This is not formal approval. Merge as owner after existing requirements pass and confirm issue closure. Never bypass repository rules.

## Boundaries

Do not change app code, commit generated files, expose credentials or add CI. Existing source code and package lockfile remain as supplied.
