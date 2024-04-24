import { useAtom } from "jotai"

import CardDivider from "@Components/layout/sideList/cardDivider"
import SideListContent from "@Components/layout/sideList/content/index"
import SideListWidget from "./sideListUtils"

import { selectedTabAtom } from "@Utils/states"


export default function SideList() {
  const [selectedTab] = useAtom(selectedTabAtom)

  const renderWidget = () => {
    if (selectedTab === 'home' || selectedTab === 'pinch' || selectedTab === 'document') {
      return <SideListWidget />
    }
    return null
  }

  return (
    <aside>
      <CardDivider>
        <div>
          <SideListContent />
        </div>
        {renderWidget()}
      </CardDivider>
    </aside>
  )
}