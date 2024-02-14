import React, { useState, useEffect } from "react"
import { useContextMenu } from "react-contexify"
import debug from "@Utils/debug"

import DocumentList from "@Components/documents/documentList"
import DocumentDisplay from "@Components/documents/documentDisplay"

export default function Document() {
  const { show } = useContextMenu()
  const showDefaultMenu = e => show({ id: "default", event: e })
  const showNyaMenu = e => show({ id: "nya", event: e })

  const [documentListData, setDocumentListData] = useState<any | null>(null)

  useEffect(() => {
    async function fetchDocumentList() {
      const list = await getDocumentList()
      setDocumentListData(list)
    }
    fetchDocumentList()
    debug.log(documentListData)
  })

  const getDocumentList = () => {
    const listProps = require('@Data/document_list')
    return listProps
  }
  // TODO(Done) Feature: Context menu.

  /*const [clicked, setClicked] = useState(false)
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const offClickHandler = (event) => {
    if (contextRef.current && !contextRef.current.contains(event.target)) {
      setContextData({ ...contextData, visible: false })
    }
  }
  return (
    <div
      className="w-40 h-40 bg-black"
      onContextMenu={(e) => {
        e.preventDefault()
        setClicked(true)
        setPoints({
          x: e.pageX,
          y: e.pageY,
        })
        debug.log(`clicked on (${e.pageX}, ${e.pageY})`)
      }}
    ><Cc data={dummyData} position={points} /></div>
  */
  return (
    <>
      <DocumentDisplay />
      <div className="flex" onContextMenu={showDefaultMenu}>
        <main>
          <div onContextMenu={showNyaMenu}>
            <h1 className="text-4xl font-bold mb-6">Templates Galleries</h1>
            <p className="text-gray-700 mb-4">No matter if you're organizing your personal life or getting things done at work, our templates galleries have got you covered!</p>
            <p className="text-gray-700 mb-4">Here We offer a wide range of resources to meet your unique needs and help you achieve your goals, whether in your personal or professional life.</p>
            <hr className="my-6" />
            <p className="text-gray-700 mb-4">Tired of managing your notes or coming up with an efficient work plan? Whether you're a student, parent, or have diverse interests, here we provide a few templates to kick off your journey and unlock your true potential with AFFiNe and reap incredible benefits.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-home text-gray-500 mr-2"></i>
                <p className="text-gray-700 font-semibold">Personal Home</p>
              </div>
              <p className="text-gray-500 ml-6">Staying organized and efficient in a dynamic work environment is essential for today's working people. AFFiNe elevates productivity for project managers, software engineers, and professionals alike. We're excited to provide insights into how AFFiNe transforms work life.</p>
              <div className="flex items-center">
                <i className="fas fa-briefcase text-gray-500 mr-2"></i>
                <p className="text-gray-700 font-semibold">Working Home</p>
              </div>
            </div>
            <DocumentList
              props={documentListData}
            />
          </div>
        </main >
      </div>
    </>
  )
}


const OpenContextMenu = () => <div style={{ color: "blue" }}>nya~</div>

const Cc = ({ data, position }: any) => (
  <ul id={"context-menu"} className="absolute" style={{ left: position.x, top: position.y }}>{
    data.map((item) => <li key={item.id} className="bg-gray-500 w-10">{item.title}</li>)
  }</ul>
)


