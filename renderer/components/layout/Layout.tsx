import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'

import Meta from '@Components/meta'
import OptionsContainer from './options/options'
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
  // const getMenuOptions = () => require('@Data/options')
  return (
    <div>
      <Meta />
      <header>
        <nav className='menu w-14 h-full fixed text-gray-600'>
          <div className='h-full flex flex-col content-center justify-between'>
            <OptionsContainer />
          </div>
        </nav>
      </header>

      <SideList />

      <PageContainer>
        <TitleBar />
        <div className='absolute p-2 w-full'>
          {children}
        </div>
        <footer>
          <div className='right-0 fixed'>
            <hr />
            <span></span>
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
