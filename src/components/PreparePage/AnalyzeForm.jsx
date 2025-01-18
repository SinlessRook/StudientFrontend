import React, { useState } from "react";

function AnalyzeForm({ onSubmit }) {
  const [courseCode, setCourseCode] = useState("");
  const [files, setFiles] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const handleCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!courseCode) {
      setResponseMessage("Course code is required.");
      return;
    }

    if (files.length === 0) {
      setResponseMessage("Please upload at least one file.");
      return;
    }

    const formData = new FormData();
    formData.append("course_code", courseCode);
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await onSubmit(formData);
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message || "Upload successful!");
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResponseMessage("A network error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="courseCode" style={{ display: "block", marginBottom: "0.5rem" }}>
          Course Code:
        </label>
        <input
          type="text"
          id="courseCode"
          value={courseCode}
          onChange={handleCourseCodeChange}
          placeholder="Enter course code"
          required
          style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="fileUpload" style={{ display: "block", marginBottom: "0.5rem" }}>
          Upload Files:
        </label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          multiple
          style={{ width: "100%" }}
        />
      </div>

      <button type="submit" style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", cursor: "pointer" }}>
        Submit
      </button>

      {responseMessage && (
        <p style={{ marginTop: "1rem", color: responseMessage.startsWith("Error") ? "red" : "green" }}>
          {responseMessage}
        </p>
      )}
    </form>
  );
}

export default AnalyzeForm;
