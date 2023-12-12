import React, { useState, useEffect } from "react"
import { useContextMenu } from "react-contexify"
import debug from "@Utils/debug"

import DocumentList from "@Components/documents/documentList"
import DocumentDisplay from "@Components/documents/documentDisplay"

export default function Document() {
  const { show } = useContextMenu()
  const showDefaultMenu = e => show({ id: "menu", event: e })
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
      <DocumentList
        props={documentListData}
      />
      <div className="w-60 h-60 bg-black" onContextMenu={showDefaultMenu}></div>
      <div className="w-60 h-60 bg-blue-500" onContextMenu={showNyaMenu}></div>
      <DocumentDisplay />
    </>
  )
}


const OpenContextMenu = () => <div style={{ color: "blue" }}>nya~</div>

const Cc = ({ data, position }: any) => (
  <ul id={"context-menu"} className="absolute" style={{ left: position.x, top: position.y }}>{
    data.map((item) => <li key={item.id} className="bg-gray-500 w-10">{item.title}</li>)
  }</ul>
)


