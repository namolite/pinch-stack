// @ts-nocheck
import Link from 'next/link'
import dynamic from 'next/dynamic'

import CustomTitle from '@Components/title'

import { useContextMenu } from 'react-contexify'
// import EditorProvider from '@Components/editor/blocksuite'
// import Editor from '@Components/editor/editor'
import { DocCollection } from '@blocksuite/store';

const customTitle = 'pinch! dev mode ~/about/'

// import '@blocksuite/presets/themes/affine.css';
// import { createEmptyPage, DocEditor } from '@blocksuite/presets';

// const page = createEmptyPage().init();
// const editor = new DocEditor();
// editor.page = page;
// document.body.appendChild(editor);  <EditorProvider />

const Editor = dynamic(() => import('@Components/editor/editor'), {
  ssr: false,
})

const AboutPage = () => {
  const { show } = useContextMenu()
  const showEditorMenu = e => show({ id: "editor", event: e })
  
  return(
  <>
    <CustomTitle customTitle={customTitle} />
    <div className='overflow-visible'>
      <Editor />
    </div>
  </>)
}

export default AboutPage
