import React, { ReactNode } from 'react'

import SideListMenu from '@Components/layout/sideList/sideListMenu'

type Props = {
  children: ReactNode
}

const CardDivider = ({ children }: Props) => (
  <div className="sidelist fixed left-14 w-60 h-full p-2 overflow-auto">
    <div className="bg-gray-100 rounded-lg h-full w-full">
      <SideListMenu />
      <div className='absolute m-2'>
        {children}
      </div>
    </div>
  </div>
)

export default CardDivider