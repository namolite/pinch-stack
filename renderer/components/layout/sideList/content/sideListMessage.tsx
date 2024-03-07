import PinchTable from '@Components/pinch/pinchTable'

const SideListMessage = () => {
  const crewList = require('@Data/crewlist')

  return (
    <>
      <PinchTable
        crewList={crewList}
      />
    </>
  )
}

export default SideListMessage