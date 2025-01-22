import React, { useState } from 'react';
import PopUpExample from './Answer';

const Section = ({ setFlair,setsubmit}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFlairChange = (flair) => {
    setFlair(flair); // Update flair in QuestionList
  };

  return (
    <>
      <header className="flex justify-between items-center border-b-2 border-gray-900 pb-4">
        <h1 className="text-3xl font-bold">Let's Discuss</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 text-amber-50 px-8 py-2 rounded-full hover:bg-amber-50 hover:text-gray-900 border hover:border-gray-900"
        >
          Ask a Question
        </button>
      </header>
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => handleFlairChange('General')}
          className="border border-black rounded-2xl px-6 py-1"
        >
          General Discussion
        </button>
        <button
          onClick={() => handleFlairChange('Technical')}
          className="border border-black rounded-2xl px-6 py-1"
        >
          Technical
        </button>
        <button
          onClick={() => handleFlairChange('Help')}
          className="border border-black rounded-2xl px-6 py-1"
        >
          Help
        </button>
        <button
          onClick={() => handleFlairChange('Exam')}
          className="border border-black rounded-2xl px-6 py-1"
        >
          Exam Doubts
        </button>
      </div>
      {isOpen && <PopUpExample setIsOpen={setIsOpen} setsubmit={setsubmit}/>}
    </>
  );
};

export default Section;
