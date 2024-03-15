import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import ThemeProvider from './context';

function App() {
  return (
      <ThemeProvider>
        <GlobalStyle />
          <Layout />
      </ThemeProvider>
  );
};

export default App;
