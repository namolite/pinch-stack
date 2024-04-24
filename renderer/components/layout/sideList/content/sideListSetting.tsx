import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { settingAtom } from '@Utils/states'
import { IOption } from '@Interfaces/setting';

type MenuItem = {
  id: number
  label: string
  i: string
};

const SideListSetting: React.FC = () => {
  const [selectedTab, setSelectedTab] = useAtom(settingAtom)
  const handleChangeTab = (tab: string, itemId: number) => {
    setSelectedTab(tab)
    setActiveItem(itemId)
  }

  const [activeMode, setActiveMode] = useState('All')
  const setMode = (mode: string) => {
    setActiveMode(mode);
  };

  const [activeItem, setActiveItem] = useState<number>(1);

  // const items: IOption[] = require('@Data/setting_options.json')
  const menuItems: MenuItem[] = [
    { id: 1, label: 'Information', i: 'info' },
    { id: 2, label: 'System', i: 'system' },
    { id: 3, label: 'Plugins', i: 'plugins' },
    { id: 4, label: 'Appearance', i: 'appearance' },
    { id: 5, label: 'Security', i: 'security' },
    { id: 6, label: 'Account', i: 'account' },
  ];

  return (
    <div className="pt-6">
      <ul className="flex flex-col">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="flex flex-col pt-1 px-1"
          >
            <li
              className={`flex items-center py-0.5 cursor-pointer ${activeItem === item.id ? 'sidelist-option-active' : 'sidelist-option'}`}
              onClick={() => handleChangeTab(item.i, item.id)}
            >
              <div className="px-1 pb-0.5">
                <a className="px-4 text-sm">
                  <span>{item.label}</span>
                </a>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideListSetting