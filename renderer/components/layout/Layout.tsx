import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'

import Meta from '@Components/meta'
import Option from '@Components/layout/Option'
import SideList from '@Components/layout/sideList/sideList'
import TitleBar from '@Components/layout/page/titleBar'
import PageContainer from '@Components/layout/page/pageContainer'

import CommonMenu from '@Components/context-menu/menu/commonMenu'
import NyaMenu from '@Components/context-menu/menu/nyaMenu'
import EditorMenu from '@Components/context-menu/menu/editorMenu'

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
  const getMenuOptions = () => require('@Data/options')
  const usr = require('@Data/options_usr')

  const handleMenuOptions = (opt) => {
    const createOptions = ((opt) => {

      const opts = [];
      setRefresh(oldKey => oldKey + 1);
    })(opt);
  }

  console.log(data)

  return (
    <div>
      <Meta />
      <header>
        <nav className='menu w-14 h-full fixed text-gray-600'>
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

      <SideList />

      <PageContainer>
        <TitleBar />
        <div className='absolute m-2 w-full'>
          {children}
        </div>
        <footer>
          <div className='right-0 fixed'>
            <hr />
            <span>I'm here (Footer)</span>
          </div>
        </footer>

      </PageContainer>
      <CommonMenu />
      <NyaMenu />
      <EditorMenu />
    </div>
  )
}

export default Layout
