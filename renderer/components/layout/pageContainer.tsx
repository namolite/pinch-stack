import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageContainer = ({ children }: Props) => (
  <main>
    <div className='children absolute p-10'>
      <div className="main-page fixed top-0 h-full p-2 overflow-auto">
        <div className="bg-gray-100 rounded-lg h-full w-full">
          <div className='absolute m-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  </main>
)

export default PageContainer