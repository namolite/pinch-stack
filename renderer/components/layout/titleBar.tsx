

export default function TitleBar() {
  return (
    <div className='menu-title'>
      <div id="menu-title-btns">
        <button id="ctl-min" onClick={() => window.electronAPI.windowMinimize()}>最小化</button>
        <button id="ctl-max" onClick={() => window.electronAPI.windowMaximize()}>最大化</button>
        <button id="ctl-close" onClick={() => window.electronAPI.windowClose()}>关闭</button>
      </div>
    </div>
  )
}

