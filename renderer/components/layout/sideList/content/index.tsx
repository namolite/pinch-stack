import { useAtom } from "jotai"

import { selectedTabAtom } from "@Utils/states"

import SideListDocument from "@Components/layout/sideList/content/sideListDocument"
import SideListHome from "@Components/layout/sideList/content/sideListHome"
import SideListNull from "@Components/layout/sideList/content/sideListNull"
import SideListMessage from "@Components/layout/sideList/content/sideListMessage"
import SideListPinch from "@Components/layout/sideList/content/sideListPinch"
import SideListSchedule from "@Components/layout/sideList/content/sideListSchedule"
import SideListSetting from "@Components/layout/sideList/content/sideListSetting"


const SideListContent = () => {
  const [selectedTab] = useAtom(selectedTabAtom);

  switch (selectedTab) {
    case 'home':
      return <SideListHome />
    case 'pinch':
      return <SideListPinch />
    case 'message':
      return <SideListMessage />
    case 'schedule':
      return <SideListSchedule />
    case 'document':
      return <SideListDocument />
    case 'setting':
      return <SideListSetting />
    default:
      return <SideListNull />
  }
}

export default SideListContent