import React from 'react';
import './wallpaper.css';
import { useTheme } from '../utility/TjemeContext';
import Plot from 'react-plotly.js';


const GiorniPlot: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data: Plotly.Data[] = [
    {
      type: 'scatter',
      x: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'],
      y: [199, 173, 196, 178, 186, 177, 105],
      mode: 'lines+markers',
      name: '',
      marker: { color: isDarkMode ? 'yellow' : 'blue' },
      line: { shape: 'spline',
              color: isDarkMode ? 'white' : 'red' } 
    }
  ];

  const layout = {
    title: 'Scatter Plot Example',
    xaxis: {
      title: 'Days of the Week',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Values',
      showline: false
    },
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

export default GiorniPlot;