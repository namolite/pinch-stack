// @ts-nocheck
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { userDownload } from '@Utils/file'
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

  const handleFileDownloadd = async (fileName) => {
    try {
      const res = await axios.get(`${props.host}/download/${fileName}`, {
        responseType: 'blob'
      });
      userDownload(res.data, fileName);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleFileDownload = async (fileName) => {
    try {
      const response = await fetch(`/api/file?url=${props.host}/download/${fileName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  const downloadFile = (url) => async () => {
    try {
      const response = await window.electron.downloadFile(url);
      if (response.success) {
        console.log('文件下载成功！保存路径:', response.filePath);
      } else {
        console.error('文件下载失败:', response.error);
      }
    } catch (error) {
      console.error('下载文件时出错:', error);
    }
  }


  return (
    <FileNav position='a'>
      <div onClick={downloadFile('http://localhost:23333/download/a.zip')}>aaaaaaa</div>
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