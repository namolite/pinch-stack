import { useState, useEffect } from "react"


export default function BlockContent({ props }: any) {
  return(
    <div className="block bg-gray-300 w-3 block-col-3">
      <div className="flex flex-col">
        { props?.map((data) => <data.type key={data.type} contents={data.content} style={data.style} /> )}
      </div>
    </div>
  )
}