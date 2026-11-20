// Creates local exercise files. No credentials or personal data.
const fs = require('node:fs');
const path = require('node:path');
const files = {
  '.env': 'APP_MODE=practice\n',
  'logs/app.log': 'INFO dummy practice log\n',
  'coverage/summary.txt': 'Dummy generated coverage output\n',
  'tmp/session.txt': 'Dummy temporary session\n',
};
for (const [name, body] of Object.entries(files)) {
  if (fs.existsSync(name)) throw new Error(`Refusing to overwrite ${name}. Use a fresh exercise clone.`);
  fs.mkdirSync(path.dirname(name), { recursive: true });
  fs.writeFileSync(name, body);
}
console.log('Created four dummy local files. Do not commit them.');
