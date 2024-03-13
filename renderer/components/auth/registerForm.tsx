import React, { useState, useEffect } from 'react';
import axios from 'axios'

import debug from '@Utils/debug'
import { IHost } from '@Interfaces/setting';


const RegisterForm = (props: { host: IHost | any }) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [usernameWarning, setUsernameWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState('');
  const [usernameExists, setUsernameExists] = useState(false)

  const usernamePattern = /^[a-zA-Z0-9_]+$/
  const passwordPattern = /^[a-zA-Z0-9_]{6,16}$/


  useEffect(() => {
    const checkUsernameExists = async () => {
      const api = '/check-username';
      const url = `${props.host.domain}:${props.host.port}${api}`;
      try {
        const response = await axios.post(url, { username });
        setUsernameExists(response.data.exists);
      } catch (error) {
        debug.error(`[Register]${error}`);
      }
    };

    if (usernamePattern.test(username)) {
      checkUsernameExists();
    }
  }, [username, props.host.domain, props.host.port]);


  const handleUsernameChange = (event) => {
    const { value } = event.target
    const usernamePattern = /^[a-zA-Z0-9_]+$/
    const filteredValue = value.split('').filter(char => usernamePattern.test(char)).join('')
    setUsername(filteredValue)
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUsernameWarning('');
    setPasswordWarning('');
    setConfirmPasswordWarning('');

    if (!passwordPattern.test(password)) { setPasswordWarning('Password must be 6-16 characters long and contain only letters, numbers, and underscores.'); return }
    if (password !== confirmPassword) { setConfirmPasswordWarning('Passwords do not match.'); return }
    if (usernameExists) { setUsernameWarning('Username already exists.'); return }

    debug.log({ email, username, password, confirmPassword })
    const api = '/register';
    const url = `${props.host.domain}:${props.host.port}${api}`
    // 注册完成自动转到登录
    try {
      const response = await axios.post(url, {
        email: email,
        username: username,
        password: password,
      })
      // 处理响应
      debug.log(`[Register]${response}`)
    } catch (error) {
      // 处理错误
      debug.error(`[Register]${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
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
      <div>
        <label htmlFor="confirmPassword">confirmPassword:</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {usernameWarning && <p className='text-blue-600'>{usernameWarning}</p>}
      {passwordWarning && <p className='text-blue-600'>{passwordWarning}</p>}
      {confirmPasswordWarning && <p className='text-blue-600'>{confirmPasswordWarning}</p>}
      <button type="submit">register</button>
    </form>
  );
};

export default RegisterForm