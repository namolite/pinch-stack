import Link from "next/link";

export default function Option({ props }: any) {
  return (
    <>{props.map((props: { id: string, path: string, ico: string }) => (
      <Link key={props.id} href={props.path} className="w-full">
        <div className='flex w-full h-full left-0 top-0 items-center justify-center'>
          <img className='menu-ico h-1/2' src={props.ico} />
        </div>
      </Link>
    ))}</>
  )
}