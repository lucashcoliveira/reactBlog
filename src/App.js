import React from 'react';

import Layout from './components/Layout';
import ThemeProvider from './context';

function App() {
  return (
      <ThemeProvider>
          <Layout />
      </ThemeProvider>
  );
};

export default App;
