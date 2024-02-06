
/**
 * 
 *  Electron window control menu
 * 
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
    <div className='menu-title w-full flex top-0 left-0 fixed justify-between items-center' style={{ WebkitAppRegion: 'drag', WebkitUserSelect: 'none' }}>
      <div className="absolute h-full flex right-0" style={{ WebkitAppRegion: 'no-drag' }}>
        <button onClick={() => window.electronAPI.windowMinimize()}>最小化</button>
        <button onClick={() => window.electronAPI.windowMaximize()}>最大化</button>
        <button onClick={() => window.electronAPI.windowClose()}>关闭</button>
      </div>
    </div>
  )
}

