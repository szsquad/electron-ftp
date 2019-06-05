const { BrowserWindow, Tray } = require('electron');
const electron = require('electron');
const path = require('path');

module.exports = function createWindow() {
  let win;
  let tray = null;

  win = new BrowserWindow({
    // width: 600,
    width: 1000,
    // height: 300,
    height: 800,
    // show: false,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 设置mac 菜单栏图标
  const iconPath = path.join(process.cwd(), '/src/main/assets/icon.png');

  tray = new Tray(iconPath);
  tray.setToolTip('This is my application.');

  tray.on('click', () => {
    const { screen } = electron;
    const { x, y } = screen.getCursorScreenPoint();
    win.setPosition(x - 300, y);
    win.show();
  });

  win.on('blur', () => {
    // win.hide();
  });


  win.loadURL('http://localhost:8080/');
  win.on('close', () => {
    win = null;
  });
};
