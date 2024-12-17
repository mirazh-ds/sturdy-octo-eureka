import React from 'react';
import { useState } from 'react';
import { useTheme } from '../utility/TjemeContext';
import Wallpaper from '../components/wallpaper';
import './dashboard.css';
import PlotUno from '../components/plots/plotuno';
import PlotDue from '../components/plots/plotdue';
import PlotTre from '../components/plots/plottre';
import PlotQuattro from '../components/plots/plotquattro';
import PlotCinque from '../components/plots/plotcinque';
import PlotSei from '../components/plots/plotsei';
import { Plots } from 'plotly.js';

const Dashboard: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isHeaderClicked, setIsHeaderClicked] = useState<boolean>(false);

  const handleCheckboxChange = (option: number) => {
    setSelectedOption(option);
  };

  const handleHeaderClick = () => {
    setSelectedOption(null);
    setIsHeaderClicked(!isHeaderClicked);
  };

  const optionNames = [
    'Studio dataset I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'Elaborazione reti Neurali I',
    'II',
    'III'
  ];

  return (
    <>
      <Wallpaper />
      <div className={`AboutBody ${isDarkMode ? 'darkBody' : 'AboutBody'}`}>
        <div className={`box ${isDarkMode ? 'darkBox' : 'box'}`}>
          <span></span>
          <div className={`dashcontent ${isDarkMode ? 'darkdashcontent' : 'content'}`}>
            <section className={`boxheader ${isDarkMode ? 'darkboxheader' : 'boxheader'}`} onClick={handleHeaderClick}>
              <h2 className={isHeaderClicked ? 'clicked' : ''}>DASHBOARD E DATI</h2>
            </section>

            <div className={`prechoicedash ${selectedOption !== null ? 'hidden' : ''} ${isDarkMode ? 'darkPrechoicedash' : ''}`}>
              Descrizione sulla pagina dati e dashboard. <br />
            </div>

            <div className={`DashboardLeftAside ${selectedOption !== null ? 'shrunk' : ''} ${isDarkMode ? 'darkDashboardLeftAside' : ''}`}>
              {optionNames.map((name, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option${index + 1}`}
                    name="dashboardOptions"
                    checked={selectedOption === index + 1}
                    onChange={() => handleCheckboxChange(index + 1)}
                    className={`DashboardCheck ${isDarkMode ? 'darkDashboardCheck' : ''}`}
                  />
                  <label htmlFor={`option${index + 1}`} className={isDarkMode ? 'darkLabel' : ''}>{name}</label>
                </div>
              ))}
            </div>

            <div className={`prechoicedash ${selectedOption !== null ? 'hidden' : ''} ${isDarkMode ? 'darkPrechoicedash' : ''}`}>
              Descrizione sulla pagina dati e dashboard. <br />
              hfdsbsfd s fbf dshb kjashbfkj sdf s fhbslh dbflsa bfs lhsbf lkhb saldbf sjfa bskjdfh bskjdhfbs hbsidfk bsd fbsb
            </div>

            <div className={`one ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 1 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                Incidenti Stradali per giorni della settimana
              </div>
              <p></p>
              <PlotUno />
            </div>
            <div className={`two ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 2 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                Incidenti Stradali nel tempo per fascia oraria
              </div>
              <p>
                La quantità di incidenti stradali come previsto si mantiene più alta durante gli orari lavorativi, ma si può notare un preoccupante accumulo di dati nella notte
              </p>
              <PlotDue />
            </div>
            <div className={`three ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 3 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                    Distribuzione degli incidenti per tipo di veicolo
              </div>
              <PlotTre />
            </div>
            <div className={`four ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 4 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                Distribuzioni degli incidenti per sesso e per età
              </div>
              <PlotQuattro />
            </div>
            <div className={`five ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 5 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                Confronto con dati ISTAT e dati puglia del numero di incidenti per anno
              </div>
              <PlotCinque />
            </div>
            <div className={`six ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 6 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                Dati gravità degli incidenti
              </div>
              <PlotSei />
            </div>
            <div className={`seven ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 7 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                plot bho  - ?????
              </div>
              <PlotDue />
            </div>
            <div className={`eight ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 8 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                plot bho  - ?????
              </div>
              <PlotDue />
            </div>
            <div className={`nine ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: selectedOption === 9 ? 'block' : 'none' }}>
              <div className={`dashplottitle ${isDarkMode ? 'darkDashplottitle' : ''}`}>
                plot bho  - ?????
                <PlotDue/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;