"use client";

import React, { Suspense } from "react";
import AppBar from "./AppBar";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense>
      <AppBar onSearch={() => {}} />
      {children}
    </Suspense>
  );
};

export default Main;
