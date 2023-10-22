import { useState, useEffect } from 'react'
import Link from 'next/link'

import CustomTitle from '@Components/title'
import IndexInner from '@Components/workbench/test'

const IndexPage = () => {
  // BUG hard coded
  const customTitle = 'pinch! dev mode ~/Workbench/'
  // TODO Component: Workbench 

  // TODO Hooks: useFetchData: Update Data


  return (
    <div className='flex w-full justify-center'>
      <CustomTitle customTitle={customTitle} />
      <div className='w-full px-12'>
        <IndexInner />
      </div>
    </div>
  )
}

export default IndexPage
