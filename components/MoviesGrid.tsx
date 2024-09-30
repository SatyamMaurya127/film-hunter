"use client";

import React from "react";
import MovieCard from "./ui/movie-card";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const MoviesGrid: React.FC<{ movies: any[] }> = ({ movies }) => {
  const searchParams = useSearchParams();
  console.log(movies);

  if (movies.length <= 0)
    return (
      <div className="h-full w-full p-8 text-center flex flex-col gap-y-5">
        <h1 className="text-4xl font-bold">
          Quick and effortless movie discoveries!
        </h1>
        <p className="text-lg">Get all the information about the movie.</p>
      </div>
    );
  return (
    <section className="p-4">
      <h1 className="text-2xl py-4">
        Search Results for: <i> {searchParams.get("q")}</i>
      </h1>
      <div className=" w-full h-full p-1 flex flex-row gap-10 justify-center flex-wrap mt-5">
        {movies.map((movie) => (
          <Link href={`/movies/${movie.imdb_id || "/#"}`} key={movie.title}>
            <MovieCard
              title={movie.title}
              image={movie.poster_path} // Make sure this path is valid
              rating={movie.vote_average}
              description={movie.overview}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
