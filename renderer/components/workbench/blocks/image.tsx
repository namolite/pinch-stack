import Image from "next/image"

type Props = {
  content: Content,
  style: any
}

interface Content {
  width: number,
  height: number,
  src: string,
  alt: string
}

export default function BlockImage({ content, style }: Props) {

  return(
    <div>
      <Image
        width={content.width}
        height={content.height}
        src={content.src}
        alt={content.alt}
      />
    </div>
  )
}