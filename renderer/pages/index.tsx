import { useState, useEffect } from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import '../utils/notifications'
import notification from '../utils/notifications'

const IndexPage = () => {
  // TODO Component: Workbench 

  // TODO Hooks: Update Infomation
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
    <Layout title="Pinch Stack | Home">
      <h1>Dashboard</h1>
      <h2>Dashboard</h2>
      <h3>Dashboard</h3>
      <h4>Dashboard</h4>
      <h5>Dashboard</h5>
      <h6>Dashboard</h6>
      <button onClick={onMessageClick}>👉message👈</button>
      <p>
        <Link href="/about">About</Link>
      </p>
      <button onClick={notification('a', 'b', 'c')}>no</button>
    </Layout>
  )
}

export default IndexPage
