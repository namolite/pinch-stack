import React, { useEffect, useRef } from 'react';
import '@blocksuite/presets/themes/affine.css';
import { createEmptyDoc, PageEditor } from '@blocksuite/presets'
import { AffineSchemas } from '@blocksuite/blocks';
import { Schema, DocCollection } from '@blocksuite/store';
import { Text } from '@blocksuite/store'
import { IndexeddbPersistence } from 'y-indexeddb'
import { Job } from '@blocksuite/store'


const EditorProvider = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const doc = createEmptyDoc().init()
      const editor = new PageEditor()
      editor.doc = doc;

    if (editorRef.current) {
      editorRef.current.appendChild(editor)
    }

    return () => {
      // 清理工作
    }
  }, [])

  console.log()

  return <div ref={editorRef}></div>
}

/*function EditorProvider() {
  useEffect(() => {
    async function initializeEditor() {
      // Init editor with default block tree
      const doc = createEmptyDoc().init();
      const editor = new PageEditor();
      editor.doc = doc;
      document.body.appendChild(editor);

      // Update block node with some initial text content
      const paragraphs = doc.getBlockByFlavour('affine:paragraph');
      const paragraph = paragraphs[0];
      doc.updateBlock(paragraph, { text: new Text('Hello World!') });
    }

    initializeEditor();

    // Clean up function to remove the editor when component unmounts
    return () => {
      const editor = document.querySelector('.page-editor')
      if (editor) {
        editor.remove()
      }
    };
  }, [])
}*/

/*function App() {
  useEffect(() => {
    async function initializeEditor() {
      // Initialize schema and doc
      const schema = new Schema().register(AffineSchemas);
      const collection = new DocCollection({ schema });
      const doc = collection.createDoc();

      await doc.load(() => {
        const rootBlockId = doc.addBlock('affine:page', {});
        doc.addBlock('affine:surface', {}, rootBlockId);
        const noteId = doc.addBlock('affine:note', {}, rootBlockId);
        doc.addBlock('affine:paragraph', {}, noteId);
      });

      // Init editor with default block tree
      const editor = new PageEditor();
      editor.doc = doc;
      document.body.appendChild(editor);

      // Update block node with some initial text content
      const paragraphs = doc.getBlockByFlavour('affine:paragraph');
      const paragraph = paragraphs[0];
      doc.updateBlock(paragraph, { text: new Text('Hello World!') });
    }

    initializeEditor();

    // Clean up function to remove the editor when component unmounts
    return () => {
      const editor = document.querySelector('.page-editor');
      if (editor) {
        editor.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything, as the editor is appended directly to the DOM
}*/


export default EditorProvider