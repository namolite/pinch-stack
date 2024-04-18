import debug from "@Utils/debug";
/**
 * 
 *  Inspect elements in context menu like Microsoft Edge
 * 
 *  Use in development only
 * 
 */

const useInspectElement = () => {
  const handleInspectElement = (event: React.MouseEvent) => {
    event.preventDefault();
    debug.log(event)
    // ipcRenderer.send('inspect-element', { x: event.clientX, y: event.clientY });
    // window.electronAPI.inspectElement('inspect-element', { x: event.clientX, y: event.clientY })
  };

  return handleInspectElement;
};

export default useInspectElement;