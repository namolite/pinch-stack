import { useAtom } from "jotai"
import { useState, useEffect } from "react"

import Auth from "@Components/auth"
import { Link, Time, Title } from '@Components/resource/settingIco'
import { authAtom } from "@Utils/states"
// <Auth />

export default function SettingInfo() {
  const [logined, setLogined] = useState(null)
  const [loginedState] = useAtom(authAtom)

  useEffect(() => {
    setLogined(loginedState);
  }, [loginedState]);

  const data = {
    'avatar': 'default',
    'username': 'Violetta',
    'status': 'Online',
    'ico': '1f95d',
    'label': [
      { 'name': 'Title', 'label': 'UI/UX Dev' },
      { 'name': 'Time', 'label': 'Asia/Shanghai' },
      { 'name': 'Link', 'label': 'lynxsyu.com' }
    ],
    'description': 'Greetings. I\'m Violetta, a 15-year-old girl loving baking, drawing, mysticism, and Onii-chan. If you need help, I suppose I could lend a paw, nya~'
  }

  return ((logined === 'logined') ? (
    <div className="p-6">
      <div>
        <div className="w-20 h-20">
          {data.avatar === 'default' ? (
            <img
              src="./images/avatar.png"
              className="rounded-full"
            />
          ) : (
            <img src="" />
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex col-end-1 py-2 pr-2 pl-1 relative items-end">
            <span className="pt-2 pr-2 text-3xl font-poppin">{data.username}</span>
            <div className="flex flex-row pb-0.5 pl-1 items-center">
              <div className="h-4 w-4">
                <img src={`./images/status/${data.ico}.png`} />
              </div>
              <span className="pl-1 font-lato text-gray-500">{data.status}</span>
            </div>
          </div>
          <ul className="flex flex-col py-4">
            <span className="pl-2 py-0.5 font-mont font-bold text-gray-600">Info</span>
            {data.label.map((label) => (
              <li
                key={label.name}
                className="flex flex-row items-center py-1 font-mont font-bold text-gray-700"
              >
                {label.name === 'Title' && <Title />}
                {label.name === 'Time' && <Time />}
                {label.name === 'Link' && <Link />}
                <span className="pl-2">{label.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-2">
          <span className="pl-2 py-0.5 font-mont font-bold text-gray-600">Bio</span>
          <span className="font-lato">{data.description}</span>
        </div>
      </div>
    </div>
  ) : (
    <Auth />
  ))
}