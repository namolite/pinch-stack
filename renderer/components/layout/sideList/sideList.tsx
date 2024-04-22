import CardDivider from "@Components/layout/sideList/cardDivider"
import SideListContent from "@Components/layout/sideList/content/index"
import SideListUtils from "./sideListUtils"


export default function SideList() {
  return (
    <aside>
      <CardDivider>
        <div>
          <SideListContent />
        </div>
        <SideListUtils />
      </CardDivider>
    </aside>
  )
}