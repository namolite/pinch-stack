import { useState, useEffect } from 'react'
import Link from 'next/link'

import notification from '@Utils/notifications'

const IndexInner = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args)

    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', handleMessage)

    return () => {
      global.ipcRenderer.removeListener('message', handleMessage)
    }
  }, [])

  const onMessageClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Dashboard</h2>
      <h3>Dashboard</h3>
      <h4>Dashboard</h4>
      <h5>Dashboard</h5>
      <h6>Dashboard</h6>
      <br />
      <p>{'<p>test plain text</p>'}</p>
      <span>{'<span>test plain text</span>'}</span>
      <p>word break: The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
      <br />
      <button onClick={onMessageClick}>👉button👈</button>
      <br />
      <Link href="/about">link</Link>
      <br />
      <button onClick={notification('a', 'b', 'c')}>notification</button>
    </>
  )
}

export default IndexInner