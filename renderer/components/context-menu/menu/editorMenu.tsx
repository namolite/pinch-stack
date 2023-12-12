import { Menu, Item, RightSlot, Separator, Submenu } from "react-contexify"
import 'react-contexify/dist/ReactContexify.css'

export default function EditorMenu() {
  const MENU_ID = "editor"
  // TODO Style: Separator text style fix.
  // TODO Fix: Menu event is null.
  // TODO Fix: Menu shortcut won't prevent editor shortcut.
  const matchShortcut = (e: KeyboardEvent) => e.metaKey && e.key === 'b';

  return (
    <Menu id={MENU_ID}>
      <Submenu label="Text Formatting">
        <Item onClick={null} keyMatcher={matchShortcut}>Blod<RightSlot>⌘B</RightSlot></Item>
        <Item onClick={null}>Italic<RightSlot>⌘I</RightSlot></Item>
        <Item onClick={null}>Strike<RightSlot>⌥5</RightSlot></Item>
        <Item onClick={null}>Underline<RightSlot>⌘U</RightSlot></Item>
        <Item onClick={null}>Highlight<RightSlot>⌘H</RightSlot></Item>
        <Item onClick={null}>Code<RightSlot>⌘E</RightSlot></Item>
        <Item onClick={null}>Link<RightSlot>⌘L</RightSlot></Item>
      </Submenu>
      <Submenu label="Block">
        <Item onClick={null}>Code</Item>
        <Item onClick={null}>Quote</Item>
        <Item onClick={null}>Divider</Item>
        <Item onClick={null}>OrderedList</Item>
        <Item onClick={null}>BulletList</Item>
        <Item onClick={null}>Table</Item>
      </Submenu>
      <Separator />
      <Item onClick={null}>Copy<RightSlot>⌘C</RightSlot></Item>
      <Item onClick={null}>Paste<RightSlot>⌘V</RightSlot></Item>
      <Item onClick={null}>Delete<RightSlot>⌘D</RightSlot></Item>
      <Item onClick={null}>Undo<RightSlot>⌘Z</RightSlot></Item>
      <Item onClick={null}>Redo<RightSlot>⌘Y</RightSlot></Item>
      <Separator />
      <Item disabled>Disabled</Item>
    </Menu>
  )
}