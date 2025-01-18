import React from 'react';

const FocusSubjects = ({ setStep }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Focus Subjects</h2>
      <p className="text-center mb-4">This is a placeholder for Step 3 where you select your focus subjects.</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(2)}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Back
        </button>
        <button
          onClick={() => alert('Focus subjects saved!')}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FocusSubjects;
