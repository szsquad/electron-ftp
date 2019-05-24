const { app, BrowserWindow } = require('electron');
const path = require('path');

require('./node/index');

// require('electron-reload')(__dirname, {
//   electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
//   watchRenderer: false
// });


process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

let win
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:8080/')
  win.on('close', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // 在 macOS 上，点击关闭按钮 软件是还打开的 只是隐藏起来
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，点击打开
  if (win === null) {
    createWindow()
  }
})