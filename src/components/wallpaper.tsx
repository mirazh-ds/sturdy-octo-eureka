import React from 'react';
import './wallpaper.css';
import { useTheme } from '../utility/TjemeContext';

const Wallpaper: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <section className={`Wallpaper ${isDarkMode ? 'dark' : 'light'}`}>
      <label className="ui-switch">
         <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
         <div className="slider">
         <div className="circle"></div>
         </div>
      </label>
      <div className={`bg ${isDarkMode ? 'dark-bg' : 'light-bg'}`}></div>
      <div className={`bg bg2 ${isDarkMode ? 'dark-bg' : 'light-bg'}`}></div>
      <div className={`bg bg3 ${isDarkMode ? 'dark-bg' : 'light-bg'}`}></div>
    </section>
  );
};

export default Wallpaper;