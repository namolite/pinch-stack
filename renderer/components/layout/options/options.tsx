import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Option from './option'

import debug from '@Utils/debug'


const OptionsContainer = () => {
  const host = 'http://localhost:23333'

  const [control, setControl] = useState([])
  const [selection, setSelection] = useState([])
  const [setting, setSetting] = useState([])

  const fetchList = async (url) => {
    try {
      const res = await axios.get(url, {
        responseType: 'json'
      })
      debug.log(`[Options] Fetch option ${res.data}`)
      return res.data;
    } catch (error) {
      debug.log(`[Options]${error}`)
      return []
    }
  }

  useEffect(() => {
    async function fetchData(l) {
      try {
        const data = await fetchList(`${l}/api/user-options`);

        setControl(data.control)
        setSelection(data.selection)
        setSetting(data.setting)
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    }

    fetchData(host)
  }, []);

  return (
    <>
      <div className='flex flex-col pt-6'>
        <Option props={control} />
      </div>
      <div className='menu-options flex flex-col absolute'>
        <Option props={selection} />
      </div>
      <div className='flex flex-col pb-6'>
        <Option props={setting} />
        <div></div>
      </div>
    </>
  )
}

export default OptionsContainer