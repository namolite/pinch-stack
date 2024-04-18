// @ts-nocheck
/**
 *  Electron window control menu
 */

export default function TitleBar() {
  /*
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    const draggableArea = document.querySelector('.menu-title')
    draggableArea?.addEventListener('contextmenu', preventContextMenu)
    return () => {
      draggableArea?.removeEventListener('contextmenu', preventContextMenu)
    };
  }, [])
  */

  return (
    <div className='title-bar h-12 w-full flex top-0 left-0 justify-between items-center' style={{ WebkitAppRegion: 'drag', WebkitUserSelect: 'none' }}>
      <div style={{ flex: 1 }}></div>
      <div className=" h-full flex right-0" style={{ WebkitAppRegion: 'no-drag' }}>
        <button onClick={() => window.electronAPI.windowMinimize()}> Minimize&nbsp; </button>
        <button onClick={() => window.electronAPI.windowMaximize()}> Maximize&nbsp; </button>
        <button onClick={() => window.electronAPI.windowClose()}> Close&nbsp;&nbsp; </button>
      </div>
    </div>
  )
}

