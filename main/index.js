"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Native
const path_1 = require("path");
const url_1 = require("url");
// import fs from 'fs-extra'
// Packages
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_next_1 = __importDefault(require("electron-next"));
const electron_dl_1 = require("electron-dl");
const electron_dl_2 = __importDefault(require("electron-dl"));
// Prepare the renderer once the app is ready
electron_1.app.setName('Pinch Stack');
electron_1.app.on('ready', async () => {
    await (0, electron_next_1.default)('./renderer');
    const mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 750,
        frame: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: (0, path_1.join)(__dirname, 'preload.js'),
        },
    });
    electron_1.ipcMain.on('download', async (_event, { url }) => {
        const win = electron_1.BrowserWindow.getFocusedWindow();
        try {
            console.log(await (0, electron_dl_1.download)(win, url));
        }
        catch (error) {
            if (error instanceof electron_dl_2.default.CancelError) {
                console.info('item.cancel() was called');
            }
            else {
                console.error(error);
            }
        }
    });
    // (Window control) Recive from @Components/layout/titleBar
    electron_1.ipcMain.on('windowMinimize', () => {
        mainWindow.minimize();
    });
    electron_1.ipcMain.on('windowMaximize', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();
        }
        else {
            mainWindow.maximize();
        }
    });
    electron_1.ipcMain.on('windowClose', () => {
        mainWindow.close();
    });
    electron_1.ipcMain.on('windowStatus', (event) => {
        const status = mainWindow.isMaximized() ? ('maximize') : ('restored');
        event.sender.send('windowStatusResponse', status);
    });
    // (Open dev tool) Recive from @Hooks\useInspectElement
    electron_1.ipcMain.on('inspectElement', (event, args) => {
        const webContents = event.sender;
        webContents.inspectElement(args.x, args.y);
        if (!webContents.isDevToolsOpened()) {
            webContents.openDevTools();
        }
    });
    // listen the channel `message` and resend the received message to the renderer process
    electron_1.ipcMain.on('message', (event, message) => {
        console.log(message);
        setTimeout(() => event.sender.send('message', 'hi from electron'), 500);
    });
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
    electron_1.powerMonitor.on('on-ac', () => {
        mainWindow.webContents.send('battery-status', 'AC');
    });
    electron_1.powerMonitor.on('on-battery', () => {
        mainWindow.webContents.send('battery-status', 'Battery');
    });
    const url = electron_is_dev_1.default
        ? 'http://localhost:8000/'
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, '../renderer/out/index.html'),
            protocol: 'file:',
            slashes: true,
        });
    mainWindow.loadURL(url);
});
// Quit the app once all windows are closed
electron_1.app.on('window-all-closed', electron_1.app.quit);
