import { Menu, Item, Separator, Submenu } from "react-contexify"
import 'react-contexify/dist/ReactContexify.css'

export default function NyaMenu() {
  const MENU_ID = "nya"

  return (
    <Menu id={MENU_ID}>
      <Item onClick={null}>
        Item 114514
      </Item>
      <Item onClick={null}>
        Item 2
      </Item>
      <Separator />
      <Item disabled>Disabled</Item>
      <Separator />
      <Submenu label="Submenu">
        <Item onClick={null}>
          Sub Item 1
        </Item>
        <Item onClick={null}>Sub Item 2</Item>
      </Submenu>
    </Menu>
  )
}