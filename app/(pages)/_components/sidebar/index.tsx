"use client";

import React from "react";
import NewButton from "./new-button";
import List from "./list";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full flex p-3 flex-col gap-y-4 text-white w-[60px]">
      <div>
        <List />
        <NewButton />
      </div>
    </aside>
  );
};

export default Sidebar;
