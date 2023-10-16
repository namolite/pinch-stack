export default function BlockText({ props, style }: any) {
  console.log(style)
  return (
    <div className="m-2 rounded">{
      props.map((text: string) => {
        return (<p key={text}>{text}</p>)
      })
    }</div>
  )
}