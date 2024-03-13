
import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../App';

export default function Header({ onToggleTheme }) {

  const theme  = useContext(ThemeContext)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={ onToggleTheme }
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
