import { useAtom } from "jotai"
import { docListDataAtom } from "@Utils/states"
import { Doc, Job } from "@blocksuite/store"
import { useState, useEffect } from "react"
import axios from "axios"

const SideListSchedule = () => {
  const [loading, setLoading] = useState(true)
  const [editorAtom, setEditorAtom] = useAtom(docListDataAtom)
  const [docs, setDocs] = useState<Doc[]>([])

  useEffect(() => {
    if (!editorAtom) {
      setLoading(true)
      return
    }

    const docMap = editorAtom.provider?.collection?.docs

    if (docMap === undefined) {
      setLoading(true);
      return;
    }

    setDocs(Array.from(docMap?.values()))

    setLoading(false)
  }, [editorAtom])

  
  const provider = editorAtom?.provider
  const editor = editorAtom?.editor

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

  return (
    <div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (docs.map(doc => (
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
        )))}
      <button onClick={handleExport}>export</button>
      <br />
      <button onClick={handleImport}>import</button>
      <br />
    </div>
  )
}

export default SideListSchedule