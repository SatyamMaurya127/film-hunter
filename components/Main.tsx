"use client";

import React, { Suspense } from "react";
import AppBar from "./AppBar";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Suspense fallback={"Loading..."}></Suspense>
      <AppBar onSearch={() => {}} />
      {children}
    </>
  );
};

export default Main;
