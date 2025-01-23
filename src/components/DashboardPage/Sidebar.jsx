import React from "react";
import ProgressGraph from "./ProgressGraph";
import MiniCalendar from "./MiniCalendar";

const Sidebar = () => {
  return (
    <aside className="flex-1 flex flex-col gap-6">
      <ProgressGraph />
      <MiniCalendar />
    </aside>
  );
};

export default Sidebar;