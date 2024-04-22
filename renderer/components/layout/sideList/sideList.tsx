import CardDivider from "@Components/layout/sideList/cardDivider"
import SideListContent from "@Components/layout/sideList/content/index"
import SideListWidget from "./sideListUtils"


export default function SideList() {
  return (
    <aside>
      <CardDivider>
        <div>
          <SideListContent />
        </div>
        <SideListWidget />
      </CardDivider>
    </aside>
  )
}