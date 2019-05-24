const { ipcMain } = require('electron');
const fs = require('fs');


ipcMain.on('read', (event, arg) => {
  console.log(arg) // log in terminal
  const pkg = fs.readFileSync('./package.json', 'utf-8');
  event.reply('result', "pkg")
})