import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageContainer = ({ children }: Props) => (
  <main>
    <div className='children absolute'>
      <div className="mainpage fixed top-0 h-full p-2">
        <div className="mainpage-inner rounded-lg h-full w-full">
          {children}
        </div>
      </div>
    </div>
  </main>
)

export default PageContainer