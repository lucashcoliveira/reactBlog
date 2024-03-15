import React, { createContext, useMemo } from "react";
import { useLocalState } from "../hooks";
import { ThemeProvider as StyledProvider} from 'styled-components';
import GlobalStyle from '../styles/global';
import themes from "../styles/themes";



export const ThemeContext = createContext('dark');

const ThemeProvider = ({children}) =>{
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
    <ThemeContext.Provider value={{ handleToggleTheme }}>
      <StyledProvider theme={ currentTheme }>
      <GlobalStyle />
         {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )

}
export default ThemeProvider;