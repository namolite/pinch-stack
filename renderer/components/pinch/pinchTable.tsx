import React from "react";

import PinchItem from "@Components/pinch/pinchItems";

import debug from "@Utils/debug";


const PinchTable = ({ props, crewList }: any) => {
  debug.log(crewList)
  return (
    <div>
      {crewList?.map((crewList) => <PinchItem props={crewList} /> )}
    </div>
  )
}

export default PinchTable