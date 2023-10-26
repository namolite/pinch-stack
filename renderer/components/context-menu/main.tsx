import { Menu, Item, Separator, Submenu, useContextMenu } from "react-contexify"
import "react-contexify/dist/ReactContexify.css"


const MENU_ID = "default"

const { show } = useContextMenu({id: MENU_ID})

function displayMenu(e) {
  show({
    event: e,
  })
}

