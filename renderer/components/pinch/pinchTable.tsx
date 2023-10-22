import React from "react";

import PinchItem from "@Components/pinch/pinchItems";


const PinchTable = ({ props }: any) => {
  console.log(props)
  return (
    <div>
      {props?.map((props) => <PinchItem props={props} /> )}
    </div>
  )
}

export default PinchTable