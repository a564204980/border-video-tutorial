"use client";

import React, { useState } from "react";
import Sidebar from "./_components/sidebar";

interface RootLayoutPage {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutPage) => {
  const [siderWidth, setSiderWidth] = useState(
    parseInt(localStorage.getItem("siderWidth")!) || 150
  );
  return (
    <main className="h-full">
      <Sidebar siderWidth={siderWidth} setSiderWidth={setSiderWidth} />
      <div
        style={{ marginLeft: `${siderWidth}px` }}
        className="pl-[60px] h-full">
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
