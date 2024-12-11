import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

import './menu.css';
import About from '../pages/about';

const Menu: React.FC = () => {
  return (
    <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="#"><Link to="/">Home</Link></a></li>
                        <li><a href="#">Progetto Us</a></li>
                        <li><a href="#">Finalità</a></li>
                        <li><a href="#"><Link to="/about">About</Link></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <Routes>
        <Route path="/"  />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
};

export default Menu;