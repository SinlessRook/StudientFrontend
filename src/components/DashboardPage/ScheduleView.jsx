import React from "react";

const ScheduleView = () => {
  return (
    <div className="flex-2">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <ul className="space-y-4">
        <li className="border-2 border-gray-900 rounded p-4 bg-[ rgba(255, 248, 239, 0.70)] w-[1000px]">
          <h3 className="text-xl font-bold">Meeting with Team</h3>
          <p className="mt-2">Monday, 10 AM - 11 AM</p>
        </li>
        {/* Add more events here */}
      </ul>
    </div>
  );
};

export default ScheduleView;
