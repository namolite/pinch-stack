import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import '../utils/notifications'
import notification from '../utils/notifications'

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args)

    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', handleMessage)

    return () => {
      global.ipcRenderer.removeListener('message', handleMessage)
    }
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  return (
    <Layout title="Pinch Stack | Home">
      <h1>Hello 👋</h1>
      <button onClick={onSayHiClick}>Say hi</button>
      <p>
        <Link href="/about">About</Link>
      </p>
      <button onClick={notification('a', 'b', 'c')}>no</button>
    </Layout>
  )
}

export default IndexPage
