import React from 'react';
import { useTheme } from '../utility/TjemeContext';
import Wallpaper from '../components/wallpaper';
import GiorniPlot from '../components/giorniplot';
import EtaPlot from '../components/etaplot';
import Scatter3DPlot from '../components/severitaplot';
import './project.css';

const Project: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Wallpaper />

      <div className={`ProjectBody ${isDarkMode ? 'DarkProjectBody' : ''}`}>
        <h2 className={`ProjectTitle ${isDarkMode ? 'DarkProjectTitle' : ''}`}>
          Test
        </h2>

        <div className={`ProjectDescription ${isDarkMode ? 'DarkProjectDescription' : ''}`}>
          <p>
            Questo progetto è stato realizzato per l' hackathon etc etc.
            Il dataset utilizzato è stato concesso da <a className='datalink' href="https://wwww.dati-puglia.gov">dati puglia </a>.
          </p>
        </div>

        <div className={`ProjectPlots ${isDarkMode ? 'DarkProjectPlots' : ''}`}>
   
   
   
          <div className={`Plots ${isDarkMode ? 'DarkPlots' : ''}`}>
            <GiorniPlot />
          </div>

            <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>

            </div>



          <div className={`Plots ${isDarkMode ? 'DarkPlots' : ''}`}>
            <EtaPlot />
          </div>

          <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>

          </div>



          <div className={`Plots ${isDarkMode ? 'Dark3Plots' : 'd3d'}`}>
            <Scatter3DPlot />
          </div>

          <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>

          </div>



          <div className={`Plots ${isDarkMode ? 'DarkPlots' : ''}`}>
            <GiorniPlot />
          </div>
          <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>

          </div>

        </div>
      </div>
    </>
  );
};

export default Project;
