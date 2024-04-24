import React, { useState, useEffect } from "react"
import axios from "axios"

import debug from "@Utils/debug"


const fetchWidget = async (url) => {
  try {
    const res = await axios.get(url, {
      responseType: 'json'
    })
    debug.log(`[Nya Utils] Fetch Utils Widget Data.${res.data}`)
    return res.data;
  } catch (error) {
    debug.log(`[Nya Utils]${error}`)
    return []
  }
}

const NyaUtils = (props: { host }) => {
  const [widget, setWidget] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (id) => {
    setSelectedOption(id)
  }

  useEffect(() => {
    async function fetchData(l) {
      try {
        const d = await fetchWidget(`${l}/api/utils`);
        setWidget(d);
      } catch (error) {
        console.error('Error fetching utils widget data:', error);
      }
    }

    fetchData(props.host);
  }, []);

  return (
    <div className="pt-6">
      <ul className="flex flex-col">
        {widget.map((item: { id: string, name: string }) => (
          <UtilsOption
            key={item.id}
            id={item.id}
            name={item.name}
            isActive={selectedOption === item.id}
            click={() => handleOptionClick(item.id)}
          />
        ))}
      </ul>
    </div>
  )
}

// const UtilsOption = (id: string, name: string, link: string) => (
const UtilsOption = (props: { id, name, isActive, click }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="flex flex-col pt-1 px-1">
      <li
        className={`flex items-center py-0.5 ${props.isActive ? 'sidelist-option-active' : 'sidelist-option'}`}
        onClick={props.click}
      >
        <div className="px-2 h-4">
          <img
            className="h-full w-full"
            src={`./images/icons/widget/utils/${props.id}.svg`}
          />
        </div>
        <div className="px-1 pb-0.5">
          <a className="text-sm">
            <span>{props.name}</span>
          </a>
        </div>
      </li>
    </div>
  )
}

export default NyaUtils