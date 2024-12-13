import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { useTheme } from  '../utility/TjemeContext';
import './menu.css';
import About from '../pages/about';
import Loader from './atoms/loader';

const Menu: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
  const closeMenu = () => {
    const toggler = document.querySelector('.toggler') as HTMLInputElement;
    if (toggler) {
      toggler.checked = false;
    }
  };

  return (
    <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
            <div className={`div ${isDarkMode ? 'darkdiv' : 'div'}`}>
                <div className='uelle'>
                  
                    <ul>
                        <li><p className='MenuA' onClick={closeMenu}><Link className='MenuLink' to="/">Home</Link>      </p ></li>
                        <li><p className='MenuA' onClick={closeMenu}><Link className='MenuLink' to="/">Home</Link>      </p ></li>
                        <li><p className='MenuA' onClick={closeMenu}><Link className='MenuLink' to="/about">About</Link></p ></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Menu;