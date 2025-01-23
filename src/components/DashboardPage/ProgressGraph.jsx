import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables); // Register all Chart.js components

const ProgressGraph = () => {
  useEffect(() => {
    // Get the canvas context
    const ctx = document.getElementById("performanceGraph").getContext("2d");

    // Destroy any existing chart instance
    const existingChart = Chart.getChart("performanceGraph");
    if (existingChart) {
      existingChart.destroy();
    }

    // Create the chart
    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Example labels
        datasets: [
          {
            label: "Progress Over Time",
            data: [20, 40, 60, 80], // Example data points
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "category", // Explicitly specify the scale type
            title: {
              display: true,
              text: "Weeks",
              font: { size: 14, weight: "bold" },
            },
          },
          y: {
            title: {
              display: true,
              text: "Progress (%)",
              font: { size: 14, weight: "bold" },
            },
            beginAtZero: true,
            ticks: { stepSize: 20 },
          },
        },
        plugins: {
          legend: {
            labels: { font: { size: 12 } },
          },
        },
      },
    });

    return () => {
      // Cleanup the chart instance on unmount
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="border-2 border-gray-900 rounded p-4 bg-[rgba(255, 248, 239, 0.30);]">
      <h2 className="text-lg font-bold mb-2">Progress Graph</h2>
      <div style={{ height: "300px", width: "100%" }}>
        <canvas id="performanceGraph"></canvas>
      </div>
    </div>
  );
};

export default ProgressGraph;
