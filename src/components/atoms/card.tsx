import React from 'react';
import './card.css';
import { useTheme } from '../../utility/TjemeContext';

interface GlassCardProps {
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
 const {isDarkMode} = useTheme()
  return (
    <div className={`card ${isDarkMode ? 'cardDark' : 'card'}`}>
      {children}
    </div>
  );
};

export default GlassCard;