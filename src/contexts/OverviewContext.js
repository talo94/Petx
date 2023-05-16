import React, { createContext } from 'react';

export const OverviewContext = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    }
  };

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
};
export default {
  Provider,
  Consumer: OverviewContext.Consumer
};
