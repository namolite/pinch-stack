import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title?: string
}


const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className='menu h-16 border-b-2 text-gray-600'>
        <div className='flex justify-between'>
          <div className='menu-options'>
            <Link href="/">Home</Link>
            <Link href="/about">Pinch</Link>
            <Link href="/initial-props">Message</Link>
            <Link href="/initial-props">Schedule</Link>
            <Link href="/initial-props">Document</Link>
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

export default Layout
