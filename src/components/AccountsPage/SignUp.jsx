import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/codecrafters.svg';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [tasks, setTasks] = useState([
    { id: '1', content: 'Math Assignment' },
    { id: '2', content: 'Chess Practice' },
    { id: '3', content: 'Science Revision' },
  ]);
  const [columns, setColumns] = useState(5); // Default number of columns
  const [rows, setRows] = useState(5); // Default number of rows
  const [droppedTasks, setDroppedTasks] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(5).fill(null))
  );

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: columns }, (_, index) => `${index + 1}${index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} Hr`);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGridSizeChange = (e, type) => {
    const size = parseInt(e.target.value, 10);
    if (type === 'columns') {
      setColumns(size);
      setDroppedTasks((prevGrid) => prevGrid.map((row) => Array(size).fill(null)));
    } else if (type === 'rows') {
      setRows(size);
      setDroppedTasks(Array(size).fill(null).map(() => Array(columns).fill(null)));
    }
  };

  const handleDrop = (task, rowIndex, colIndex) => {
    if (droppedTasks[rowIndex][colIndex]) return; // Prevent overriding a cell
    setDroppedTasks((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[rowIndex][colIndex] = { ...task }; // Copy of the task
      return newGrid;
    });
  };

  const handleClearAll = () => {
    setDroppedTasks(Array(rows).fill(null).map(() => Array(columns).fill(null)));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-tr from-[#7493A8] to-[#fff8ef]">
      {step === 1 && (
        <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
          <div className="mb-6">
            <img
              src={logo}
              alt="Website Logo"
              className="w-20 h-20 rounded-full mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Sign Up</h2>
          <form className="space-y-6" onSubmit={()=>{}}>
            <div className="text-left">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="confirm password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Confirm password
              </label>
              <input
                type="confirm password"
                id="confirm password"
                name="confirm password"
                placeholder="Enter your password again"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
              />
            </div>
            <button
            onClick={()=>{setStep(2)}}
              className="w-full py-2 bg-teal-400 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300"
            >
              Next
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-teal-400 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      )}
      {step === 2 && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Set Your Timetable</h2>
          <div className="mb-4 flex justify-between">
            <div>
              <label htmlFor="columns" className="mr-2 font-medium">
                Columns:
              </label>
              <select
                id="columns"
                value={columns}
                onChange={(e) => handleGridSizeChange(e, 'columns')}
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
                Rows:
              </label>
              <select
                id="rows"
                value={rows}
                onChange={(e) => handleGridSizeChange(e, 'rows')}
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
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Clear All
            </button>
          </div>
          <div className="flex gap-6">
            {/* Tasks */}
            <div className="w-1/4 p-4 bg-gray-50 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Tasks</h3>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  className="p-2 mb-2 bg-blue-100 border border-blue-300 rounded text-center cursor-pointer"
                  drag
                  dragMomentum={false}
                  whileDrag={{ scale: 1.1 }}
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  dragSnapToOrigin
                  onDragEnd={(event, info) => {
                    const dropArea = document.elementFromPoint(info.point.x, info.point.y);
                    if (dropArea && dropArea.dataset.row && dropArea.dataset.col) {
                      const rowIndex = parseInt(dropArea.dataset.row, 10);
                      const colIndex = parseInt(dropArea.dataset.col, 10);
                      handleDrop(task, rowIndex, colIndex);
                    }
                  }}
                >
                  {task.content}
                </motion.div>
              ))}
            </div>

            {/* Timetable Grid with Headers */}
            <div>
              <div className="grid" style={{ gridTemplateColumns: `repeat(${columns + 1}, minmax(70px, 1fr))` }}>
                {/* Top Row (Hours) */}
                <div></div>
                {hours.map((hour, index) => (
                  <div key={index} className="text-center font-medium">
                    {hour}
                  </div>
                ))}
                {/* Rows */}
                {droppedTasks.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {/* Row Header (Weekdays) */}
                    <div className="font-medium text-center">{weekdays[rowIndex]}</div>
                    {row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className="w-20 h-20 bg-gray-200 border-2 border-gray-400 flex justify-center items-center"
                        data-row={rowIndex}
                        data-col={colIndex}
                      >
                        {cell ? (
                          <motion.div
                            className="p-2 bg-blue-100 border border-blue-300 rounded text-center cursor-pointer"
                          >
                            {cell.content}
                          </motion.div>
                        ) : null}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            >
              Back
            </button>
            <button
              onClick={() => alert('Timetable saved!')}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
