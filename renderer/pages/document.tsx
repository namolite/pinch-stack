import React, { useState, useEffect } from "react"
import debug from "@Utils/debug"

const dummyData = [
  {"id": 1, "title": "1", "action": ""},
  {"id": 2, "title": "2", "action": ""},
  {"id": 3, "title": "3", "action": ""},
  {"id": 4, "title": "4", "action": ""}
]


export default function Document() {
  // TODO Feature: Context menu.
  const [clicked, setClicked] = useState(false)
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
  )
}


const OpenContextMenu = () => <div style={{color: "blue"}}>nya~</div>

const Cc = ({ data, position }: any) => (
  <ul id={"context-menu"} className="absolute" style={{left: position.x, top: position.y}}>{
    data.map((item) => <li key={item.id} className="bg-gray-500 w-10">{item.title}</li>)
  }</ul>
)


