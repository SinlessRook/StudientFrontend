import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex-1 flex flex-col gap-6">
      <div className="border-2 border-gray-900 rounded p-4 bg-[rgba(255, 248, 239, 0.30);]">
        <h2 className="text-lg font-bold mb-2">Progress Graph</h2>
        <canvas id="performanceGraph"></canvas>
      </div>
      <div className="border-2 border-gray-900 rounded p-4 bg[rgba(255, 248, 239, 0.30);]">
        <h2 className="text-lg font-bold mb-2">Mini Calendar</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
          width="100%"
          height="200" >
        </iframe>
      </div>

    </aside>
  );
};

export default Sidebar;
