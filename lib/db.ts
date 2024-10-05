import { Movie } from "@/types/Movies";

export const sortMovies = (movies: any[]) => {
  return [...movies].sort((a: any, b: any) => b.popularity - a.popularity);
};

// TODO: Fetch directly from the server

export const getMovie = (movies: any[], title: string) => {
  return (
    movies.find((movie: any) => movie.imdb_id == title.toLowerCase()) || {}
  );
};

export const _parseIMDBChunkData = (movie: any): Movie => {
  const reqMovieObj = {
    title: movie.originalTitleText.text,
    type: movie.titleType.text,
    productionStatus: movie.productionStatus.currentProductionStage.text,
    releaseDate: movie.releaseDate,
    runtime: {
      seconds: movie.runtime?.seconds,
      text: movie.runtime?.displayableProperty.value.plainText,
    },
    rating: movie.ratingsSummary,
    primaryImage: movie.primaryImage,
    trailer: {},
    keywords: [""],
    isAdult: movie.isAdult,
    genres: [""],
    plot: movie.plot.plotText.plainText,
    credits: {},
    productionCompanies: [""],
    awardSummary: movie.prestigiousAwardSummary,
    titleImages: [""],
    cast: [""],
    moreLikeThisTitle: [""],
    filmingLocations: [""],
    budget: movie.productionBudget?.budget,
    lifetimeGross: movie.lifetimeGross?.total,
    openingWeekendGross: movie.openingWeekendGross?.gross.total,
    worldwideGross: movie.worldwideGross?.total,
  };

  const _movieTrailer = [];

  function get480pTrailer(trailers: any[]) {
    return trailers.find(
      (trailer: any) => trailer.videoDefinition == "DEF_480p"
    );
  }

  function getKeywords(keywords: any[]): string[] {
    const _keywords: any[] = [];

    _keywords.push(keywords.map((keyword) => keyword.node.text as string));
    return _keywords[0];
  }

  function getGenres(genres: any[]) {
    let _genres: any[] = [];

    _genres.push(genres.map((genre) => genre.text));
    return _genres[0];
  }

  function getCredits(credits: any[]) {
    let _credits: any[] = [];

    _credits.push(
      credits.map((credit) => ({
        as: credit.category.text,
        list: () => {
          let _creditList: any[] = [];
          _creditList.push(
            credit.credits.map((listName: any) => listName.name.nameText)
          );
          return _creditList[0];
        },
      }))
    );

    return _credits;
  }

  function getProductions(productions: any[]) {
    let _prods: any[] = [];
    _prods.push(
      productions.map((prod: any) => prod.node.company.companyText.text)
    );
    return _prods[0];
  }

  function getTitleImages(images: any[]) {
    let _titleImgs: any[] = [];
    _titleImgs.push(
      images.map((img) => ({
        w: img.node.width,
        h: img.node.height,
        url: img.node.url,
        caption: img.node.caption.plainText,
      }))
    );

    return _titleImgs[0];
  }

  function getCast(cast: any[]) {
    let _cast: any[] = [];

    _cast.push(
      cast.map((c) => ({
        name: c.node.name.nameText.text,
        img: c.node.name.primaryImage,
      }))
    );
    return _cast[0];
  }

  function getMoreLikeThisTitle(titles: any[]) {
    let _titles: any[] = [];

    _titles.push(titles.map((t) => t.node));
    return _titles[0];
  }

  function getFilmingLoc(locations: any[]) {
    let _locs: any[] = [];

    _locs.push(locations.map((loc) => loc.node.location));
    return _locs[0];
  }

  _movieTrailer.push(
    movie.primaryVideos.edges.map((trailer: any) => ({
      id: trailer.node.id,
      runtime: trailer.node.runtime.value,
      title: trailer.node.name.value,
      description: trailer.node.description.value,
      thumbnail: trailer.node.thumbnail,
      videoURL: get480pTrailer(trailer.node.playbackURLs),
    }))
  );

  reqMovieObj.trailer = _movieTrailer[0];
  reqMovieObj.keywords = getKeywords(movie.keywords.edges);
  reqMovieObj.genres = getGenres(movie.genres.genres);
  reqMovieObj.credits = getCredits(movie.principalCredits)[0];
  reqMovieObj.productionCompanies = getProductions(movie.production.edges);
  reqMovieObj.titleImages = getTitleImages(movie.titleMainImages.edges);
  reqMovieObj.cast = getCast(movie.cast.edges);
  reqMovieObj.moreLikeThisTitle = getMoreLikeThisTitle(
    movie.moreLikeThisTitles.edges
  );

  reqMovieObj.filmingLocations = getFilmingLoc(movie.filmingLocations.edges);

  return reqMovieObj as unknown as Movie;
};
