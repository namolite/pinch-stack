import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import Meta from '@Components/meta'
import Option from '@Components/layout/Option'

type Props = {
  children: ReactNode
  title?: string
}


const Layout = ({ children }: Props) => {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    async function fetchMenuOptions() {
      const menuOptions = await getMenuOptions()
      setData(menuOptions)
    }
    fetchMenuOptions()
  }, [refresh])

  // BUG hard coded
  const getMenuOptions = () => require('@Data/options.json')
  const usr = require('@Data/options_usr.json')

  const handleMenuOptions = (opt) => {
    const createOptions = ((opt) => {
      { }
    })(opt).then((opts) => {
      setRefresh(oldKey => oldKey + 1)
    })
  }

  return (
    <div>
      <Meta />
      <header>
        <nav className='menu w-14 h-full fixed border-r text-gray-600'>
          <div className='h-full flex flex-col content-center justify-between'>
            <div>
              <div>
                a
              </div>
            </div>
            <div className='menu-options flex flex-col absolute'>
              <Option props={data} />
            </div>
            <div className='menu-optons flex flex-col pb-6'>
              <Option props={usr} />
              <div></div>
            </div>
          </div>
        </nav>
      </header>
      <div className='ml-14'>
        <div className='menu-window'></div>
        {children}
      </div>
      <footer>
        <div className='right-0 fixed'>
          <hr />
          <span>I'm here to stay ❤ (Footer)</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
