import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Chart as ChartJS,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ModuleCard = ({ moduleName, moduleData, totalSum }) => {
  const { lessons, total_matches } = moduleData;

  // Calculate percentage
  const percentage = ((total_matches / totalSum) * 100).toFixed(2);

  // Get lesson names and frequencies
  const lessonNames = Object.keys(lessons);
  const lessonFrequencies = Object.values(lessons);

  // Sort lessons by frequency in descending order and slice the top 8 for the pie chart
  const sortedLessons = lessonNames
    .map((name, index) => ({ name, frequency: lessonFrequencies[index] }))
    .sort((a, b) => b.frequency - a.frequency);

  const topLessons = sortedLessons.slice(0, 8); // Top 8 lessons for the pie chart
  const topLessonNames = topLessons.map((lesson) => lesson.name);
  const topLessonFrequencies = topLessons.map((lesson) => lesson.frequency);

  const pieData = {
    labels: topLessonNames,
    datasets: [
      {
        data: topLessonFrequencies,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const chartRef = useRef(null); // Reference to the chart

  useEffect(() => {
    // Cleanup: Destroy the chart if it exists when this component unmounts or rerenders
    const chartInstance = chartRef.current?.chartInstance;
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        border: "1px solid #ddd",
        borderRadius: "5px",
        marginBottom: "20px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Side: Module Info */}
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <h3 style={{ margin: "10px 0" }}>{moduleName}</h3>
        <p>
          <strong>Total Matches:</strong> {total_matches} (
          <strong>{percentage}%</strong>)
        </p>
        <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
          {lessonNames.map((lesson, index) => (
            <li key={index}>
              {lesson}: <strong>{lessons[lesson]}</strong>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Pie Chart */}
      <div
        style={{
          flexShrink: 0,
          width: "500px",
          height: "500px",
          position: "relative",
        }}
      >
        <Pie
          ref={chartRef} // Attach chart reference here
          data={pieData}
          options={{
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: "left",
                labels: {
                  font: {
                    size: 18, // Increase font size of labels
                  },
                  
                   // Add margin to the left of labels
                },
              },
            },
          }}
        />

      </div>
    </div>
  );
};

export default ModuleCard;
