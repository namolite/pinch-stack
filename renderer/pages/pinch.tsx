import React, { ReactNode } from "react";
import { useState, useEffect } from 'react'

import PinchTable from '@Components/pinch/pinchTable'
import CustomTitle from "@Components/title";

type Props = {
  children: ReactNode
  title?: string
}

export default function Pinch(setting) {
  interface setting {
    sortBy?: number
    folder?: boolean
    col?: number
    rol?: number
  }

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(null)
  const customTitle = 'pinch! dev mode ~/Pinch/'

  return (
    <div className="">
      <CustomTitle customTitle={customTitle} /> 
      <div className="">
        <PinchTable
          sortBy={0}
          folder={0}
          col={setting.col}
          rol={setting.rol}
          contents='dasdad'
        />
      </div>
    </div>
  )
}
