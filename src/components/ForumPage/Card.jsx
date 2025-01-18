import React from 'react';

const Card = ({ question }) => {
  if (!question) {
    return null; // Safely return null if question is undefined
  }

  return (
    <div
      key={question.id}
      className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-80 h-72 bg-neutral-800 rounded-xl"
    >
      <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" />
      <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" />
      <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" />
      <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
        <span className="font-bold text-xl italic text-white">{question.flair}</span>
        <p className="text-white">{question.description}</p>
      </div>
    </div>
  );
};

export default Card;
