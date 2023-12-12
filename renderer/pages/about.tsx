import Link from 'next/link'

import CustomTitle from '@Components/title'

import { useContextMenu } from 'react-contexify'
import Tiptap from '@Components/editor/tiptap'

const customTitle = 'pinch! dev mode ~/about/'

const AboutPage = () => {
  const { show } = useContextMenu()
  const showEditorMenu = e => show({ id: "editor", event: e })
  
  return(
  <>
    <CustomTitle customTitle={customTitle} />
    <h1>About</h1>
    <p onContextMenu={showEditorMenu}>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
    <div onContextMenu={showEditorMenu}>
    <Tiptap />
    </div>
    
  </>)
}

export default AboutPage
