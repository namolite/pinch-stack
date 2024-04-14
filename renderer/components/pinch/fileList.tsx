import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { userDownload } from '@Utils/file'
import debug from '@Utils/debug'


const fetchFileList = async (url) => {
  try {
    const res = await axios.get(url,{
      responseType: 'json'
    });
    debug.log(`[FileList] Fetch file list${res.data}`);
    return res.data;
  } catch (error) {
    debug.log(`[FileList]${error}`);
    return [];
  }
};

const FileList = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const files = await fetchFileList('http://localhost:23333/file');
        setFileList(files);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    }

    fetchData();
  }, []);

  const handleFileDownload = async (fileName) => {
    try {
      const res = await axios.get(`http://localhost:23333/file/${fileName}`, {
        responseType: 'blob'
      });
      userDownload(res.data, fileName);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <p>aaa</p>
      <ul>
        {fileList.map(file => (
          <li key={file.id}>
            {file.type === 'file' ? (
              <button onClick={() => handleFileDownload(file.fileName)}>
                {file.fileName}
              </button>
            ) : (
              `${file.fileName} (Folder)`
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default FileList