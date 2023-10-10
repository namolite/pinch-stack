import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import Meta from './meta'

type Props = {
  children: ReactNode
  title?: string
}

const data = require('@Data/options.json')

const Option = ({ props }: any) => (
  <>{props.map((props: { id: string, path: string, ico: string }) => (
    <Link key={props.id} href={props.path}>
      <div className='flex w-full h-full left-0 top-0 items-center justify-center'>
        <img className='opacity-50 h-1/2' src={props.ico} />
      </div>
    </Link>
  ))}</>
)


const Layout = ({ children, title = 'Nya!' }: Props) => {
  const [datam, setDatam] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    async function fetchMenuOptions() {
      const menuOptions = await []
      setDatam(menuOptions)
      // DEBUG
      console.log(menuOptions)
    }
    fetchMenuOptions()
  }, [refresh])

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
        <nav className='menu w-16 h-full fixed border-r-2 text-gray-600'>
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
