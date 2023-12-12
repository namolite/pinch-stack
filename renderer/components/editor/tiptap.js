'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// Extensions.
import Document from '@tiptap/extension-document'
import History from '@tiptap/extension-history'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import HardBreak from '@tiptap/extension-hard-break'
import Typography from '@tiptap/extension-typography'
import CharacterCount from '@tiptap/extension-character-count'

import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Code from '@tiptap/extension-code'
import Link from '@tiptap/extension-link'

import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import CodeBlock from '@tiptap/extension-code-block'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

const limit = 30

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      History,
      Paragraph,
      Text,
      HardBreak,
      Typography,
      CharacterCount.configure({
        limit,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Bold,
      Italic,
      Strike,
      Underline,
      Highlight,
      Code,
      Link,
      OrderedList,
      BulletList,
      ListItem,
      Blockquote,
      HorizontalRule,
      CodeBlock,
      Table,
      TableCell,
      TableHeader,
      TableRow,
    ],
    content: '<p>Hello World! 🌎️</p>',
    autofocus: false, // 自动聚焦
    /** 设置自动获取焦点
     *  
     *  ‘start’: 设置光标在编辑器文档的最前面
     *  ‘end’: 设置光标在编辑器文档的最后面
     *  ‘all’ 选中全部文档
     *  Number: 光标设置到文档中的特定位置
     *  true: 自动获取焦点
     *  false: 禁用自动获取焦点
     *  null: 禁用自动获取焦点
     */
    editable: true,   // 是否可编辑
    history: true,    // 启用历史
  })

  if (!editor) {
    return null
  }

  return (
    <div>
      <EditorContent editor={editor} />
      <div className="character-count">
        {editor.storage.characterCount.characters()}/{limit} characters
        <br />
        {editor.storage.characterCount.words()} words
      </div>
    </div>
  )
}


export default Tiptap