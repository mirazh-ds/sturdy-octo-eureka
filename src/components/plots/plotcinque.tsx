import React from 'react';
import { useTheme } from '../../utility/TjemeContext';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const PlotContainer = styled.div`
  .plotcinque {
    place-self:center;
    width: 80vw;
    height: 60vh;
    background-color: rgba(249, 249, 249, 0);
    border: 0px solid #ddd;
    padding: 0px;
  }
`;

const PlotCinque: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data = [
    {
      histfunc: 'sum' as 'sum',
      marker: {
        color: ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon'],
      },
      x: ['2019-DatiPuglia', '2019-ISTAT', '2023-DatiPuglia', '2023-ISTAT'],
      y: [685, 1687, 837, 1817],
      type: 'histogram' as const,
    },
  ];

  const layout = {
    title: 'Histogram Example',
    plot_bgcolor: isDarkMode ? '#333' : '#fff',
    paper_bgcolor: isDarkMode ? '#333' : '#fff',
    font: {
      color: isDarkMode ? '#fff' : '#000',
    },
  };

  return (
    <PlotContainer>
      <Plot className='plotcinque' data={data} layout={layout} />
    </PlotContainer>
  );
};

export default PlotCinque;