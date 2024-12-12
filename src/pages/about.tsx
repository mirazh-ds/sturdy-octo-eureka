import React from 'react';
import './about.css';
import Wallpaper from '../components/wallpaper';
import GlassCard from '../components/atoms/card';

const About: React.FC = () => {
  return (
    <>
      <Wallpaper />
      <div className='About'>
      <section className='AboutSection'>
        <GlassCard>
          <h1 className='AboutH1'>About</h1>
          <p className='AboutP'>Hi, I'm a cat. I like to sleep, eat, and play. I also like to code. I'm a cat who codes. I'm a coding cat.</p>
        </GlassCard>
        <GlassCard>
          <h1 className='AboutH1'>About2</h1>
          <p className='AboutP'>Hi, I'm a cat. I like to sleep, eat, and play. I also like to code. I'm a cat who codes. I'm a coding cat.</p>
        </GlassCard>
        <GlassCard>
          <h1 className='AboutH1'>About3</h1>
          <p className='AboutP'>Hi, I'm a cat. I like to sleep, eat, and play. I also like to code. I'm a cat who codes. I'm a coding cat.</p>
        </GlassCard>
        <GlassCard>
          <h1 className='AboutH1'>About4</h1>
          <p className='AboutP'>Hi, I'm a cat. I like to sleep, eat, and play. I also like to code. I'm a cat who codes. I'm a coding cat.</p>
        </GlassCard>
      </section>
      </div>
    </>
  );
};

export default About;