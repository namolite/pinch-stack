

const Connect = (props: {state}) => {
  const state = props.state
  return (
    <div className="flex items-center pt-0.5">
      <div className='w-5'>
        {
          state === 'Online' ? <Online /> : state === 'Offline' ? <Offline /> : <Connecting />
        }
      </div>
      <span className="mx-3">{state}</span>
    </div>
  )
}

const Online = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <circle cx="12" cy="12" r="10" fill="#50ff50" />
  </svg>
)

const Connecting = () => (
  <div>
    <img
      src='./images/icons/connect/c.svg'
      className="rotating"
    />
  </div>
)

const Offline = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <circle cx="12" cy="12" r="10" fill="#ff5050" />
  </svg>
)

export default Connect

