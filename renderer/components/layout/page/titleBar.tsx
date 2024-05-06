// @ts-nocheck
/**
 *  Electron window control menu
 */
import { useState, useEffect } from "react"


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
  const [windowStatus, setWindowStatus] = useState(false)

  useEffect(() => {
    // const handleWindowStatus = () => {
    //   setWindowStatus(window.electronAPI.windowStatus());
    // };
    //window.addEventListener('resize', handleWindowStatus);
    //return () => window.removeEventListener('resize', handleWindowStatus);
  }, [])

  const handleMaximize = async () => {
    window.electronAPI.windowMaximize();
    window.electronAPI.windowStatus().then(status => {
      setWindowStatus(status);
      console.log(status)
    });

  }

  return (
    <div className='title-bar h-12 w-full flex top-0 left-0 justify-between items-center sticky' style={{ WebkitAppRegion: 'drag', WebkitUserSelect: 'none' }}>
      <div style={{ flex: 1 }}></div>
      <div className=" h-full flex right-0" style={{ WebkitAppRegion: 'no-drag' }}>
        <button onClick={() => window.electronAPI.windowMinimize()}><MinIcon /></button>
        <button onClick={() => handleMaximize()}><MaxIcon status={windowStatus} /></button>
        <button onClick={() => window.electronAPI.windowClose()}><CloseIcon /></button>
      </div>
    </div>
  )
}

const MinIcon = () => (
  <div className="flex h-full w-14 items-center justify-center hover:bg-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em" height="1.2em"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          d="M3.755 12.5h16.492a.75.75 0 1 0 0-1.5H3.755a.75.75 0 0 0 0 1.5z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  </div>
)

const MaxIcon = (props: { status: 'maximize' | 'restored' }) => (
  <div className="flex h-full w-14 items-center justify-center hover:bg-gray-200">
    {
      (props.status === 'restored') ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em" height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em" height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 4a1 1 0 0 0-2 0v2.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0 0 2h2.5A2.5 2.5 0 0 0 9 6.5zm0 16a1 1 0 1 1-2 0v-2.5a.5.5 0 0 0-.5-.5H4a1 1 0 1 1 0-2h2.5A2.5 2.5 0 0 1 9 17.5zm7-17a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 17.5 9H20a1 1 0 1 0 0-2h-2.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1m-1 17a1 1 0 1 0 2 0v-2.5a.5.5 0 0 1 .5-.5H20a1 1 0 1 0 0-2h-2.5a2.5 2.5 0 0 0-2.5 2.5z"
          ></path>
        </svg>
      )
    }
  </div>
)


const CloseIcon = () => (
  <div className="flex h-full w-14 items-center justify-center hover:bg-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em" height="1.2em"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
        ></path>
        <path
          fill="currentColor"
          d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z"
        >
        </path>
      </g>
    </svg>
  </div>
)