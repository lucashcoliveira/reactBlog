import React, { useState, useMemo, createContext, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export const ThemeContext = createContext('dark');

function useLocalState(key, initialValue='dark'){
  const [state, setState] = useState(()=>{
    const storedData = localStorage.getItem(key);

    if(storedData){
      return JSON.parse(storedData)
    }

      return initialValue
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state));
  },[key, state]);
  return [state, setState]
}

function App() {

  const [theme, setTheme] = useLocalState();

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  function handleToggleTheme(){
    setTheme(prevState => (
      prevState === 'dark' 
      ? 'light' 
      : 'dark'
      ));
  }

  return (
    <ThemeContext.Provider value={ theme }>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
          <Layout 
            onToggleTheme={handleToggleTheme}
          />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
