import Link from "next/link"
import React, { useState } from "react"

interface IItem {
  id: string,
  name: string,
  url: string,
  path?: string,
}

export default function DocumentListItem(itemProps: any, network: boolean) {
  // const [itemIntro, setItemIntro] = useState(props.url)

  return (
    <Link
      key={itemProps.id}
      href={network ? itemProps.url : itemProps.path}
      className=""
    >
      <div className=""></div>
    </Link>
  )
}