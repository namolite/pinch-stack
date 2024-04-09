import { EditorProvider } from './components/EditorProvider';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import EditorContainer from './components/EditorContainer';

const Editor = () => {
  return (
    <EditorProvider>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <EditorContainer />
        </div>
      </div>
    </EditorProvider>
  );
}

export default Editor;