import MoviePageClient from "@/components/pages/MoviePage";
import type { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = { params: { imdbID: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let data = await fetch(
    `http://localhost:3000/api/get-movie?t=${params.imdbID}`
  );
  let _fetchedMovies = await data.json();

  return {
    title: _fetchedMovies.originalTitleText.text,
  };
}

const MoviePage: React.FC<Props> = async ({ params }) => {
  let movie: any = {};

  try {
    let data = await fetch(
      `http://localhost:3000/api/get-movie?t=${params.imdbID}`
    );
    let _fetchedMovies = await data.json();

    movie = _fetchedMovies;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <MoviePageClient movie={movie} />
    </div>
  );
};

export default MoviePage;
