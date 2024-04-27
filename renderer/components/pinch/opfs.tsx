import React, { useState } from 'react';
import axios from 'axios';

function FilePicker(props: { host }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePicker = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();

      setSelectedFile(file);

      const formData = new FormData();
      formData.append('file', file);

      await axios.post(`${props.host}/api/file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('file uploaded');
    } catch (err) {
      console.error('error:', err);
    }
  };

  return (
    <ul className="flex flex-col">
      <SideListPinchTab
        hook={handleFilePicker}
        ico={'user'}
        label={'My Workspace'}
      />
      <SideListPinchTab
        hook={handleFilePicker}
        ico={'ul'}
        label={'Upload File'}
      />
      <SideListPinchTab
        hook={handleFilePicker}
        ico={'google'}
        label={<Google />}
      />
    </ul>
  );
}

const SideListPinchTab = (props: { hook, ico, label }) => (
  <div className="flex flex-col pt-1 px-1">
    <li
      className='flex items-center py-0.5 sidelist-option'
      onClick={props.hook}
    >
      <div className="px-2 h-4">
        <img
          className="h-full w-full"
          src={`./images/icons/drive/${props.ico}.svg`}
        />
      </div>
      <div className="px-1 pb-1">
        <a className="text-sm">
          <span>{props.label}</span>
        </a>
      </div>
    </li>
  </div>
)

const Google = () => (
  <span>
    <span className='whitespace-nowrap'>{'Sync to'}</span>
    <span style={{color: '#4285f4'}}>&nbsp;G</span>
    <span style={{color: '#ea4335'}}>o</span>
    <span style={{color: '#fbbc05'}}>o</span>
    <span style={{color: '#4285f4'}}>g</span>
    <span style={{color: '#34a853'}}>l</span>
    <span style={{color: '#ea4335'}}>e</span>
  </span>
)

export default FilePicker
