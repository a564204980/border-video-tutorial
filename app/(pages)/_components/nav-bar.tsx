"use client";

import { UserButton } from "@clerk/clerk-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* TODO：增加搜索栏 */}</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
