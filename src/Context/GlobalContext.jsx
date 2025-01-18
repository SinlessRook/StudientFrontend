import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState({
    username: '',
    password: '',
  });

  return (
    <GlobalContext.Provider value={{ authTokens, setAuthTokens }}>
      {children}
    </GlobalContext.Provider>
  );
};
