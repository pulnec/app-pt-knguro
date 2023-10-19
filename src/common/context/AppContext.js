import React, {createContext, useState} from 'react';
import packagesData from '../mock/packages.json';

export const AppContext = createContext();

export default function AppProvider({children}) {
  const [packages, setPackages] = useState(packagesData);

  return (
    <AppContext.Provider
      value={{
        packages,
        setPackages,
      }}>
      {children}
    </AppContext.Provider>
  );
}
