import React, { ReactNode } from "react";
import { useState, useEffect } from 'react'
import PinchTable from '@Components/pinch/pinchTable'

type Props = {
  children: ReactNode
  title?: string
}

export default function Pinch(setting, { title = 'Pinch!' }: Props) {
  interface setting {
    sortBy?: number
    folder?: boolean
    col?: number
    rol?: number
  }

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(null)

  return (
    <div className="">
      <div className="">
        <PinchTable
          sortBy={0}
          folder={0}
          col={setting.col}
          rol={setting.rol}
        />
      </div>
    </div>
  )
}
