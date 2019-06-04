const { execSync } = require('child_process');
const { ipcMain } = require('electron');
const uploadFtp = require('./ftp');
const fs = require('fs');

// arg => url
ipcMain.on('buildAndUpload', async (event, arg) => {

  execSync('yarn build', {
    cwd: arg,
    stdio: 'inherit'
  })
  await uploadFtp(arg);
  event.reply('buildAndUploadDone', 'succeed')
})


