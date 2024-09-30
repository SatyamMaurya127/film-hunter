"use client";

import React from "react";
import AppBar from "./AppBar";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <AppBar onSearch={() => {}} />
      {children}
    </div>
  );
};

export default Main;
