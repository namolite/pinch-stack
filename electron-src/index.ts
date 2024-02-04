// Native
import { join } from 'path'
import { format } from 'url'

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    autoHideMenuBar: true,
    // frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, 'preload.js'),
    },
  })

  // Window control
  ipcMain.on('windowMinimize', () => {
    mainWindow.minimize();
  });
  ipcMain.on('windowMaximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });
  ipcMain.on('windowClose', () => {
    mainWindow.close();
  });

  // Recive from @Hooks\useInspectElement
  ipcMain.on('inspectElement', (event, args) => {
    const webContents = event.sender; // 获取发送消息的渲染进程的 webContents
    // 检查元素
    webContents.inspectElement(args.x, args.y);
    // 如果需要，打开开发者工具
    if (!webContents.isDevToolsOpened()) {
      webContents.openDevTools();
    }
  })

  // listen the channel `message` and resend the received message to the renderer process
  ipcMain.on('message', (event: IpcMainEvent, message: any) => {
    console.log(message)
    setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
      pathname: join(__dirname, '../renderer/out/index.html'),
      protocol: 'file:',
      slashes: true,
    })

  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
