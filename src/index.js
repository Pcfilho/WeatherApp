import React from 'react';

import DashBoard from './pages/Dashboard/dashboard';

import ThemeProvider from './contexts/theme';

export default function App() {
  return(
    <ThemeProvider>
      <DashBoard />
    </ThemeProvider>
  )
}

