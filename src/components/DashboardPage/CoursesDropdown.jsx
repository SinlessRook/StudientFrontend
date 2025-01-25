import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const CourseDropdown = ({ courseCode, setCourseCode }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authTokens } = useContext(GlobalContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scheduler/getAllSubjects/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: authTokens.username,
            password: authTokens.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        // Validate if "courses" exists and is an array
        if (data.subjects && Array.isArray(data.subjects)) {
          setCourses(data.subjects);
        } else {
          throw new Error("Invalid response format: 'subjects' is missing or not an array");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching subjects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [authTokens.username, authTokens.password]);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        htmlFor="courseCode"
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontWeight: "bold",
          color: "#555",
        }}
      >
        Course Code:
      </label>
      <select
        id="courseCode"
        value={courseCode} // Now courseCode will hold the id of the selected course
        onChange={(e) => setCourseCode(e.target.value)} // Updating the selected course ID
        required
        style={{
          width: "100%",
          padding: "0.75rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#fff",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <option value="" disabled>
          Select a course code
        </option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseDropdown;
