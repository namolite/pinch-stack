import NyaTime from "./widget/nyaTime"
import NyaBar from "./widget/nyaBar"
import NyaUtils from "./widget/nyaUtils"


const SideListWidget = () => {

  return (
    <div className="px-1">
      <NyaTime />
      <NyaBar />
      <NyaUtils host='http://localhost:23333' />
    </div>
  )
}

export default SideListWidget