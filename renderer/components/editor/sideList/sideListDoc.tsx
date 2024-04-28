import { useContext } from 'react';

import { EditorContext } from '@Components/editor/context';


const SideListDoc = () => {
  const { editor, provider } = useContext(EditorContext)
  return (
    <div>
      {editor}
      {provider}
    </div>
  );
};

export default SideListDoc;