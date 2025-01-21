import React from "react";
import ModuleCard from "./ModuleCard";

const Result = ({ frequencies, repeated, onAnalyzeAgain }) => {
  console.log(repeated);
  console.log(repeated.length);
  const totalSum = Object.values(frequencies).reduce(
    (sum, moduleData) => sum + moduleData.total_matches,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Analysis Results</h2>
      <div style={{ marginBottom: "20px" }}>
        {Object.entries(frequencies).map(([moduleName, moduleData]) => (
          <ModuleCard
            key={moduleName}
            moduleName={moduleName}
            moduleData={moduleData}
            totalSum={totalSum}
          />
        ))}
      </div>
          
      {repeated.length > 0 ? (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          >
          <h3>Repeated Questions</h3>
          <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
            {repeated.map((question, index) => (
              <li key={index}>{question}</li>
              ))}
          </ul>
        </div>
        ) : (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          >
          <h3>Repeated Questions</h3>
          <p style={{ marginLeft: "20px" }}>No repeated questions found.</p>
        </div>
      )}

      <button
        onClick={onAnalyzeAgain}
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

export default Result;
