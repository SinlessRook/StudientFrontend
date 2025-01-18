import React from "react";
import ModuleCard from "./ModuleCard";

const Result = ({ frequencies, onAnalyzeAgain }) => {
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
