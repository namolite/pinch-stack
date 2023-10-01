
import type { IMenu } from '@Interfaces/setting'
import { useState, useEffect } from "react";


export function useMenu() {
  const [menuStats, setMenuStats] = useState<IMenu | null>(null)
  useEffect
}