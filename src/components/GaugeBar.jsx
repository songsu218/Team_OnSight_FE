import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const GaugeBar = ({ percentileRank }) => {
  const data = {
    labels: ['show', 'hide'],
    datasets: [
      {
        label: 'Shop1',
        data: [100 - percentileRank, percentileRank],
        borderRadius: 2,
        borderWidth: 20,
        backgroundColor: ['#0295CF', '#ffffff'],
        borderColor: ['#ffffff', '#ffffff'],
        borderDash: [],
        circumference: 180,
        rotation: 270,
        hoverBackgroundColor: ['#0295CF', '#ffffff'],
        hoverBorderColor: ['#ffffff', '#ffffff'],
        hoverBorderWidth: 10,
        hoverOffset: 0,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    hover: {
      mode: null,
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GaugeBar;
