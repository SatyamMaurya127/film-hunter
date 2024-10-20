"use client";

import { MoviePoster } from "@/types/Movies";
import Link from "next/link";
import React from "react";
import MovieCard from "./ui/movie-card";

interface MoviesGridProps {
  movies: MoviePoster[];
}

const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  return (
    <section className="p-4 w-full">
      <div className=" w-full h-full p-1 flex flex-row gap-10 justify-center flex-wrap mt-5">
        {movies.map((movie) => (
          <Link href={`/movies/${movie.imdb_id || "/#"}`} key={movie.title}>
            <MovieCard
              title={movie.title || ""}
              image={movie.poster_path || ""} // Make sure this path is valid
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
