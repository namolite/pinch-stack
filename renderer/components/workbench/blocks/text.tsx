export default function BlockText({ props }: any) {
  console.log(props)
  return(
    <div>{
      props.map((text: string) => {
        <p>{text}</p>
      })
    }</div>
  )
}