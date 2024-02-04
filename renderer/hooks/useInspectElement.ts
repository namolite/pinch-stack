import { ipcRenderer } from 'electron';

/**
 * 
 *  Inspect elements like MS Edge in context menu
 * 
 */

const useInspectElement = () => {
  const handleInspectElement = (event: React.MouseEvent) => {
    event.preventDefault();

    // 发送 IPC 消息，并附带点击位置的屏幕坐标
    ipcRenderer.send('inspect-element', { x: event.clientX, y: event.clientY });
  };

  return handleInspectElement;
};

export default useInspectElement;