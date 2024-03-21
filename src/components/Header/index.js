
import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../context';

export default function Header() {
  const { handleToggleTheme, theme }  = useContext(ThemeContext)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={ handleToggleTheme }
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
};
