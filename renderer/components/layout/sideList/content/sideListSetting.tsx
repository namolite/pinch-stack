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
  const handleChangeTab = (tab: string) => {
    setSelectedTab(tab)
  }

  const [activeMode, setActiveMode] = useState('All')
  const setMode = (mode: string) => {
    setActiveMode(mode);
  };

  const [activeItem, setActiveItem] = useState<number>(1);

  // const items: IOption[] = require('@Data/setting_options.json')
  const menuItems: MenuItem[] = [
    { id: 1, label: 'Appearance', i: 'info' },
    { id: 2, label: 'Keyboard sh...', i: 'system' },
    { id: 3, label: 'Plugins', i: 'security' },
    { id: 4, label: 'Pricing Plans', i: 'appearance' },
    { id: 5, label: 'About AFFINE', i: 'account' },
  ];

  return (
    <div className="w-48 bg-gray-200 rounded">
      <ul>
        {menuItems.map(item => (
          <li
            key={item.id}
            className={`flex items-center px-4 py-2 cursor-pointer ${
              activeItem === item.id ? 'bg-gray-400' : 'hover:bg-gray-300'
            }`}
            onClick={() => handleChangeTab(item.i)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SideListSetting