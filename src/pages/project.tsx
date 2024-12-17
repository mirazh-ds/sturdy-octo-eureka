import React from 'react';
import { useTheme } from '../utility/TjemeContext';
import Wallpaper from '../components/wallpaper';
import GiorniPlot from '../components/giorniplot';
import EtaPlot from '../components/etaplot';
import Scatter3DPlot from '../components/severitaplot';
import './project.css';
import Loader from '../components/atoms/loader';

const Project: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Wallpaper />

      <div className={`ProjectBody ${isDarkMode ? 'DarkProjectBody' : ''}`}>
        <h2 className={`ProjectTitle ${isDarkMode ? 'DarkProjectTitle' : ''}`}>
          <strong className={`Strong ${isDarkMode ? 'DarkStrong' : ''}`}>
            Il Progetto  
             </strong>
             <br />
                Fasi iniziali, analisi, idee e conclusioni.
        </h2>

        <div className={`ProjectDescription ${isDarkMode ? 'DarkProjectDescription' : ''}`}>
          <p>
          Il progetto è stato realizzato durante l'evento <a className='datalink' href="https://dati.puglia.it/hackathon-2024">hackathon di Opentusk 2024</a> a Bari.
            <br />
            <br />
            <strong>ZonaZero</strong> è un progetto che nasce con l'obiettivo di analizzare i dati relativi agli incidenti stradali in Puglia, 
            al fine di <strong>individuare le zone e i periodi a rischio</strong>.
            <br />
            L'idea è quella di creare un'applicazione che segnali le zone a rischio di incidenti, integrando i dati con <strong>Open Street Maps</strong>.
            <br />
            <br />
            Le finalità del progetto sono molteplici: da un lato, si vuole sensibilizzare i cittadini sul tema della sicurezza stradale, contemporaneamente si vuole fornire ai comuni strumenti per la prevenzione e la gestione degli incidenti.
            
          </p>
        </div>

        <div className={`ProjectPlots ${isDarkMode ? 'DarkProjectPlots' : ''}`}>
   
   
   
          <div className={`Plots ${isDarkMode ? 'DarkPlots' : ''}`}>
            <GiorniPlot />
          </div>

            <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>
              <aside className='AsidePlots'>
                    Come primo compito, dopo aver scelto la tematica e il dataset, abbiamo deciso di visualizzarlo in piu modi possibili cosi da stimolare possibili idee...
              </aside>
            </div>



         

          <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>
            <aside className='AsidePlots'>
              Ovviamente su una vasta scala di campioni era probabile la presenza di una omogenea distribuzione di eta, ma ciò non toglie che ci siano delle anomalie... Quindi abbiamo deciso di incrociare i dati forniti dalla regione con altri dataset. <br />( "istat.it" , "kaggle.com")
            </aside>
          </div>
          <div className={`Plots ${isDarkMode ? 'DarkPlots' : ''}`}>
            <EtaPlot />
          </div>



          <div className={`Plots ${isDarkMode ? 'Dark3Plots' : 'd3d'}`}>
            <Scatter3DPlot />
          </div>

          <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>
          <aside className='AsidePlots'>
              In questo testo si spiega come l'idea di raccogliere informazioni su periodi e zone ad alto rischio di incidenti possa essere un'idea interessante per la vita del cittadino... <br />
              e per la gestione di queste da parte del comune
          </aside>
          </div>




          <div className={`PlotsDescription ${isDarkMode ? 'DarkPlotsDescription' : ''}`}>
          <aside className='AsidePlots'>
              Infine la raccolta di dati forniti dalla regione e segnalazioni del cittandino puo essere usata in combinazione con il machine learning e reti neurali per dare vita ad un app che <strong> consigli in tempo reale percorsi piu sicuri per il pedone e per il guidatore</strong>. 
          </aside>
          </div>
          <div className={`Plots ${isDarkMode ? 'DarkPlots' : ''}`}>
            <GiorniPlot />
          </div>

        </div>
        <div className={`ProjectDescriptionFooter ${isDarkMode ? 'DarkProjectDescriptionFooter' : ''}`}>
          <p>
          Questo progetto è stato realizzato per l' hackathon etc etc
            Il dataset utilizzato è stato concesso da <a className='datalink' href="https://dati.puglia.it/web/guest/">dati.puglia.it</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
