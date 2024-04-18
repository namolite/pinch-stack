"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const electron_1 = require("electron");
/*
declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer
    }
  }
}
*/
electron_1.contextBridge.exposeInMainWorld('electronAPI', {
    windowMinimize: () => electron_1.ipcRenderer.send('windowMinimize'),
    windowMaximize: () => electron_1.ipcRenderer.send('windowMaximize'),
    windowClose: () => electron_1.ipcRenderer.send('windowClose'),
    inspectElement: () => electron_1.ipcRenderer.send('inspectElement'),
    send: (channel, data) => {
        const validChannels = ['windowMinimize', 'windowMaximize', 'windowClose', 'inspectElement'];
        if (validChannels.includes(channel)) {
            electron_1.ipcRenderer.send(channel, data);
        }
    },
    on: (channel, func) => {
        const validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            electron_1.ipcRenderer.removeAllListeners(channel);
            electron_1.ipcRenderer.on(channel, (_s, ...args) => func(...args));
        }
    },
    off: (channel, func) => {
        const validChannels = ['message'];
        if (validChannels.includes(channel)) {
            electron_1.ipcRenderer.removeListener(channel, func);
        }
    },
    download: async (url) => {
        try {
            const response = await electron_1.ipcRenderer.invoke('download', { url });
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
});
// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
// process.once('loaded', () => { global.ipcRenderer = ipcRenderer })
