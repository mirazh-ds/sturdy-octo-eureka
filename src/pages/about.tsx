import React from 'react';
import './about.css';
import Wallpaper from '../components/wallpaper';
import GlassCard from '../components/atoms/card';
import { useTheme } from '../utility/TjemeContext';
import cathead from '../utility/cathead.gif';
const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    
    <>
      <Wallpaper />
      <div className={`AboutBody ${isDarkMode ? 'darkBody' : 'AboutBody'}`}>

        <div className="box">
          <span></span>
          <div className={`content ${isDarkMode ? 'darkcontent' : 'content'}`}>
          <section className={`boxheader ${isDarkMode ? 'darkboxheader' : 'boxheader'}`}>
          <h2>Group group = New Group( ); </h2>
          </section>
            

              <GlassCard>
                <section className='profile'>
                  <p>Stefano Scauzillo</p>
                  <img className='cathead' src={cathead} alt=" cat " />
                </section>
                <p>AAAAAAAAAAA</p>
              </GlassCard>

              <GlassCard>
                <section className='profile'>
                  <p>Francesco Berardino</p>
                  <img className='cathead' src={cathead} alt=" cat " />
                </section>
              </GlassCard>

              <GlassCard>
                <section className='profile'>
                  <p>Devorah Alessandra Moretti</p>
                  <img className='cathead' src={cathead} alt=" cat " />
                </section>
              </GlassCard>

              <GlassCard>
                <section className='profile'>
                  <p>Matteo Pio Panepucci</p>
                  <img className='cathead' src={cathead} alt=" cat " />
                </section>
              </GlassCard>
              

              <GlassCard>
                <section className='profile'>
                  <p>Andrea Russolillo</p>
                  <img className='cathead' src={cathead} alt=" cat " />
                </section>
              </GlassCard>

              <section className={`boxfooter ${isDarkMode ? 'darkboxfooter' : 'boxfooter'}`}>
            sadsadasdudsauhi husadu saduihsaduhi u
          </section>

          </div>
        </div>
      </div>  
    </>
  );
};

export default About;


