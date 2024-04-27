// @ts-nocheck
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import debug from '@Utils/debug'

import format from '@Data/format.json'

import FileNav from './fileNav'


const fetchFileList = async (url) => {
  try {
    const res = await axios.get(url, {
      responseType: 'json'
    })
    debug.log(`[FileList] Fetch file list${res.data}`)
    return res.data;
  } catch (error) {
    debug.log(`[FileList]${error}`)
    return []
  }
}

const fetchFileType = (fileName) => {
  const fileExtension = fileName.split('.').pop().toLowerCase()
  const fileMapping = format.find(item => item.id === fileExtension)
  if (fileMapping) {
    return `./images/icons/formats/${fileMapping.category}.svg`
  }
  if (fileExtension === fileName) {
    return './images/icons/formats/e-file.svg'
  }
  return './images/icons/formats/e-unknown.svg'
}

const FileList = (props: { host: string }) => {
  const [fileList, setFileList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchData(l) {
      try {
        const files = await fetchFileList(`${l}/file`);
        setFileList(files);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    }

    fetchData(props.host);
  }, []);

  const handleFileDownload = async (fileName) => {
    const url = `${props.host}/download/${fileName}`
    try {
      const response = await axios.get(url, { responseType: 'blob' });
      const blob = new Blob([response.data]);
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', fileName);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }

  return (
    <FileNav position=''>
      <ul className="flex flex-wrap">
        {fileList.map(file => (
          <li key={file.id} className='flex m-4 w-24 items-center justify-center'>
            {file.type === 'file' ? (
              <div className="flex items-center">
                <button
                  className="flex flex-col items-center"
                  onClick={() => handleFileDownload(file.fileName)}
                >
                  <img
                    className='h-16'
                    src={fetchFileType(file.fileName)}
                  />
                  <span className='overflow-text text-sm'>{file.fileName}</span>
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="flex flex-col items-center"
                  onClick={() => handleFileDownload(file.fileName)}
                >
                  <img
                    className='h-16'
                    src={'./images/icons/formats/s-folder.svg'}
                  />
                  <span className='overflow-text text-sm'>{`${file.fileName}`}</span>
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </FileNav>
  );
};


export default FileList