import React, { useState, useEffect } from "react"
import { Menu, Item, Separator, Submenu, useContextMenu } from "react-contexify"
import debug from "@Utils/debug"

import 'react-contexify/dist/ReactContexify.css'

const dummyData = [
  { "id": 1, "title": "1", "action": "" },
  { "id": 2, "title": "2", "action": "" },
  { "id": 3, "title": "3", "action": "" },
  { "id": 4, "title": "4", "action": "" }
]


export default function Document() {
  // TODO Feature: Context menu.
  const MENU_ID = "default"
  const { show } = useContextMenu({id: MENU_ID})
  function displayMenu(e) {
    show({
      event: e,
    })
  }
  /*const [clicked, setClicked] = useState(false)
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const offClickHandler = (event) => {
    if (contextRef.current && !contextRef.current.contains(event.target)) {
      setContextData({ ...contextData, visible: false })
    }
  }
  

  return (
    <div>
      <div
        className="w-40 h-40 bg-black"
        onContextMenu={(e) => {
          e.preventDefault()
          setClicked(true)
          setPoints({
            x: e.pageX,
            y: e.pageY,
          })
          debug.log(`clicked on (${e.pageX}, ${e.pageY})`)
        }}
      >
        <Cc data={dummyData} position={points} />
      </div>
    </div>
    */
  return (
    <>
      <div>
        <div className="w-60 h-60 bg-black" onContextMenu={displayMenu}></div>
        <div className="w-60 h-60 border-gray-500"></div>
      </div>
      <Menu id={MENU_ID}>
        <Item onClick={null}>
          Item 1
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
    </>
  )
}


const OpenContextMenu = () => <div style={{ color: "blue" }}>nya~</div>

const Cc = ({ data, position }: any) => (
  <ul id={"context-menu"} className="absolute" style={{ left: position.x, top: position.y }}>{
    data.map((item) => <li key={item.id} className="bg-gray-500 w-10">{item.title}</li>)
  }</ul>
)


