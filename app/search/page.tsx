import MoviesGrid from "@/components/MoviesGrid";
import { FAKE_DATA_DB } from "@/lib/db";
import React from "react";

const SearchPage = () => {
  return (
    <div>
      <MoviesGrid movies={FAKE_DATA_DB} />
    </div>
  );
};

export default SearchPage;
