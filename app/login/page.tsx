"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn routing="hash" />
    </div>
  );
};

export default Login;
