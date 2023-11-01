import { Menu, Item, Separator, Submenu, useContextMenu } from "react-contexify"
import "react-contexify/dist/ReactContexify.css"

// TODO Fix: Context menu overflow window.(need reposition submenu)
const ContextMenu = ({ props }: any) => {
  const MENU_ID = props.id
  return (
    <>{
      props.menu.map((menu) => {})
    }</>
  )
}



