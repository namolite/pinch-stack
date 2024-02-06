/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { contextBridge, ipcRenderer } from 'electron'

/*
declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer
    }
  }
}
*/
contextBridge.exposeInMainWorld('electronAPI', {
  windowMinimize: () => ipcRenderer.send('windowMinimize'),
  windowMaximize: () => ipcRenderer.send('windowMaximize'),
  windowClose: () => ipcRenderer.send('windowClose'),
  inspectElement: () => ipcRenderer.send('inspectElement'),
  send: (channel: string, data: any) => {
    const validChannels = ['windowMinimize','windowMaximize','windowClose','inspectElement']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  on: (channel: string, func: (...args: any[]) => void) => {
    const validChannels = ["fromMain"]
    if (validChannels.includes(channel)) {
      ipcRenderer.removeAllListeners(channel)
      ipcRenderer.on(channel, (_s, ...args) => func(...args))
    }
  },
  off: (channel: string, func: (...args: any[]) => void) => {
    const validChannels = ['message']
    if (validChannels.includes(channel)) {
      ipcRenderer.removeListener(channel, func)
    }
  }
})

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
// process.once('loaded', () => { global.ipcRenderer = ipcRenderer })
