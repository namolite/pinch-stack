import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';

const Battery = () => {
  useEffect(() => {
    ipcRenderer.on('battery-status', (event, status) => {
      const batteryInfo = document.getElementById('battery-info');
      batteryInfo.innerText = status;
    });

    return () => {
      ipcRenderer.removeAllListeners('battery-status');
    };
  }, []);

  return (
    <div>
      <div id="battery-info"></div>
    </div>
  );
};

export default Battery;