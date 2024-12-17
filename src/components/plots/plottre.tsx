import React from 'react';
import { useTheme } from '../../utility/TjemeContext';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const PlotContainer = styled.div`
  .plottre {
    width: 80vw;
    height: 60vh;
    background-color: rgba(249, 249, 249, 0);
    border: 0px solid #ddd;
    padding: 0px;
  }
`;

const PlotTre: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data = [
    {
      hole: 0.2,
      labels: ["Autovettura", "Motoveicolo", "Autocarro-Autotreno", "Ciclomotore", "Velocipede", "Altro"],
      marker: {
        colors: ["lightblue", "lightgreen", "lightcoral", "lightsalmon", "lightpink", "lightyellow", "lightgray"],
        line: {
          color: "black",
          width: 1,
        },
      },
      textinfo: "percent" as "percent",
      textposition: "outside" as const,
      values: [1820, 190, 115, 112, 62, 18],
      type: "pie" as const,
    },
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
    <PlotContainer>
      <Plot className='plottre' data={data} layout={layout} />
    </PlotContainer>
  );
};

export default PlotTre;