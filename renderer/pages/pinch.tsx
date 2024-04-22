import React, { ReactNode } from "react";
import { useState, useEffect } from 'react'
import { useAtom } from "jotai";

import PinchTable from '@Components/pinch/pinchTable'
import CustomTitle from "@Components/title";
import FileList from "@Components/pinch/fileList";



export default function Pinch() {
  return (
    <div>
      <FileList
        host='http://localhost:23333'
      />
    </div>
  )
}


const PinchNya = (dump) => {
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
  const setting = {"col": 3, "rol": 4}
  const crewList = require('@Data/crewlist')

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(null)
  const customTitle = 'pinch! dev mode ~/Pinch/'

  return (
    <div className="">
      <CustomTitle customTitle={customTitle} /> 
      <div className="">
        <PinchTable 
          props={setting.col} crewList={crewList}
        />
      </div>
    </div>
  )
}
