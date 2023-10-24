import React from "react";

import Image from "next/image";


const PinchItem = ({ props }: any) => {
  return(
    <>
      <div className="relative flex flex-col w-36 overflow-hidden rounded-md border border-gray-300 bg-gray-50 p-4 text-left shadow-lg focus:outline-none dark:border-gray-500 dark:bg-gray-700 dark:bg-opacity-10">
        <p className="text-m">{props.name}</p>
        <span className="flex flex-row flex-wrap-reverse text-center">
          <Image
            height={16}
            width={16}
            src={props.img}
            alt=" "
            className="pinch-status"
          />
          <p className="text-s ml-1">{props.status}</p>
        </span>
      </div>
    </>
  )
}

export default PinchItem