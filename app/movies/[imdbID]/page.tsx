import MoviePageClient from "@/components/pages/MoviePage";
import { FAKE_DATA_DB } from "@/lib/db";
import { useSearchParams } from "next/navigation";
import React from "react";

const MoviePage: React.FC<{ params: { imdbID: string } }> = ({ params }) => {
  const sortMovies = (movies: any[]) => {
    return [...movies].sort((a: any, b: any) => b.popularity - a.popularity);
  };

  // TODO: Fetch directly from the server

  const getMovie = (movies: any[], title: string) => {
    return movies.find((movie: any) => movie.imdb_id == title.toLowerCase());
  };

  const movies = sortMovies(FAKE_DATA_DB);

  return (
    <div>
      <MoviePageClient movie={getMovie(movies, params.imdbID || "")} />
    </div>
  );
};

export default MoviePage;
