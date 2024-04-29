import { useState, createContext } from 'react'

import { EditorProvider } from './components/EditorProvider';
import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
import EditorContainer from './components/EditorContainer';


const Editor = () => {

  return (
    <EditorProvider>
      <div className="app">
        <div className=''>
          <Sidebar />
        </div>
        <div className="main-content">
          <EditorContainer />
        </div>
      </div>
    </EditorProvider>
  );
}

export default Editor