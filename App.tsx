import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import AppProvider from './src/common/context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
}
