import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState({
    access: false,
    refresh: false,
  });

  return (
    <GlobalContext.Provider value={{ authTokens, setAuthTokens }}>
      {children}
    </GlobalContext.Provider>
  );
};
