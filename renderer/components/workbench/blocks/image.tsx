import Image from "next/image"

export default function BlockImage({ props }: any) {
  interface props{
    width: number,
    height: number,
    src: string,
    alt: string
  }

  return(
    <div>
      <Image
        width={props.width}
        height={props.height}
        src={props.src}
        alt={props.alt}
      />
    </div>
  )
}