
import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../context';
import themes from '../../styles/themes';


export default function Footer() {

  const { handleToggleTheme }  = useContext(ThemeContext)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button" 
        onClick={ handleToggleTheme }
      >
        {themes === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}