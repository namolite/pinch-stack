import Image from "next/image"

type Props = {
  key: string
  contents: Content,
  style: any
}

interface Content {
  width: number,
  height: number,
  src: string,
  alt: string
}

export default function BlockImage({ contents, style }: Props) {
  // TODO Feature: Styling Components...

  return(
    <div>
      <Image
        width={contents.width}
        height={contents.height}
        src={contents.src}
        alt={contents.alt}
      />
    </div>
  )
}