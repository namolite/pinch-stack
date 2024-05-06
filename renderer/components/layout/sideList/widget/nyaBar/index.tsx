import { useState, useEffect } from "react"
import ProgressBar from "./bar"

// BUG: Hard Coded.
const NyaBar = () => {
  const [dayProgress, setDayProgress] = useState<number>(0);
  const [weekProgress, setWeekProgress] = useState<number>(0);
  const [monthProgress, setMonthProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgresaa = () => {
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const todayProgress = (now.getTime() - todayStart.getTime()) / (24 * 60 * 60 * 1000);
      setDayProgress(todayProgress * 100);
    };
    
    const updateProgress = () => {
      // 获取当前时间
      const now = new Date();

      // 计算今天的进度
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const todayProgressValue = (now.getTime() - todayStart.getTime()) / (todayEnd.getTime() - todayStart.getTime());
      setDayProgress(todayProgressValue * 100);

      // 计算本周的进度
      const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
      const endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (6 - now.getDay()));
      const weekProgressValue = (now.getTime() - startOfWeek.getTime()) / (endOfWeek.getTime() - startOfWeek.getTime());
      setWeekProgress(weekProgressValue * 100);

      // 计算本月的进度
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      const monthProgressValue = (now.getTime() - startOfMonth.getTime()) / (endOfMonth.getTime() - startOfMonth.getTime());
      setMonthProgress(monthProgressValue * 100);
    };

    // 每秒更新一次进度
    const intervalId = setInterval(updateProgress, 1000);

    // 组件卸载时清除定时器
    return () => clearInterval(intervalId);
    //const intervalId = setInterval(updateProgress, 10000);
    //return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pt-6 px-2">
      <ProgressBar
        type={'DD'}
        per={parseFloat(dayProgress.toFixed(1))}
      />
      <ProgressBar
        type={'WW'}
        per={parseFloat(weekProgress.toFixed(1))}
      />
      <ProgressBar
        type={'MM'}
        per={parseFloat(monthProgress.toFixed(1))}
      />
    </div>
  )
}

export default NyaBar