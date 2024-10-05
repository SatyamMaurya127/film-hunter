"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { Menubar } from "@radix-ui/react-menubar";
import { MenubarContent, MenubarItem, MenubarShortcut } from "./ui/menubar";
import Image from "next/image";
import img from "@/assets/img/dummy_img.jpg";
import Link from "next/link";
import { searchMovies } from "@/lib/utils";
import { FAKE_DATA_DB } from "@/lib/db";
import { useRouter, useSearchParams } from "next/navigation";

const AppBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchParams.get("q")?.trim() !== "") {
      setSearchQuery(searchParams.get("q") || "");
    }
  }, [searchParams]);

  const handleSearch = async (e: any) => {
    setSearchQuery(e.target.value);
    try {
      if (e.code == "Enter") {
        router.push("/search?q=" + e.currentTarget.value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-b w-full h-16 grid grid-cols-12 items-center">
      <div className="col-span-3 text-center">
        <Link href="/">
          <h3 className="text-2xl font-extrabold uppercase">Film Hunter</h3>
        </Link>
      </div>

      <div className="relative ml-auto flex-1 md:grow-0 col-span-6 w-full">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8"
          onKeyDown={(e) => {
            handleSearch(e);
            onSearch(e.currentTarget.value);
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
    </div>
  );
};

export default AppBar;
