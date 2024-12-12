import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

import './menu.css';
import About from '../pages/about';

const Menu: React.FC = () => {
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
            <div>
                <div>
                    <ul>
                        <li><a className='MenuA' href="#" onClick={closeMenu}><Link className='MenuLink' to="/">Home</Link></a></li>
                        <li><a className='MenuA' href="#" onClick={closeMenu}><Link className='MenuLink' to="/">Home</Link></a></li>
                        <li><a className='MenuA' href="#" onClick={closeMenu}><Link className='MenuLink' to="/">Home</Link></a></li>
                        <li><a className='MenuA' href="#" onClick={closeMenu}><Link className='MenuLink' to="/about">About</Link></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Menu;