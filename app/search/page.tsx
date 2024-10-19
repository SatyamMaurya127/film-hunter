import MoviesGrid from "@/components/MoviesGrid";
import { MoviePoster } from "@/types/Movies";

const SearchPage = async (params: { searchParams: { q: string } }) => {
  const movies: MoviePoster[][] = [];

  const data = await fetch(
    `http://localhost:3000/api/search?q=${params.searchParams.q}`
  );
  const _fetchedMovies = await data.json();

  movies.push(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _fetchedMovies.d.map((m: any) => {
      if (m.qid) {
        return {
          imdb_id: m.id,
          poster_path: m.i?.imageUrl,
          title: m.l,
        };
      }
    })
  );

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
    <div>
      <h1 className="text-2xl py-4">
        Search Results for: <i> {params.searchParams.q}</i>
      </h1>
      <MoviesGrid movies={movies[0]} />
    </div>
  );
};

export default SearchPage;
