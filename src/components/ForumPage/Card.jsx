import React from 'react';

const Card = ({ question, onClick }) => {
  // Ensure question is valid and contains necessary data before rendering
  if (!question || !question.description) {
    return null; // Do not render anything if the question is invalid
  }

  return (
      <div onClick={onClick} className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-80 h-72 bg-neutral-800 rounded-xl">
        
        <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" />
        <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" />
        <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" />
        <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12" />
        <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44" />
        <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64" />
        <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4" />
        <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
          <span className="font-bold text-xl italic text-white">{question.title}</span>
          <p className="text-white">
            {question.description}
          </p>
          <span className='text-white'>{question.created_by}</span>
        </div>
      </div>
    );
  }

export default Card;
