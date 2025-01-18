// src/components/FrequenciesDisplay.jsx
import React from "react";

const Result = ({ frequencies, onAnalyzeAgain }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Analysis Results</h2>
      <div style={{ marginBottom: "20px" }}>
        {Object.entries(frequencies).map(([moduleName, moduleData]) => (
          <ModuleCard key={moduleName} moduleName={moduleName} moduleData={moduleData} />
        ))}
      </div>
      <button
        onClick={onAnalyzeAgain} // Use the passed prop here
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Analyze Again
      </button>
    </div>
  );
};

const ModuleCard = ({ moduleName, moduleData }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        marginBottom: "20px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ margin: "10px 0" }}>{moduleName}</h3>
      <p><strong>Total Matches:</strong> {moduleData.total_matches}</p>
      <LessonList lessons={moduleData.lessons} />
    </div>
  );
};

const LessonList = ({ lessons }) => {
  return (
    <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
      {Object.entries(lessons).map(([lesson, matches]) => (
        <li key={lesson}>
          {lesson}: <strong>{matches}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Result;
