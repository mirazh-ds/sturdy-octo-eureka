import React from 'react';
import { useTheme } from '../../utility/TjemeContext';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const PlotContainer = styled.div`
  .plotdue {
     place-self:center;
    width: 80vw;
    height: 60vh;
    background-color: rgba(249, 249, 249, 0);
    border: 0px solid #ddd;
    padding: 0px;
  }
`;

const PlotDue: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data = [
    {
      line: {
        color: 'turquoise',
        width: 2,
      },
      marker: {
        color: 'teal',
        size: 8,
      },
      mode: 'lines+markers' as 'lines+markers',
      x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      y: [30, 15, 14, 14, 5, 6, 4, 24, 92, 68, 80, 92, 88, 77, 65, 56, 81, 78, 86, 58, 78, 41, 31, 31],
      type: 'scatter' as const,
    },
  ];

  const layout = {
    title: 'Hourly Data',
    plot_bgcolor: isDarkMode ? '#333' : '#fff',
    paper_bgcolor: isDarkMode ? '#333' : '#fff',
    font: {
      color: isDarkMode ? '#fff' : '#000'
    }
  };

  return (
    <PlotContainer>
      <Plot className='plotdue' data={data} layout={layout} />
    </PlotContainer>
  );
};

export default PlotDue;