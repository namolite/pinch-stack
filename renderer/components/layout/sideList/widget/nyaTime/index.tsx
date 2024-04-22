import React, { useState, useEffect } from 'react'


const NyaTime = () => {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const getUtcTime = () => {
      const timeZones = ['UTC', 'America/New_York', 'Europe/London']
      const timeData = timeZones.map(timeZone => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone,
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        });
        return {
          timeZone: timeZone,
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
    <div className='pt-6'>
      <ul>
        {timeData.map(({ timeZone, time }) => (
          <li key={timeZone}>
            <strong>{timeZone}:</strong> {time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NyaTime