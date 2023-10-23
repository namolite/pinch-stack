import React, { ReactNode } from "react";
import { useState, useEffect } from 'react'

import PinchTable from '@Components/pinch/pinchTable'
import CustomTitle from "@Components/title";


export default function Pinch(dump) {
  interface dump {
    sortBy?: number
    folder?: boolean
    col?: number
    rol?: number
  }

  /*sortBy={0}
  *folder={0}
  *col={setting.col}
  *rol={setting.rol}
  *contents='dasdad'
  */
  const setting = [{"col": 3, "rol": 4}]
  const crewList = require('@Data/crewlist')

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(null)
  const customTitle = 'pinch! dev mode ~/Pinch/'

  return (
    <div className="">
      <CustomTitle customTitle={customTitle} /> 
      <div className="">
        <PinchTable 
          props={setting} crewList={crewList}
        />
      </div>
    </div>
  )
}
