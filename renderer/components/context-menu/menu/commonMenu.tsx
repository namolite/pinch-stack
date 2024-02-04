import { Menu, Item, Separator, Submenu } from "react-contexify"
import 'react-contexify/dist/ReactContexify.css'

export default function CommonMenu() {
  const MENU_ID = "default"

  return (
    <Menu id={MENU_ID}>
      <Item onClick={null}>
        Inspect
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



