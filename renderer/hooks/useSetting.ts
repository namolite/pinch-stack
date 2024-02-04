
import type { IMenu } from '@Interfaces/setting'
import { useState, useEffect } from "react";


export function useMenu(menu: ) {
  const [menuStatus, setMenuStatus] = useState<IMenu | null>(null)
  useEffect(() => {
    const fetchMenuStatus = async () => {
      const stats = await(getMenuStatus(menu))
    }
  })
}

interface IMenu {
  a
}

async function getMenuStatus(id: string, path: string, ico: string | null): Promise<IMenu> {
  
}