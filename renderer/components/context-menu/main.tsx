import { Menu, Item, Separator, Submenu, useContextMenu } from "react-contexify"
import "react-contexify/dist/ReactContexify.css"

// TODO Fix: Context menu overflow window.(need reposition submenu)
// TODO Feature: Inject different styles for each menu. 
const ContextMenu = ({ props }: any) => {
  const MENU_ID = props.id
  return (
    <>{
      props.menu.map((menu) => {})
    }</>
  )
}



