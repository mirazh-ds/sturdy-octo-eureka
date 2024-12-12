import React from 'react';
import './about.css';
import Wallpaper from '../components/wallpaper';
import GlassCard from '../components/atoms/card';
import { useTheme } from '../utility/TjemeContext';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    
    <>
      <Wallpaper />
      <div className={`AboutBody ${isDarkMode ? 'darkBody' : 'AboutBody'}`}>
      <div className='About'>
      <section className='AboutSection'>
        
      <div className='uno'>
        <GlassCard>
          <h1 className='AboutH1'>Team</h1>
          <p className='AboutP'>Stefano Scauzillo Matteo Panepucci Devorah Moretti Francesco Berardino Andrea Russolillo</p>
          <div className='card-footer'>@GitHub @GitHub @GitHub @GitHub @GitHub</div>
        </GlassCard>
      </div>

      <div className='dos'>
        <GlassCard>
          <h1 className='AboutH1'>Idee</h1>
          <p className='AboutP'>
            Le idee del team sono nate da brainstorming intensi e collaborativi. Ogni membro ha portato le proprie esperienze e prospettive uniche, contribuendo a creare un ambiente creativo e stimolante.
          </p>
          <div className='card-footer'></div>
        </GlassCard>
      </div>

      <div className='AboutImageDiv'>
        <img className='AboutImage' src="https://via.placeholder.com/500x300" alt="placeholder" />
      </div>

      <div className='tres'>
        <GlassCard>
          <h1 className='AboutH1'>About3</h1>
          <p className='AboutP'>Hi, I'm a cat. I like to sleep, eat, and play. I also like to code. I'm a cat who codes. I'm a coding cat.</p>
          <div className='card-footer'>footer footer footer</div>
        </GlassCard>
      </div>
      
      </section>
      </div>
      </div>
    </>
  );
};

export default About;