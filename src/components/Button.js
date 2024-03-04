import React, { useContext } from 'react';
import ProTypes from 'prop-types'
import { ThemeContext } from '../context/ThemeContext';

export default function Button (props) {
  const { theme } = useContext(ThemeContext)

  return(
    <>
     <button 
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
     >
      {props.children}
    </button>
    </>
  )
}

Button.prototype = {
  children: ProTypes.node.isRequired,
  onClick: ProTypes.func.isRequired,
}
