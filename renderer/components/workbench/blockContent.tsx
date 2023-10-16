import { useState, useEffect } from "react"

import BlockImage from "@Components/workbench/blocks/image"
import BlockText from "@Components/workbench/blocks/text"

export default function BlockContent() {
  const [block, setBlock] = useState([])
  
  useEffect(() => {
    const fetchBlockData = () => {}
  })

  const blockData = [
    {'type': BlockText, 'content': ['dadasdasd', 'sfsdfsdfsfs', 'sffsdfsdfsf'], 'style': {'background': 1}},
    {'type': BlockImage, 'content': {'width': 100, 'height': 100, 'src': '/images/test_1.jpg', 'alt': '嘤嘤嘤'}, 'style': {'background': 1}}
  ]

  return(
    <div className="block bg-gray-300 w-3 block-col-3">
      <div className="flex flex-col">
        { blockData.map((data) => { return <data.type key={data.type} contents={data.content} style={data.style} /> })}
      </div>
    </div>
  )
}