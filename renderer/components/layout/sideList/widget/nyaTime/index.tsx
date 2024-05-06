import React, { useState, useEffect } from 'react'


const NyaTime = () => {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const getUtcTime = () => {
      const timeZones = [
        {'id': 'Asia/Shanghai', 'label': 'ShangHai'},
        {'id': 'America/New_York', 'label': 'NYC, US'},
        {'id': 'Europe/London', 'label': 'LDN, UK'},
        {'id': 'UTC', 'label': 'UTC'}
      ]
      const timeData = timeZones.map(timeZone => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone.id,
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        });
        return {
          timeZone: timeZone.label,
          time: formatter.format(new Date())
        };
      });
      setTimeData(timeData);
    };

    getUtcTime();
    const interval = setInterval(getUtcTime, 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pt-6 px-4'>
      <ul>
        {timeData.map(({ timeZone, time }) => (
          <li
            key={timeZone}
            className='flex justify-between py-0.5 mr-1'
          >
            <strong>{timeZone}:</strong> {time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NyaTime