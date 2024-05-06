

const ProgressBar = (props: {type, per}) => {
  return (
    <div className="flex py-1">
      <div
        className="flex w-1/2 rounded-md items-center"
        style={{
          border: '3px solid #000',
          padding: '2px',
          height: '22px'
        }}
      >
        <div
          className="h-full rounded-sm"
          style={{
            backgroundColor: '#5a5a5a',
            width: props.per * 0.85
          }}
        ></div>
      </div>
      <div className="flex pl-2 text-sm font-bold text-gray-500">
        {props.type}: {props.per}%
      </div>
    </div>
  )
}

export default ProgressBar
