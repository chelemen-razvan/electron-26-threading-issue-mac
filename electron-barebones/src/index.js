const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const fs = require('node:fs/promises');
const { APP_DATA_PATH, PROGRAM_DATA_PATH, } = require('./const.js');


app.setPath('userData', APP_DATA_PATH);

async function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      allowRunningInsecureContent: true,
      nodeIntegrationInWorker: true,
      sandbox: false,
      webSecurity: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('is-packaged', async (e) => app.isPackaged);

ipcMain.handle('write-log', async (e, fileName, frame) => {
  console.log('write', frame)

  const data = Buffer.from(frame.data);
  fs.writeFile(fileName, data);
});
