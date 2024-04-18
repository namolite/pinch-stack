import { useEffect, useState } from 'react';
import { Doc, Job } from '@blocksuite/store';
import { useEditor } from '../context';
// import { downloadFile, uploadFile } from '@Utils/file';


const Sidebar = () => {
  const { provider, editor } = useEditor()!;
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

  /*const handleExport = async () => {
    try {
      const job = new Job(provider)
      const snapshot = await job.docToSnapshot(docs[0])
      const data =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(snapshot, null, 2));
      await downloadFile(docs[0].id + '.json', '', data)
    } catch (error) {
      console.error('Error exporting:', error)
    }
  }

  const handleImport = async () => {
    try {
      const fileContent = ''
      await uploadFile(fileContent)
    } catch (error) {
      console.error('Error importing:', error);
    }
  }*/

  const handleExport = async () => {
    console.log('')
  }
  const handleImport = async () => {
    console.log('')
    // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
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
      <button onClick={handleExport}>export</button>
      <br />
      <button onClick={handleImport}>import</button>
    </div>
  );
};

export default Sidebar;
