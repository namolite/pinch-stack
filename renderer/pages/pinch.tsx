import React, { ReactNode } from "react";
import { useState, useEffect } from 'react'
import PinchThrome from '@Components/pinch/pinchThrone'

type Props = {
  children: ReactNode
  title?: string
}

export default function Pinch( setting, { title = 'Pinch!' }: Props) {
  interface setting {
    sortBy: number
    folder: boolean
    col: number
    rol: number
  }

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(null)

  return (
    <>
      <div>
        <div>
          <PinchThrome
            sortBy={0}
            folder={0}
            col={setting.col}
            rol={setting.rol}
          />
        </div>
      </div>
    </>
  )
}
