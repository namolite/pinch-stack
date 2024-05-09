import { useAtom } from "jotai"
import { docListDataAtom } from "@Utils/states"
import { Doc, Job } from "@blocksuite/store"
import { useState, useEffect } from "react"
import axios from "axios"
import { Loader } from 'rsuite'

const SideListSchedule = () => {
  const [loading, setLoading] = useState(true)
  const [editorAtom, setEditorAtom] = useAtom(docListDataAtom)
  const [docs, setDocs] = useState<Doc[]>([])
  const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(0)
  // TODO: Feature: Add Tags.

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
      const response = await axios.post(`${host}/api/doc/sync/`, {
        data: snapshot
      });
    } catch (error) {
      console.error('Error exporting:', error)
    }
  }

  const handleImport = async () => {
    const host = 'http://localhost:23333'
    try {
      const job = new Job(provider)
      const response = await axios.get(`${host}/api/doc/sync/data`);
    } catch (error) {
      console.error('Error importing:', error);
    }
  }

  const newDoc = () => {
    const doc = provider.collection.createDoc()
    doc.load(() => {
      const rootId = doc.addBlock('affine:page', {});
      doc.addBlock('affine:surface', {}, rootId);
      const noteId = doc.addBlock('affine:note', {}, rootId);
      doc.addBlock('affine:paragraph', {}, noteId);
      return doc;
    });
    doc.resetHistory()
  }

  const removeDoc = () => {
    // TODO: Delete Doc
    // provider.collection.removeDoc("9AIqG31OEc")
  }

  const viewList = () => {
    console.log(Array.from(provider!.collection!.docs.values()))
  }
  const ld = 'a'

  // FIXME: Auto Renderer When Data Update
  return (
    <div className="flex flex-col pt-1 px-1">
      <div>
        <div className="px-1">
          <span className="text-label font-bold text-gray-500">{'Document'}</span>
        </div>
        {
          loading ? (
            <div className="flex w-full h-20 items-center justify-center">
              <Loader className=" items-center justify-center" content="Loading..." vertical />
            </div>
          ) : (docs.map((doc, index) => (
            <div
              className={`doc-item ${editor?.doc === doc ? 'doc-active' : ''} flex items-center my-1 py-1 doc-bar`}
              key={doc.id}
              onClick={() => {
                if (editor) editor.doc = doc;
                // setDocs([...provider!.collection!.docs.values()]);
                setDocs(Array.from(provider!.collection!.docs.values()))
                setSelectedDocIndex(index)
                if (editor) editor.doc = doc;
              }}
            >
              <div className="px-2 pb-0.5 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                {doc.meta?.title || 'Untitled'}
              </div>
            </div>
          )))}
      </div>
      <div>
        <div className="px-1">
          <span className="text-label font-bold text-gray-500">{'Menu'}</span>
        </div>
        <DocMenuOpion id={'Export'} hook={handleExport} />
        <DocMenuOpion id={'Sync'} hook={handleImport} />
        <DocMenuOpion id={'New Docment'} hook={newDoc} />
        <DocMenuOpion id={'Remove Document'} hook={removeDoc} />
        <DocMenuOpion id={'View List'} hook={viewList} />
      </div>
    </div>
  )
}

const DocMenuOpion = (props: { id, hook }) => (
  <div
    className={`doc-item flex items-center my-1 py-1 doc-bar`}
    key={props.id}
    onClick={props.hook}
  >
    <div className="px-2 pb-0.5 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
      {props.id}
    </div>
  </div>
)

export default SideListSchedule