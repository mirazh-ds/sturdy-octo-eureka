import React from 'react';
import { useTheme } from '../../utility/TjemeContext';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const PlotContainer = styled.div`
  .plotquattro {
    place-self:center;
    width: 80vw;
    height: 60vh;
    background-color: rgba(249, 249, 249, 0);
    border: 0px solid #ddd;
    padding: 0px;
  }
`;

const PlotQuattro: React.FC = () => {
  const { isDarkMode } = useTheme();

  const data: Partial<Plotly.PieData>[] = [
    {
      labels: ["Maschio", "Femmina"],
      marker: {
        colors: ["lightblue", "lightpink"],
        line: {
          color: "black",
          width: 1,
        },
      },
      textinfo: "percent" as "none" | "label" | "text" | "value" | "percent" | "label+text" | "label+value" | "label+percent" | "label+text+value" | "label+text+percent" | "label+value+percent" | "text+value" | "text+percent" | "text+value+percent" | "value+percent" | undefined,
      textposition: "outside" as const,
      values: [2345, 1972],
      type: "pie" as const,
      domain: { x: [0.0, 0.45], y: [0.0, 1.0] },
    },
    {
      labels: ["Indefinita", "Fino a 18 anni", "Da 18 a 30 anni", "Da 31 a 50 anni", "Oltre i 50 anni"],
      marker: {
        colors: ["lightgray", "lightyellow", "lightgreen", "lightcoral", "lightsalmon"],
        line: {
          color: "black",
          width: 1,
        },
      },
      textinfo: "percent",
      textposition: "outside" as const,
      values: [13, 331, 904, 1173, 896],
      type: "pie" as const,
      domain: { x: [0.55, 1.0], y: [0.0, 1.0] },
    },
  ];

  const layout = {
    title: 'Gender                         Age Distribution',
    plot_bgcolor: isDarkMode ? '#333' : '#fff',
    paper_bgcolor: isDarkMode ? '#333' : '#fff',
    font: {
      color: isDarkMode ? '#fff' : '#000'
    }
  };

  return (
    <PlotContainer>
      <Plot className='plotquattro' data={data} layout={layout} />
    </PlotContainer>
  );
};

export default PlotQuattro;