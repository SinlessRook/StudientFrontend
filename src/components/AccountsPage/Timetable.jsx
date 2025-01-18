import React, { useContext, useState } from "react";
import { delay, motion } from "framer-motion";
import { GlobalContext } from "../../Context/GlobalContext";
import Loader from "../General/Loader";

const Timetable = ({
  tasks,
  hours,
  weekdays,
  setStep,
}) => {
  const [columns, setColumns] = useState(7); // Default number of columns
  const [rows, setRows] = useState(5); // Default number of rows
  const [droppedTasks, setDroppedTasks] = useState(
    Array.from({ length: rows }, () => Array(columns).fill(null))
  );
  const server = "http://127.0.0.1:8000/";
  const {authTokens} = useContext(GlobalContext)
  const [loading, setLoading] = useState(false);
  // Send The TimeTable
  const sendTimeTable = async () => {
    setLoading(true);
    await delay(1000);
    const data = droppedTasks;
    const output = [[], [], [], [], [], [], []];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j]) {
          output[i].push(findTaskId(data[i][j].content));
        }
      }
    }
    await fetch(server+"scheduler/Addtimetable/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: authTokens.username,
        password: authTokens.password,
        timetable: output
      }),
    }).then((response) => {
      if (!response.ok) {
        setError("Invalid credentials");
      }
      return response.json();
    });
    setLoading(false);
  }

  // Find id from task name
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const findTaskId = (taskName) => {
    for (const id in tasks) {
      const task = getShortForm(tasks[id]["name"]);
      console.log(task)
      if (task === taskName) {
        return tasks[id]["id"];
      }
    }
    return null;
  };

  // Update grid size
  const handleGridSizeChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    if (type === "columns") {
      setColumns(value);
      setDroppedTasks(
        Array.from({ length: rows }, () => Array(value).fill(null))
      );
    } else if (type === "rows") {
      setRows(value);
      setDroppedTasks(
        Array.from({ length: value }, () => Array(columns).fill(null))
      );
    }
  };

  // Reset the grid
  const handleClearAll = () => {
    setDroppedTasks(Array.from({ length: rows }, () => Array(columns).fill(null)));
  };

  // Get the short form of a task
  const getShortForm = (taskName) =>
    taskName
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");

  // Get the drop target
  const getDropTarget = (e) => {
    const grid = document.querySelector(".grid");
    const gridRect = grid.getBoundingClientRect();

    // Mouse position relative to the grid
    const mouseX = e.clientX - gridRect.left;
    const mouseY = e.clientY - gridRect.top;

    // Cell size
    const cellWidth = gridRect.width / columns;
    const cellHeight = gridRect.height / rows;

    // Calculate column and row
    const colIndex = Math.floor(mouseX / cellWidth);
    const rowIndex = Math.floor(mouseY / cellHeight);

    // Ensure within grid bounds
    if (colIndex >= 0 && colIndex < columns && rowIndex >= 0 && rowIndex < rows) {
      return { colIndex, rowIndex };
    }
    return null;
  };

  // Handle drag end
  const handleDragEnd = (task, e) => {
    const dropTarget = getDropTarget(e);
    if (dropTarget) {
      const { colIndex, rowIndex } = dropTarget;
      const updatedGrid = droppedTasks.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex
            ? { content: getShortForm(task.name) }
            : cell
        )
      );
      setDroppedTasks(updatedGrid);
    }
  };

  const hourHeaders = Array.from({ length: columns }, (_, i) => `${i + 1} hr`);
  const dayHeaders = Array.from({ length: rows }, (_, i) => weekdays[i].substring(0, 3) || `Day ${i + 1}`);

  return (
    <>
    {loading && <Loader/>}
    <div className={`bg-white shadow-md rounded-lg p-6 w-full ${columns >= 8 ? (columns != 9) ? "max-w-[1080px]" : "max-w-[1180px]" : "max-w-[970px]"
      }`}>
      <h2 className="text-2xl font-bold mb-4 text-center">Set Your Timetable</h2>

      {/* Grid Settings */}
      <div className="mb-4 flex justify-between">
        <div>
          <label htmlFor="columns" className="mr-2 font-medium">
            Hours:
          </label>
          <select
            id="columns"
            value={columns}
            onChange={(e) => handleGridSizeChange(e, "columns")}
            className="p-2 border border-gray-300 rounded"
          >
            {[5, 6, 7, 8, 9].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rows" className="mr-2 font-medium">
            Days:
          </label>
          <select
            id="rows"
            value={rows}
            onChange={(e) => handleGridSizeChange(e, "rows")}
            className="p-2 border border-gray-300 rounded"
          >
            {[5, 6, 7].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleClearAll}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      <div className="flex gap-6">
        {/* Task List */}
        <div className="w-1/4 p-4 bg-gray-50 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Subjects</h3>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              className="p-2 mb-2 bg-blue-100 border border-blue-300 rounded text-center cursor-pointer"
              drag
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              whileDrag={{ scale: 1.1 }}
              onDragEnd={(e) => handleDragEnd(task, e)}
            >
              {getShortForm(task.name)}
            </motion.div>
          ))}
        </div>

        {/* Timetable Grid */}
        <div className="flex-1 overflow-auto">
          <div className="grid">
            {/* Render Header Row */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${columns + 1}, 1fr)`,
                gridTemplateRows: "auto",
                gap: "2px",
              }}
            >
              <div className="w-20 h-12"></div>
              {hourHeaders.map((hour, idx) => (
                <div
                  key={idx}
                  className="w-20 h-12 flex justify-center items-center bg-gray-200 font-semibold"
                >
                  {hour}
                </div>
              ))}
            </div>

            {/* Render Rows */}
            {droppedTasks.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${columns + 1}, 1fr)`,
                  gap: "2px",
                }}
              >
                {/* Row Header */}
                <div className="w-20 h-20 flex justify-center items-center bg-gray-200 font-semibold">
                  {dayHeaders[rowIndex]}
                </div>
                {/* Grid Cells */}
                {row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="w-20 h-20 border-2 border-gray-300 flex justify-center items-center bg-gray-100"
                  >
                    {cell ? (
                      <motion.div className="p-2 bg-blue-100 border border-blue-300 rounded text-center">
                        {cell.content}
                      </motion.div>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(1)}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={() => sendTimeTable()}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
    </>
  );
};

export default Timetable;
