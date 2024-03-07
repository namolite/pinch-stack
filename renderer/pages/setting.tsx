import { useAtom } from 'jotai'
import { settingAtom } from '@Utils/states'

import SettingAccount from './setting/settingAccount'
import SettingAppearance from './setting/settingAppearance'
import SettingInfo from './setting/settingInfo'
import SettingSecurity from './setting/settingSecurity'
import SettingSystem from './setting/settingSystem'


const Setting = () => {
  const [selectedTab] = useAtom(settingAtom)

  switch (selectedTab) {
    case 'account':
      return <SettingAccount />
    case 'appearance':
      return <SettingAppearance />
    case 'info':
      return <SettingInfo />
    case 'security':
      return <SettingSecurity />
    case 'system':
      return <SettingSystem />
  }
}

export default Setting