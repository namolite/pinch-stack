import React from "react";

import PinchItem from "@Components/pinch/pinchItems";

import debug from "@Utils/debug";


const PinchTable = ({ props, crewList }: any) => {
  debug.log(props)
  // document.querySelector('#pinch-table').classList.add(props)
  return (
    <div id="pinch-table" className={`m-4 grid grid-cols-${props} gap-4`}>
      {crewList?.map((crewList) => <PinchItem key={crewList.name} props={crewList} /> )}
    </div>
  )
}

export default PinchTable