'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// Extensions.
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import Typography from '@tiptap/extension-typography'
// import Highlight from '@tiptap/extension-highlight'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Strike from '@tiptap/extension-strike'
import Blockquote from '@tiptap/extension-blockquote'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Bold,
      Strike,
      Typography,
    ],
    content: '<p>Hello World! 🌎️</p>',
    autofocus: false,
    /**
     *  设置自动获取焦点
     * 
     *  ‘start’: 设置光标在编辑器文档的最前面
     *  ‘end’: 设置光标在编辑器文档的最后面
     *  ‘all’ 选中全部文档
     *  Number: 光标设置到文档中的特定位置
     *  true: 自动获取焦点
     *  false: 禁用自动获取焦点
     *  null: 禁用自动获取焦点
     */
    editable: true, // 是否可编辑
    history: true,  // 启用历史
  })

  return (
    <EditorContent editor={editor} />
  )
}


export default Tiptap