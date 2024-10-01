import MoviePageClient from "@/components/pages/MoviePage";
import { FAKE_DATA_DB, getMovie, sortMovies } from "@/lib/db";
import { useSearchParams } from "next/navigation";
import React from "react";

const MoviePage: React.FC<{ params: { imdbID: string } }> = ({ params }) => {
  const movies = sortMovies(FAKE_DATA_DB);

  return (
    <div>
      <MoviePageClient movie={getMovie(movies, params.imdbID || "")} />
    </div>
  );
};

export default MoviePage;
