import React, { useEffect, useState } from "react";

const CourseDropdown = ({ courseCode, setCourseCode }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/focus_area/getCourses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();

        // Validate if "courses" exists and is an array
        if (data.courses && Array.isArray(data.courses)) {
          setCourses(data.courses);
        } else {
          throw new Error("Invalid response format: 'courses' is missing or not an array");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
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
          <option key={course.course_id} value={course.course_code}>
            {course.course_code} - {course.course_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseDropdown;
