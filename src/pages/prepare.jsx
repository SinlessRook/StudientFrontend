// src/pages/PreparePage.jsx
import React, { useState } from "react";
import AnalyzeForm from "../components/PreparePage/AnalyzeForm";
import Result from "../components/PreparePage/Result";

const PreparePage = () => {
  const [analysisData, setAnalysisData] = useState(null);

  const handleAnalysisSubmit = async (formData) => {
    // Submit data to backend
    const response = await fetch("http://127.0.0.1:8000/focus_area/analyzer/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (response.ok) {
      setAnalysisData(data); // Store analysis result
    } else {
      console.error("Error:", data.error);
    }
  };

  const handleAnalyzeAgain = () => {
    setAnalysisData(null); // Reset analysis data
  };

  return (
    <div className="min h-screen bg-gradient-to-tr from-[#7493A8] to-[#fff8ef]  px-10 py-8 text-[#2A2A31]">
      {!analysisData ? (
        <AnalyzeForm onSubmit={handleAnalysisSubmit} />
      ) : (
        <Result
          frequencies={analysisData.frequencies}
          repeated={analysisData.repeated}
          onAnalyzeAgain={handleAnalyzeAgain}
        />
      )}
    </div>
  );
};

export default PreparePage;