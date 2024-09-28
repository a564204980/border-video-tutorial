"use client";

import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center overflow-hidden">
      <Image
        src="/login.png"
        alt="login"
        width={270}
        height={303}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
