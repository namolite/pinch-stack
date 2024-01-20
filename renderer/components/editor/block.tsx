import React, { useEffect, useRef } from 'react'
import '@blocksuite/presets/themes/affine.css'
import { createEmptyPage, DocEditor } from '@blocksuite/presets'


const Editor = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const page = createEmptyPage().init()
    const editor = new DocEditor()
    editor.page = page

    if (editorRef.current) {
      editorRef.current.appendChild(editor)
    }

    return () => {
      // 清理工作（如果需要）
    }
  }, [])

  return <div ref={editorRef}></div>
}

export default Editor