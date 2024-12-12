import React from 'react';
import './card.css';

interface GlassCardProps {
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return (
    <div className='card'>
      {children}
      <div className='card-footer'></div>
    </div>
  );
};

export default GlassCard;