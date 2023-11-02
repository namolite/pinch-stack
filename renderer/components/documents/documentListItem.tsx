import Link from "next/link"
import React, { useState } from "react"

export default function DocumentListItem({title, path}) {
  // const [itemIntro, setItemIntro] = useState(props.url)

  // network ? itemProps.url : itemProps.path

  return (
    <Link
      href={path}
      className=""
    >{title}
      <div className=""></div>
    </Link>
  )
}