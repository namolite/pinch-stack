import React, { ReactNode } from 'react'

import SideListBar from '@Components/layout/sideList/sideListBar'

type Props = {
  children: ReactNode
}

const CardDivider = ({ children }: Props) => (
  <div className="sidelist fixed left-14 w-60 h-full p-2 overflow-auto">
    <div className="sidelist-inner rounded-lg h-full w-full">
      <SideListBar />
      <div className='absolute m-2'>
        {children}
      </div>
    </div>
  </div>
)

export default CardDivider