import { useState, createContext } from 'react';
import { languages } from 'texts/common';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <AppContext.Provider value={{ languages, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
