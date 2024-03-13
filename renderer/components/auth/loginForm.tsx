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
    debug.log({ username, password })
    // 登录逻辑
    let verified = false
    const api = '/test'
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
      // 处理响应
      debug.log(`[LoginForm]${response}`)
      props.onClose()
    } catch (error) {
      // 处理错误
      debug.error(`[LoginForm]${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">提交</button>
      <button type="button" onClick={() => handleChangeTab('reg')}>转到注册</button>
    </form>
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
