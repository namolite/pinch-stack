import { useState } from "react"
import Divider from "./components/divider"
import { SettingTitle, SettingItem, SettingInput } from "./components/settingItem"
import ToggleSwitch from "./components/toggleSwitch"
import { Toggle } from 'rsuite'

export default function SettingSystem() {
  const [activeMode, setActiveMode] = useState(false)
  return (
    <div className="p-6">
      <SettingTitle text="Data Sync" />
      <SettingItem
        title="Data Server"
        text="Your data server"
        children={<SettingInput />}
      />
      <SettingItem
        title="Sync Server"
        text="(optional)Your sync data server"
        children={<Toggle checkedChildren="Enabled" unCheckedChildren="Disabled"/>}
      />
      <SettingItem
        title="Sync Server Address"
        text="Put in a address"
        children={<SettingInput />}
      />
      <SettingTitle text="Miscellaneous" />
      <SettingItem
        title="Action Key"
        text="Your Action Key"
        children={<SettingInput />}
      />
      <SettingItem
        title="Launch When Startup"
        text=""
        children={<Toggle checkedChildren="Enabled" unCheckedChildren="Disabled"/>}
      />
      <SettingItem
        title="When Click Close"
        text=""
        children={<Toggle checkedChildren="Enabled" unCheckedChildren="Disabled"/>}
      />
    </div>
  )
}