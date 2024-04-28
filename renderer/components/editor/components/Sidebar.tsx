import { useEffect, useState } from 'react';
import { Doc, Job, Y } from '@blocksuite/store';
import axios from 'axios'
import { createEmptyDoc, PageEditor } from '@blocksuite/presets';

import { useEditor } from '../context';


const Sidebar = () => {
  // const { provider, editor } = useEditor()!;
  const editorData = useEditor();
  const provider = editorData?.provider;
  const editor = editorData?.editor;
  
  const [docs, setDocs] = useState<Doc[]>([]);

  useEffect(() => {
    if (!provider || !editor) return;
    const { collection } = provider;
    const updateDocs = () => {
      setDocs(Array.from(collection.docs.values()));
      // setDocs([...collection.docs.values()]);
    };
    updateDocs();

    const disposable = [
      collection.slots.docUpdated.on(updateDocs),
      editor.slots.docLinkClicked.on(updateDocs),
    ];

    return () => disposable.forEach(d => d.dispose());
  }, [provider, editor]);

  const handleExport = async () => {
    const host = 'http://localhost:23333'
    try {
      const job = new Job(provider)
      const snapshot = await job.docToSnapshot(docs[0])
      // const data = 'data:text/json;charset=utf-8,'// + encodeURIComponent(JSON.stringify(snapshot, null, 2));
      // const data = JSON.stringify(snapshot, null, 2)
      const response = await axios.post(`${host}/api/doc/sync/`, {
        data: snapshot
      });
      // await downloadFile(docs[0].id + '.json', '', data)
    } catch (error) {
      console.error('Error exporting:', error)
    }
  }

  const handleImport = async () => {
    const host = 'http://localhost:23333'
    try {
      const job = new Job(provider)
      const response = await axios.get(`${host}/api/doc/sync/data`);
      // const data = JSON.parse(response.data)
      console.log(response.data.data)
      // const newPage = await job.snapshotToDoc(response.data.data)
      // const fileContent = response.data;


    } catch (error) {
      console.error('Error importing:', error);
    }
  }

  const nnn = () => {
    // const yDoc = new Y.doc({ gc: false })
    // console.log(docs)
    const d = provider.collection.docs
    console.log(d)
  }

  const newDoc = () => {
    const doc = provider.collection.createDoc()
    doc.load(() => {
      // 添加初始块元素
      const rootId = doc.addBlock('affine:page', {});
      doc.addBlock('affine:surface', {}, rootId);
      const noteId = doc.addBlock('affine:note', {}, rootId);
      doc.addBlock('affine:paragraph', {}, noteId);
      return doc;
    });
    doc.resetHistory()
    // const doc = createEmptyDoc().init()
    // const editor = new PageEditor();
    // editor.doc = doc;
    // console.log(doc)
    // const newPage = createDoc();
    // const currentPage = provider.collection.getDoc(pageId);
    // newPage.load()
  }

  const removeDoc = () => {
    // provider.collection.removeDoc("9AIqG31OEc")
  }

  const viewList = () => {
    console.log(Array.from(provider!.collection!.docs.values()))
  }


  return (
    <div className="sidebar">
      <div className="header">All Docs</div>
      <div className="doc-list">
        {docs.map(doc => (
          <div
            className={`doc-item ${editor?.doc === doc ? 'active' : ''}`}
            key={doc.id}
            onClick={() => {
              if (editor) editor.doc = doc;
              // setDocs([...provider!.collection!.docs.values()]);
              setDocs(Array.from(provider!.collection!.docs.values()));
            }}
          >
            {doc.meta?.title || 'Untitled'}
          </div>
        ))}
      </div>
      <div>
        <div>New Doc</div>
      </div>
      <button onClick={handleExport}>export</button>
      <br />
      <button onClick={handleImport}>import</button>
      <br />
      <button onClick={(() => { console.log(docs) })}>list</button>
      <br />
      <button onClick={nnn}>nnn</button>
      <br />
      <button onClick={newDoc}>newDoc</button>
      <br />
      <button onClick={removeDoc}>removeDoc</button>
      <br />
      <button onClick={viewList}>viewList</button>
    </div>
  );
};

export default Sidebar;
