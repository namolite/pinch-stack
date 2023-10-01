import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title?: string
}

const data = require('@Data/options.json')

const Option = ({ props }: any) => (
  <>{props.map((props: { id: string, path: string, ico: string }) => (
    <Link key={props.id} href={props.path}>
      <div className='flex w-full h-full left-0 bottom-0 items-center justify-center'>
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

  const handleMenuOption = () => {}

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className='menu h-12 border-b-2 text-gray-600'>
          <div className='flex justify-between'>
            <div className='menu-options flex absolute'>
              <Option props={data} />
            </div>
            <div className='menu-optons'>
              <Link href="/initial-props">Personal</Link>
              <div></div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
