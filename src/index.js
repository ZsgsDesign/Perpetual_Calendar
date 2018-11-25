import { app, BrowserWindow, ipcMain, dialog } from 'electron';

//退出
ipcMain.on('window-all-closed', () => {
  app.quit();
});
//小化
ipcMain.on('hide-window', () => {
  mainWindow.minimize();
});
//最大化
ipcMain.on('show-window', () => {
  mainWindow.maximize();
});
//还原
ipcMain.on('orignal-window', () => {
  mainWindow.unmaximize();
});

//进入
ipcMain.on('events-window-open', () => {
  editEventsWindow.show();
  editEventsWindow.webContents.send('init', 'true');
});
//退出
ipcMain.on('events-window-closed', () => {
  editEventsWindow.hide();
  mainWindow.webContents.send('editing', 'false');
});
//小化
ipcMain.on('events-hide-window', () => {
  editEventsWindow.minimize();
});
//最大化
ipcMain.on('events-show-window', () => {
  editEventsWindow.maximize();
});
//还原
ipcMain.on('events-orignal-window', () => {
  editEventsWindow.unmaximize();
});

//进入
ipcMain.on('memo-window-open', () => {
  editMemoWindow.show();
  editMemoWindow.webContents.send('init', 'true');
});
//退出
ipcMain.on('memo-window-closed', () => {
  editMemoWindow.hide();
  mainWindow.webContents.send('editing', 'false');
});
//小化
ipcMain.on('memo-hide-window', () => {
  editMemoWindow.minimize();
});
//最大化
ipcMain.on('memo-show-window', () => {
  editMemoWindow.maximize();
});
//还原
ipcMain.on('memo-orignal-window', () => {
  editMemoWindow.unmaximize();
});

const electron =require("electron");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow,editEventsWindow,editMemoWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight:700,
    minWidth:1000,
    frame: false,
    transparent: true
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.webContents.openDevTools(); 
  electron.Menu.setApplicationMenu(null);
  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });

  editEventsWindow = new BrowserWindow({
    width: 500,
    height: 800,
    resizeable:false,
    frame: false,
    transparent: true,
    show:false
  });
  editEventsWindow.loadURL(`file://${__dirname}/editEvents.html`);
  // editEventsWindow.webContents.openDevTools();
  editEventsWindow.on('closed', () => {
    editEventsWindow = null;
  });

  editMemoWindow = new BrowserWindow({
    width: 500,
    height: 800,
    resizeable:false,
    frame: false,
    transparent: true,
    show:false
  });
  editMemoWindow.loadURL(`file://${__dirname}/editMemo.html`);
  // editMemoWindow.webContents.openDevTools();
  editMemoWindow.on('closed', () => {
    editMemoWindow = null;
  });
};

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
