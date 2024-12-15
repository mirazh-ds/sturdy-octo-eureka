import React from 'react';
import './wallpaper.css';
import { useTheme } from '../utility/TjemeContext';
import Plot from 'react-plotly.js';
import * as Plotly from 'plotly.js';

const EtaPlot: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data: Plotly.Data[] = [
    {
      labels: ["Indefinita", "Fino a 18 anni", "Da 18 a 30 anni", "Da 31 a 50 anni", "Oltre i 50 anni"],
      values: [13, 331, 904, 1173, 896],
      type: 'pie'
    }
  ];

  const layout = {
    title: 'Pie Chart Example',
    plot_bgcolor: isDarkMode ? '#333' : '#fff',
    paper_bgcolor: isDarkMode ? '#333' : '#fff',
    font: {
      color: isDarkMode ? '#fff' : '#000'
    }
  };

  return (
    <Plot className='plot' data={data} layout={layout} />
  );
};

export default EtaPlot;