const { app } = require('electron');
const createWindow = require('./createWindow');
require('./init');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // 在 macOS 上，点击关闭按钮 软件是还打开的 只是隐藏起来
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，点击打开
  // if (win === null) {
  // createWindow()
  // }
})