import React from 'react';
import { themeContext } from './toggleContext';
import { useContext } from 'react';
import './toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  const handleClick = ()=>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon/>
      <Sun/>
      <div 
        className="t-button"
        style={darkmode? {left:'2px'}:{right:'2px'}}>
      </div>
    </div>
  )
};

export default Toggle;