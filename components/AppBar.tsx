"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { Menubar } from "@radix-ui/react-menubar";
import { MenubarContent, MenubarItem, MenubarShortcut } from "./ui/menubar";
import Image from "next/image";
import img from "@/assets/img/dummy_img.jpg";

const AppBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
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

      <div className="relative ml-auto flex-1 md:grow-0 col-span-6 w-full">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8"
          onChange={(e) => {
            handleSearch(e.target.value);
            onSearch(e.target.value);
          }}
        />

        <div className="auto-complete hidden flex flex-col absolute w-full bg-white z-10 border my-1 rounded">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="item flex flex-row gap-x-5 border-b last:border-none items-center p-1"
            >
              <div className="image">
                <Image
                  src={img}
                  width={40}
                  height={40}
                  alt="Image"
                  className="aspect-square object-cover rounded-sm"
                />
              </div>
              <div className="title">
                <p className="text-base">
                  Harry Potter: The Half-Blood Prince.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
