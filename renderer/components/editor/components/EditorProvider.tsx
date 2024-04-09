import React, { useEffect, useState } from 'react';
import { AffineEditorContainer } from '@blocksuite/presets';
import { CollectionProvider } from '../provider/provider';
import { initEditor } from '../init';
import { EditorContext } from '../context';


export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, setEditor] = useState<AffineEditorContainer | null>(null);
  const [provider, setProvider] = useState<CollectionProvider | null>(null);

  useEffect(() => {
    initEditor().then(({ editor, provider }) => {
      setEditor(editor);
      setProvider(provider);
    });
  }, []);

  return (
    <EditorContext.Provider
      value={{
        editor,
        provider,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
