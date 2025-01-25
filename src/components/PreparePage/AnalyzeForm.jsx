import React, { useState } from "react";
import CourseDropdown from './CourseOption'; // Import the new component

function AnalyzeForm({ onSubmit }) {
  const [courseCode, setCourseCode] = useState("");
  const [files, setFiles] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#333",
          fontSize: "1.8rem",
        }}
      >
        Analyze Question Papers
      </h1>

      {/* Course Code Field */}
      <CourseDropdown courseCode={courseCode} setCourseCode={setCourseCode} />

      {/* File Upload Field */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label
          htmlFor="fileUpload"
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            color: "#555",
          }}
        >
          Upload Files:
        </label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          multiple
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          display: "block",
          width: "100%",
          padding: "0.75rem",
          fontSize: "1.1rem",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Submit
      </button>

      {/* Response Message */}
      {responseMessage && (
        <p
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            color: responseMessage.startsWith("Error") ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          {responseMessage}
        </p>
      )}
    </form>
  );
}

export default AnalyzeForm;