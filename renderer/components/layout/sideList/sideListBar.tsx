import React, { useState } from "react"

export default function SideListBar() {
  const [activeMode, setActiveMode] = useState('All')
  const setMode = (mode: string) => {
    setActiveMode(mode);
  };
  
  return (
    <div className="sidelist-bar flex items-center justify-center">
      <div className="flex justify-center items-center py-1">
        <div className="sidelist-bar-bg h-full w-full rounded-lg">
          <div className="inline-flex rounded-lg text-sm font-medium">
            <button
              className={`rounded-lg py-1 px-3 w-1/3 ${activeMode === 'All' ? 'sidelist-bar-button-active' : 'sidelist-bar-button'}`}
              onClick={() => setMode('All')}
            >
              All
            </button>
            <button
              className={`rounded-lg py-1 px-3 w-1/3 mx-015 ${activeMode === 'Page' ? 'sidelist-bar-button-active' : 'sidelist-bar-button'}`}
              onClick={() => setMode('Page')}
            >
              Page
            </button>
            <button
              className={`rounded-lg py-1 px-3 w-1/3 ${activeMode === 'Info' ? 'sidelist-bar-button-active' : 'sidelist-bar-button'}`}
              onClick={() => setMode('Info')}
            >
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// style btns, btns-active, btns::hover (bg colours & text colours) shadow
