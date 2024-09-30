"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AppBar = () => {
  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`/api/search?q=${query}`, {
        method: "GET",
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-b w-full h-16 grid grid-cols-12 items-center">
      <div className="col-span-3 text-center">
        <h3 className="text-2xl font-extrabold  uppercase">Film Hunter</h3>
      </div>

      <div className="search-box flex w-full items-center space-x-2 col-span-6 ">
        <Input
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <Button type="submit">Search</Button>
      </div>
    </div>
  );
};

export default AppBar;
