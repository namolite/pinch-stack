import { Menu, Item, RightSlot, Separator, Submenu } from "react-contexify"
import 'react-contexify/dist/ReactContexify.css'

export default function EditorMenu() {
  const MENU_ID = "editor"

  const matchShortcut = (e: KeyboardEvent) => e.metaKey && e.key === 'f';

  return (
    <Menu id={MENU_ID}>
      <Submenu label="Text Formatting">
        <Item onClick={null} keyMatcher={matchShortcut}>Blod<RightSlot>⌘ + F</RightSlot></Item>
        <Item onClick={null}>Italic</Item>
        <Item onClick={null}>Strike</Item>
      </Submenu>
      <Item onClick={null}>Copy</Item>
      <Item onClick={null}>Paste</Item>
      <Item onClick={null}>Delete</Item>
      <Separator />
      <Item disabled>Disabled</Item>
      <Separator />
      <Submenu label="Block">
        <Item onClick={null}>Code</Item>
        <Item onClick={null}>Quote</Item>
      </Submenu>
    </Menu>
  )
}