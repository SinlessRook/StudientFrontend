import React from "react";
import { useState } from "react";
import AddEvent from "./AddEvent";
const ScheduleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {isOpen && <AddEvent setIsOpen={setIsOpen}  />}
    <header className="flex justify-between items-center border-b-2 border-gray-900 pb-4">
      <h1 className="text-3xl font-bold">My Schedule</h1>
        <button 
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 text-amber-50 px-8 py-2 rounded-full hover:bg-amber-50 hover:text-gray-900 border hover:border-gray-900">
          Add Event
        </button>
    </header>
    </>
  );
};

export default ScheduleHeader;
