import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import Meta from '@Components/meta'
import Option from '@Components/layout/Option'

type Props = {
  children: ReactNode
  title?: string
}


const Layout = ({ children, title = 'Nya!' }: Props) => {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    async function fetchMenuOptions() {
      const menuOptions = await getMenuOptions()
      setData(menuOptions)
    }
    fetchMenuOptions()
  }, [refresh])

  const getMenuOptions = () => require('@Data/options.json')

  const handleMenuOptions = (opt) => {
    const createOptions = ((opt) => {
      { }
    })(opt).then((opts) => {
      setRefresh(oldKey => oldKey + 1)
    })
  }

  return (
    <div>
      <Meta pageTitle={title}/>
      <header>
        <nav className='menu w-12 h-full fixed border-r-2 text-gray-600'>
          <div className='h-full flex flex-col content-center justify-between'>
            <div>
              <div>
                a
              </div>
            </div>
            <div className='menu-options flex flex-col absolute'>
              <Option props={data} />
            </div>
            <div className='menu-optons'>
              <Link href="/initial-props">Personal</Link>
              <div></div>
            </div>
          </div>
        </nav>
      </header>
      <div className='ml-12'>
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
