import React from 'react';
import AppRouter from './router/AppRouter';
import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
