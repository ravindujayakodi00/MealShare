import React from "react";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

function EventSuccess({ successPercentage }) {
  const data = {
    labels: ["Success", "Failure"],
    datasets: [
      {
        data: [successPercentage, 100 - successPercentage],
        backgroundColor: ["#2F855A", "#E53E3E"],
        hoverBackgroundColor: ["#234737", "#9B2C2C"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold mt-8 mb-4">
        Event Success Percentage: {successPercentage}%
      </h1>
      <div className="w-28 h-28">
        <Doughnut data={data} options={chartOptions} />
      </div>
    </div>
  );
}

export default EventSuccess;
