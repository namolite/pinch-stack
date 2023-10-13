import { useState, useEffect } from "react"

import BlockImage from "@Components/workbench/blocks/image"
import BlockText from "@Components/workbench/blocks/text"

export default function BlockContent() {
  const [block, setBlock] = useState([])
  
  useEffect(() => {
    const fetchBlockData = () => {}
  })

  const blockData = [
    {'type': BlockText, 'content': ['dadasdasd', 'sfsdfsdfsfs', 'sffsdfsdfsf']},
    {'type': BlockImage, 'content': [0, 0, '', '']}
  ]

  return(
    <div className="block bg-gray-300 w-3 h-9 block-col-3">
      <div className="flex flex-col">
        { blockData.map((data) => { return <data.type key={data.type} props={data.content} /> })}
      </div>
    </div>
  )
}