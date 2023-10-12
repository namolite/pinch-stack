import { useState, useEffect } from 'react'
import Link from 'next/link'

import Layout from '@Components/Layout'
import IndexInner from '@Components/workbench/test'

const IndexPage = () => {
  // TODO Component: Workbench 

  // TODO Hooks: useFetchData: Update Data
  

  return (
    <Layout title="Pinch Stack | Home">
      <div className='flex w-full justify-center'>
        <div className='w-full px-12'>
        <IndexInner />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
