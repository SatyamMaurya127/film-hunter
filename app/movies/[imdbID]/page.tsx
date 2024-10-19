import MoviePageClient from "@/components/pages/MoviePage";
import { Movie } from "@/types/Movies";
import type { Metadata } from "next";
import React from "react";

type Props = { params: { imdbID: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetch(
    `http://localhost:3000/api/get-movie?t=${params.imdbID}`
  );
  const _fetchedMovies = await data.json();

  return {
    title: _fetchedMovies.originalTitleText.text,
  };
}

const MoviePage: React.FC<Props> = async ({ params }) => {
  let movie = {};

  try {
    const data = await fetch(
      `http://localhost:3000/api/get-movie?t=${params.imdbID}`
    );
    const _fetchedMovies = await data.json();

    movie = _fetchedMovies;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <MoviePageClient movie={movie as Movie} />
    </div>
  );
};

export default MoviePage;
