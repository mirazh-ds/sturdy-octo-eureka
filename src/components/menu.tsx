import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { useTheme } from  '../utility/TjemeContext';
import './menu.css';
import About from '../pages/about';
import Loader from './atoms/vertcarousel';

const Menu: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const closeMenu = (event: React.MouseEvent) => {
  event.stopPropagation();
  const menulink = document.querySelector('.toggler') as HTMLInputElement;
  if (menulink) {
    menulink.checked = false;
  }
  };

  return (
  <div className="menu-wrap">
    <input type="checkbox" className="toggler"/>
    <div className="hamburger"><div></div></div>
    <div className={`menu ${isDarkMode ? 'darkMenu' : 'menu'}`}>
      <div className={`div ${isDarkMode ? 'darkdiv' : 'div'}`}>
        <div className='uelle'>
        <label className="ui-switch">
     <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
     <div className="slider">
     <div className="circle"></div>
     </div>
    </label>
          <ul>
            <li><p className='MenuA' onClick={closeMenu}><Link className={`MenuLink ${isDarkMode ? 'darkMenuLink' : 'MenuLink'}`} to="/"       >HOME</Link></p ></li>
            <li><p className='MenuA' onClick={closeMenu}><Link className={`MenuLink ${isDarkMode ? 'darkMenuLink' : 'MenuLink'}`} to="/project">L'IDEA</Link></p ></li>
            <li><p className='MenuA' onClick={closeMenu}><Link className={`MenuLink ${isDarkMode ? 'darkMenuLink' : 'MenuLink'}`} to="/about"  >TEAM</Link></p ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Menu;