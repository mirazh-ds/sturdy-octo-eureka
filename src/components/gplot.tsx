import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

interface PlotData {
  data: Array<{
    x: string[];
    y: number[];
    type: string;
  }>;
  layout: {
    title: string;
    xaxis: {
      title: string;
    };
    yaxis: {
      title: string;
    };
  };
}

const GiorniPlot: React.FC = () => {
  const [plotData, setPlotData] = useState<PlotData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/giorni');
        const data = await response.json();
        setPlotData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      {plotData ? (
        <Plot
          data={plotData.data}
          layout={plotData.layout}
        />
      ) : (
        <p>Loading plot chillops...</p>
      )}
    </div>
  );
};

export default GiorniPlot;
