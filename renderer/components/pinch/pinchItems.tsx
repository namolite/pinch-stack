import React from "react";

import Image from "next/image";


const PinchItem = ({ props }: any) => {
  return(
    <>
      <div className="relative w-48 overflow-hidden rounded-md border border-gray-300 bg-gray-50 p-4 text-left shadow-lg focus:outline-none dark:border-gray-500 dark:bg-gray-700 dark:bg-opacity-10">
        <p className="text-m">{props.name}</p>
        <span className="flex flex-row">
          <Image
            height={18}
            width={18}
            src={props.img}
            alt=" "
          />
          <p className="text-s">{props.status}</p>
        </span>
      </div>
    </>
  )
}

export default PinchItem