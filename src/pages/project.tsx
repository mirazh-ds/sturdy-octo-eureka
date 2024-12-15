import React from 'react';
import { useTheme } from '../utility/TjemeContext';
import Wallpaper from '../components/wallpaper';
import './project.css';


const Project: React.FC = () => {
 const {isDarkMode} = useTheme()
  return (
    <> <Wallpaper />
<div className = "container">
    <h2>Test</h2>
</div>
</>
  );
};



export default Project;