import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const CardDivider = ({ children }: Props) => (
  <div className="sidelist fixed left-14 w-60 h-full p-2 bg-gray-300 overflow-auto">
    <div className="bg-gray-100 rounded-lg h-full w-full">
      <div className='absolute m-2'>
        {children}
      </div>
    </div>
  </div>
)

export default CardDivider