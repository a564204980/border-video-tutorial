"use client";

import React from "react";
import Navbar from "./_components/nav-bar";
import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/org-sidebar";

interface RootLayoutPage {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutPage) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
