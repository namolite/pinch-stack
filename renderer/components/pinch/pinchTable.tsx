import React from "react";

import PinchItem from "@Components/pinch/pinchItems";


const PinchTable = ({ props, crewList }: any) => {
  // document.querySelector('#pinch-table').classList.add(props)
  return (
    <div id="pinch-table" className={`m-4 grid grid-cols-${props} gap-4`}>
      {crewList?.map((crewList) => <PinchItem key={crewList.name} props={crewList} /> )}
    </div>
  )
}

export default PinchTable