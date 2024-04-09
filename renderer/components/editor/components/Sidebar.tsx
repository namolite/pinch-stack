import { useEffect, useState } from 'react';
import { Doc, Job } from '@blocksuite/store';
import { useEditor } from '../context';


import { initEditor } from '../init'
import { DocCollection, Schema } from '@blocksuite/store'
import { exportSnapshot } from '../dataSync'


const Sidebar = () => {
  const { provider, editor } = useEditor()!;
  const [docs, setDocs] = useState<Doc[]>([]);

  useEffect(() => {
    if (!provider || !editor) return;
    const { collection } = provider;
    const updateDocs = () => {
      setDocs([...collection.docs.values()]);
    };
    updateDocs();

    const disposable = [
      collection.slots.docUpdated.on(updateDocs),
      editor.slots.docLinkClicked.on(updateDocs),
    ];

    return () => disposable.forEach(d => d.dispose());
  }, [provider, editor]);

  const aaaa = async () => {
    const job = new Job(provider)
    const snapshot = await job.docToSnapshot(docs[0])
     const data =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(snapshot, null, 2));
    // TODO Feature: Encryption & Compress Binary File.
    const anchor = document.createElement('a');
    anchor.setAttribute('href', data);
    anchor.setAttribute('download', `636ycoX8f8.pinch`);
    anchor.click();
    anchor.remove();
  }

  const bbbb = async () => {
    // const job = new Job(provider)

    const data = 1
    console.log(data)
    // const newPage = await job.snapshotToPage(json)
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
              setDocs([...provider!.collection!.docs.values()]);
            }}
          >
            {doc.meta?.title || 'Untitled'}
          </div>
        ))}
      </div>
      <button onClick={aaaa}>export</button>
      <button onClick={bbbb}>import</button>
    </div>
  );
};

export default Sidebar;
