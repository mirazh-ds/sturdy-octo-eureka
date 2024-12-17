import React from 'react';
import { useTheme } from '../../utility/TjemeContext';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const PlotContainer = styled.div`
  .plotuno {
    place-self:center;
    width: 80vw;
    height: 60vh;
    background-color: rgba(249, 249, 249, 0);
    border: 0px solid #ddd;
    padding: 0px;
  }
`;

const PlotUno: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data = [
    {
      marker: {
        color: [
          'lightgreen',
          'lightcoral',
          'lightsalmon',
          'lightpink',
          'lightyellow',
          'lightgray',
        ],
      },
      x: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'],
      y: [199, 173, 196, 178, 186, 177, 105],
      type: 'bar' as const,
    },
  ];

  const layout = {
    title: 'Bar Chart Incidenti',
    plot_bgcolor: isDarkMode ? '#333' : '#fff',
    paper_bgcolor: isDarkMode ? '#333' : '#fff',
    font: {
      color: isDarkMode ? '#fff' : '#000'
    }
  };

  return (
    <PlotContainer>
      <Plot className='plotuno' data={data} layout={layout} />
    </PlotContainer>
  );
};

export default PlotUno;