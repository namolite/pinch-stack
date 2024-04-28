import { useState, createContext } from 'react'


const DocContext = createContext(null)

export const ListProvider = ({ children }) => {
  // const [theme, setTheme] = useState('light');

  return (
    <DocContext.Provider value={''}>
      {children}
    </DocContext.Provider>
  );
};

export default DocContext;