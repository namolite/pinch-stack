import React, { useState } from 'react'
import { useAtom } from 'jotai'
import axios from 'axios'

import { authAtom } from '@Utils/states'
import debug from '@Utils/debug'
import { IHost } from '@Interfaces/setting'


const LoginForm = (props: { host: IHost | any, onClose: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [selectedTab, setSelectedTab] = useAtom(authAtom)
  const handleChangeTab = (tab: string) => {
    setSelectedTab(tab)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 登录逻辑
    let verified = false
    const api = '/login'
    const url = `${props.host.domain}:${props.host.port}${api}`
    // TODO Login verification(sse)
    // 全局开启在线状态
    // 保持登录连接（心跳）
    // send sse requrests
    try {
      const response = await axios.post(url, {
        username: username,
        password: password,
      });
      debug.log(`[LoginForm]${response}`)
      props.onClose()
    } catch (error) {
      debug.error(`[LoginForm]${error}`)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div
        className='w-full h-screen absolute'
        style={{ inset: '0px', background: 'rgba(15, 15, 15, 0.4)' }}
      ></div>
      <div
        className='flex px-6 py-12 z-10 relative rounded-xl justify-center'
        style={{ background: 'white', height: '500px', width: '320px' }}
      >
        <form onSubmit={handleSubmit}>
          <div className='py-4'>
            <label htmlFor="username">username:</label>
            <div
              className="flex w-auto items-center relative rounded cursor-text"
              style={{ lineHeight: '20px', boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset', padding: '4px 10px', background: 'rgba(242, 241, 238, 0.6)' }}
            >
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-0"
                style={{ background: 'none', border: 'none', outline: 'none' }}
              />
            </div>
          </div>
          <div className='py-4'>
            <label htmlFor="password">password:</label>
            <div
              className="flex w-auto items-center relative rounded cursor-text"
              style={{ lineHeight: '20px', boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset', padding: '4px 10px', background: 'rgba(242, 241, 238, 0.6)' }}
            >
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-0"
                style={{ background: 'none', border: 'none', outline: 'none' }}
              />
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <button type="submit">提交</button>
            <button type="button" onClick={() => handleChangeTab('reg')}>转到注册</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm

/**
 *  HINTS
 * 
 *  localization & Accessibility
 *  Password & Connection Security
 *  Debounce
 *  UseForm Hooks Manage Multiple Form Submit
 *  Styled Components
 */
