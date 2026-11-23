# Baseline: how the app behaves today

This table shows where the app starts. Each topic in this sprint improves one row.

| Question | Today | Improved by |
| --- | --- | --- |
| How long does setup take a new teammate? | 15 to 30 minutes, several manual steps | Containers and Compose |
| Does it run the same on every laptop? | Depends on local Node and PostgreSQL versions | Container images |
| What happens to data if the database is recreated? | Lost, until you seed again | Volumes and backups |
| Where do secrets live? | In a local `.env` file | Secret handling |
| How do we know it is up? | Open `/health` and `/ready` by hand | Health checks |
| Do users reach one address? | No, the app port 3000 is exposed directly | Nginx reverse proxy |
| How do we find why it failed? | Read the terminal where `npm start` runs | Logs |
| Is every change checked before merge? | No | CI pipelines |
| Can we go back to the last good version? | Only by hand, if someone remembers | Rollback and runbook |
