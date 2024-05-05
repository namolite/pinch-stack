import { ReactNode } from "react"

const SettingTitle = (props: {text: string}) => {
  return (
    <div
      className="w-auto mt-6 mb-2 pb-2 font-semibold text-xl text-gray-700"
      style={{borderBottom:'1px solid rgba(55, 53, 47, 0.09)'}}
    >
      {props.text}
    </div>
  )
}

const SettingItem = (props: {title: string, text: string, children?: ReactNode}) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-col">
        <div className="mb-1">{props.title}</div>
        <div className="text-xs text-gray-500">{props.text}</div>
      </div>
      <div className="px-2">{props.children}</div>
    </div>
  )
}

const SettingInput = () => {
  return (
    <div
      className="flex w-auto items-center relative rounded cursor-text"
      style={{lineHeight:'20px', boxShadow:'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset', padding:'4px 10px', background:'rgba(242, 241, 238, 0.6)'}}
    >
      <input
        type="text"
        className="p-0"
        style={{background:'none', border:'none', outline: 'none'}}
        spellCheck="false"
      />
    </div>
  )
}

export { SettingTitle, SettingItem, SettingInput }