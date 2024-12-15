import React from 'react';
import './wallpaper.css';
import { useTheme } from '../utility/TjemeContext';
import Plot from 'react-plotly.js';

const Scatter3DPlot: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data: Plotly.Data[] = [
    {
      marker: {
        color: [817, 381, 12, 4],
        colorscale: [
          [0, "#440154"],
          [0.1111111111111111, "#482878"],
          [0.2222222222222222, "#3e4989"],
          [0.3333333333333333, "#31688e"],
          [0.4444444444444444, "#26828e"],
          [0.5555555555555556, "#1f9e89"],
          [0.6666666666666666, "#35b779"],
          [0.7777777777777778, "#6ece58"],
          [0.8888888888888888, "#b5de2b"],
          [1, "#fde725"]
        ],
        opacity: 0.8,
        size: 8
      },
      mode: "markers",
      text: ["Sereno", "Nuvoloso", "Pioggia", "Non specificato"],
      x: [0, 1, 2, 3],
      y: ["Sereno", "Nuvoloso", "Pioggia", "Non specificato"],
      z: [817, 381, 12, 4],
      type: "scatter3d"
    }
  ];

  const layout = {
    title: '3D Scatter Plot Example',
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

export default Scatter3DPlot;