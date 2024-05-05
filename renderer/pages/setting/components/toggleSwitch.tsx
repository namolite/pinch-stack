import React, { useState } from "react"

export default function ToggleSwitch(props) {
  const { optPri, optSec, optTer, activeMode, setActiveMode } = props
  const setMode = (mode: number) => {
    setActiveMode(mode);
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center py-1">
        <div className="sidelist-bar-bg h-full w-full rounded-lg">
          <div className="inline-flex rounded-lg text-sm font-medium">
            <button
              className={`rounded-lg py-1 px-3 w-1/3 ${activeMode === 0 ? 'sidelist-bar-button-active' : 'sidelist-bar-button'}`}
              onClick={() => setMode(0)}
            >
              {optPri}
            </button>
            <button
              className={`rounded-lg py-1 px-3 w-1/3 mx-015 ${activeMode === 1 ? 'sidelist-bar-button-active' : 'sidelist-bar-button'}`}
              onClick={() => setMode(1)}
            >
              {optSec}
            </button>
            <button
              className={`rounded-lg py-1 px-3 w-1/3 ${activeMode === 2 ? 'sidelist-bar-button-active' : 'sidelist-bar-button'}`}
              onClick={() => setMode(2)}
            >
              {optTer}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// style btns, btns-active, btns::hover (bg colours & text colours) shadow
