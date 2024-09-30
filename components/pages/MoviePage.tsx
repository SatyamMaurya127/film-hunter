"use client";

import Image from "next/image";
import React from "react";

const MoviePageClient: React.FC<{ movie: any }> = ({ movie }) => {
  console.log(movie);

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-6 relative w-20">
          <Image src={movie.poster_path} fill alt="D" />
        </div>
        <div className="col-span-6"></div>
      </div>
    </>
  );
};

export default MoviePageClient;
