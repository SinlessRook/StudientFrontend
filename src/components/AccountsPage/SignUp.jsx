import React, { useState } from 'react';
import SignUpForm from './FormSignUp';
import Timetable from './Timetable';
import FocusSubjects from './FocusSubjects';

const SignUp = () => {
  const [step, setStep] = useState(1);
  
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [droppedTasks, setDroppedTasks] = useState(
    Array(5).fill(null).map(() => Array(5).fill(null))
  );

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: columns }, (_, index) => `${index + 1}${index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} Hr`);

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
    if (droppedTasks[rowIndex][colIndex]) return;
    setDroppedTasks((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[rowIndex][colIndex] = { ...task };
      return newGrid;
    });
  };

  const handleClearAll = () => {
    setDroppedTasks(Array(rows).fill(null).map(() => Array(columns).fill(null)));
  };

  return (
    <div className="bg-gradient-to-tr from-[#7493A8] to-[#fff8ef] pt-8 pb-10 flex justify-center items-center overflow-hidden h-full">
      {step === 1 && <SignUpForm setStep={setStep} setTasks={setTasks} />}
      {step === 2 && (
        <Timetable
          tasks={tasks}
          columns={columns}
          rows={rows}
          droppedTasks={droppedTasks}
          handleGridSizeChange={handleGridSizeChange}
          handleDrop={handleDrop}
          handleClearAll={handleClearAll}
          hours={hours}
          weekdays={weekdays}
          setStep={setStep}
        />
      )}
      {step === 3 && <FocusSubjects setStep={setStep} />}
    </div>
  );
};

export default SignUp;
