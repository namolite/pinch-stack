import { ReactElement } from "react"

type Props =  {
  key: ReactElement | null
  contents: string[],
  style: any
}

export default function BlockText({ contents, style }: Props) {
  // TODO Feature: Styling Components...

  // DEBUG
  console.log(style)

  return (
    <div className="m-2 rounded">{
      contents.map((text: string) => {
        return (<p key={text}>{text}</p>)
      })
    }</div>
  )
}