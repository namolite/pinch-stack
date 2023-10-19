import { useState, useEffect } from "react"


export default function BlockContent({ props }: any) {
  const [block, setBlock] = useState([])
  
  useEffect(() => {
    const fetchBlockData = () => {}
  })

  return(
    <div className="block bg-gray-300 w-3 block-col-3">
      <div className="flex flex-col">
        { props?.map((data) => { return <data.type key={data.type} contents={data.content} style={data.style} /> })}
      </div>
    </div>
  )
}