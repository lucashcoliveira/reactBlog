
import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../context';
import themes from '../../styles/themes';

export default function Header() {

  const { handleToggleTheme }  = useContext(ThemeContext)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={ handleToggleTheme }
      >
        {themes === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
