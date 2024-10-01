import MoviesGrid from "@/components/MoviesGrid";
import { FAKE_DATA_DB, sortMovies } from "@/lib/db";
import { searchMovies } from "@/lib/utils";
import { useRouter, useParams } from "next/navigation";
import React from "react";

const SearchPage = (params: any) => {
  return (
    <div>
      <MoviesGrid movies={searchMovies(FAKE_DATA_DB, params.searchParams.q)} />
    </div>
  );
};

export default SearchPage;
