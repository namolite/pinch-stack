// Native
import { join } from 'path'
import { format } from 'url'
// import fs from 'fs-extra'


// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent, powerMonitor } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import { download } from 'electron-dl'
import electronDl from 'electron-dl'

// Prepare the renderer once the app is ready
app.setName('Pinch Stack')
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, 'preload.js'),
    },
  })

  ipcMain.on('download', async (_event, { url }) => {
    const win = BrowserWindow.getFocusedWindow();
    try {
      console.log(await download(win, url));
    } catch (error) {
      if (error instanceof electronDl.CancelError) {
        console.info('item.cancel() was called');
      } else {
        console.error(error);
      }
    }
  })

  // (Window control) Recive from @Components/layout/titleBar
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

  ipcMain.on('windowStatus', (event) => {
    const status = mainWindow.isMaximized() ? ('maximize') : ('restored')
    event.sender.send('windowStatusResponse', status)
  })

  // (Open dev tool) Recive from @Hooks\useInspectElement
  ipcMain.on('inspectElement', (event, args) => {
    const webContents = event.sender;
    webContents.inspectElement(args.x, args.y);
    if (!webContents.isDevToolsOpened()) {
      webContents.openDevTools();
    }
  })

  // listen the channel `message` and resend the received message to the renderer process
  ipcMain.on('message', (event: IpcMainEvent, message: any) => {
    console.log(message)
    setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
  })

  // (File save & load) Recive from @
  /*ipcMain.on('upload', async (event, fileName: string, fileContent: string) => {
    const userPath = app.getPath('userData');
    const filePath = join(userPath, fileName);
    try {
      await fs.promises.writeFile(filePath, fileContent);
      event.sender.send('uploaded', filePath);
    } catch (error: any) {
      event.sender.send('file-upload-error', error.message);
    }
  });
  ipcMain.on('download', async (event, fileName: string) => {
    const userPath = app.getPath('userData');
    const filePath = join(userPath, fileName);
    try {
      const fileContent = await fs.promises.readFile(filePath, 'utf-8');
      event.sender.send('downloaded', fileContent);
    } catch (error: any) {
      event.sender.send('file-download-error', error.message);
    }
  });*/

  powerMonitor.on('on-ac', () => {
    mainWindow.webContents.send('battery-status', 'AC')
  })

  powerMonitor.on('on-battery', () => {
    mainWindow.webContents.send('battery-status', 'Battery')
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
