#!/usr/bin/env node
/* Cross-platform opener for QA page */
const { exec } = require('child_process');
const url = 'http://localhost:3002/pitching/arsenals?review=1';
const platform = process.platform;
let cmd;
if (platform === 'win32') {
  cmd = `start "" "${url}"`;
} else if (platform === 'darwin') {
  cmd = `open "${url}"`;
} else {
  // Linux and others
  cmd = `xdg-open "${url}" || sensible-browser "${url}" || x-www-browser "${url}" || gnome-open "${url}" || kde-open "${url}" || echo "Open ${url}"`;
}
exec(cmd, (err) => {
  if (err) {
    console.error('Failed to open browser. Visit manually:', url);
  }
});
