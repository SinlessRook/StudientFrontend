import React from 'react';

const Card = ({ question, onClick }) => {
  // Ensure question is valid and contains necessary data before rendering
  if (!question || !question.description) {
    return null; // Do not render anything if the question is invalid
  }

  return (
    <div
      className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-80 h-72 bg-neutral-800 rounded-xl"
      onClick={onClick}
    >
      <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
        <p className="text-white">{question.description}</p>
      </div>
    </div>
  );
};

export default Card;
