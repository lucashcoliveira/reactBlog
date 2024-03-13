
import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../App';

export default function Footer({ onToggleTheme }) {

  const theme  = useContext(ThemeContext)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button" 
        onClick={ onToggleTheme }
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}