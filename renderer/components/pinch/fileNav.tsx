import React, { ReactNode } from 'react'


type Props = {
  children: ReactNode;
  position: string;
}


const FileNav = ({ children, position }: Props) => {
  return (
    <div>
      <div>
        <div>
          <span>{position}</span>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FileNav