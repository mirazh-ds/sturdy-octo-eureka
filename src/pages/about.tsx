import React from 'react';
import './about.css';
import Wallpaper from '../components/wallpaper';

const About: React.FC = () => {
  return (
<>
      <Wallpaper />
      <section className='AboutSection'>
        <h1 className='AboutH1'>About</h1>
        <p className='AboutP'>Hi, I'm a cat. I like to sleep, eat, and play. I also like to code. I'm a cat who codes. I'm a coding cat.</p>
      </section>
</>
  );
};

export default About;