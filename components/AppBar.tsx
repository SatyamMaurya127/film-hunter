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
import { useRouter } from "next/navigation";

const AppBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const router = useRouter();
  const [movieList, setMovieList] = useState<any[]>([]);
  const [isSearchFieldFocused, setIsSearchFieldFocused] = useState(false);
  const autoCompleteBoxRef = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      autoCompleteBoxRef.current &&
      !autoCompleteBoxRef.current.contains(event.target as Node)
    ) {
      setIsSearchFieldFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = async (e: any) => {
    try {
      // const response = await fetch(`/api/search?q=${query}`, {
      //   method: "GET",
      // });
      // const result = await response.json();
      if (e.code == "Enter") {
        router.push("/search?q=" + e.currentTarget.value);
      }
      setMovieList(searchMovies(FAKE_DATA_DB, e.target.value));
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
          onFocus={() => setIsSearchFieldFocused(true)}
        />

        {movieList.length > 0 && isSearchFieldFocused && (
          <div
            ref={autoCompleteBoxRef}
            className="auto-complete flex flex-col absolute w-full bg-black z-[9999] border my-1 rounded"
          >
            {movieList.map((movie: any) => (
              <Link
                key={movie.imdb_id}
                href={`/movies/${movie.imdb_id}`}
                className="item flex flex-row gap-x-5 border-b last:border-none items-center p-1 my-1"
                onClick={() => setIsSearchFieldFocused(false)}
              >
                <div className="image">
                  <Image
                    src={movie.poster_path}
                    width={40}
                    height={40}
                    alt="Image"
                    className="aspect-square object-cover rounded-sm"
                  />
                </div>
                <div className="title">
                  <p className="text-base">{movie.original_title}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;
