import { contextBridge, ipcRenderer } from 'electron';

// 创建一个安全的、受限的环境，只暴露必要的功能
contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel: string, data: any) => {
    // 可以在这里添加通道白名单以提高安全性
    const validChannels = ["inspect-element"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel: string, func: (...args: any[]) => void) => {
    const validChannels = ["fromMain"];
    if (validChannels.includes(channel)) {
      // 删除现有的监听器，避免重复
      ipcRenderer.removeAllListeners(channel);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
})