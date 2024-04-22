import React, { ReactNode } from 'react'
import { useAtom } from "jotai";

import Connect from './connect'
import PreviousPage from './previousPage';
import { connectionAtom } from '@Utils/states'

type Props = {
  children: ReactNode
}

const CardDivider = ({ children }: Props) => {
  const [connectionState] = useAtom(connectionAtom)

  return (
    <div className="sidelist fixed left-14 w-60 h-full p-2 overflow-hidden">
      <div className="sidelist-inner rounded-lg h-full w-full overflow-y-auto relative">
        <div className="sidelist-bar flex items-center sticky top-0">
          <div className=' overflow-hidden'>
            <div className="flex justify-center items-center py-1 px-6">
              <Connect state={connectionState} />
              <PreviousPage />
            </div>
          </div>
        </div>
        <div className='p-2 overflow-y-auto z-40 w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardDivider