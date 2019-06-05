const { execSync } = require('child_process');
const { ipcMain } = require('electron');
const fs = require('fs');
const uploadFtp = require('./ftp');

// arg => url
ipcMain.on('buildAndUpload', async (event, arg) => {
  execSync('yarn build', {
    cwd: arg,
    stdio: 'inherit',
  });
  await uploadFtp(arg);
  event.reply('buildAndUploadDone', 'succeed');
});
