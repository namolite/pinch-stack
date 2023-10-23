import React from "react";

import PinchItem from "@Components/pinch/pinchItems";

import debug from "@Utils/debug";


const PinchTable = ({ props }: any) => {
  debug.log(props)
  return (
    <div>
      {props?.map((props) => <PinchItem props={props} /> )}
    </div>
  )
}

export default PinchTable