export type MoviePoster = {
  imdb_id: string;
  poster_path: string;
  title: string;
};

export interface Movie {
  title: string;
  type: string;
  productionStatus: string;
  releaseDate: {
    day: number;
    month: number;
    year: number;
    __typename: string;
  };
  runtime: {
    seconds: number;
    text: string;
  };
  rating: {
    aggregateRating: number;
    voteCount: number;
    __typename: string;
  };
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  };
  trailer: {
    id: string;
    runtime: number;
    title: string;
    description: string;
    thumbnail: {
      url: string;
      height: number;
      width: number;
      __typename: string;
    };
    videoURL: {
      displayName: {
        value: string;
        language: string;
        __typename: string;
      };
      videoMimeType: string;
      videoDefinition: string;
      url: string;
      __typename: string;
    };
  }[];
  keywords: string[];
  isAdult: boolean;
  genres: string[];
  plot: string;
  credits: {
    as: string;
    list: () => { text: string }[];
  }[];
  productionCompanies: string[];
  awardSummary: {
    nominations: number;
    wins: number;
    award: {
      text: string;
      id: string;
      event: {
        id: string;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
  titleImages: {
    w: number;
    h: number;
    url: string;
    caption: string;
  }[];
  cast: {
    name: string;
    img: {
      url: string;
      width: number;
      height: number;
      __typename: string;
    };
  }[];
  moreLikeThisTitle: {
    id: string;
    titleText: {
      text: string;
      __typename: string;
    };
    titleType: {
      id: string;
      text: string;
      canHaveEpisodes: boolean;
      displayableProperty: {
        value: {
          plainText: string;
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
    originalTitleText: {
      text: string;
      __typename: string;
    };
    primaryImage: {
      id: string;
      width: number;
      height: number;
      url: string;
      caption: {
        plainText: string;
        __typename: string;
      };
      __typename: string;
    };
    releaseYear: {
      year: number;
      endYear: number | null;
      __typename: string;
    };
    ratingsSummary: {
      aggregateRating: number;
      voteCount: number;
      __typename: string;
    };
    runtime: {
      seconds: number;
      __typename: string;
    };
    certificate: {
      rating: string;
      __typename: string;
    };
    canRate: {
      isRatable: boolean;
      __typename: string;
    };
    titleGenres: {
      genres: {
        genre: {
          text: string;
          __typename: string;
        };
        __typename: string;
      }[];
      __typename: string;
    };
    canHaveEpisodes: boolean;
    __typename: string;
  }[];
  filmingLocations: string[];
  budget: {
    amount: number;
    currency: string;
    __typename: string;
  };
  lifetimeGross: {
    amount: number;
    currency: string;
    __typename: string;
  };
  openingWeekendGross: {
    amount: number;
    currency: string;
    __typename: string;
  };
  worldwideGross: {
    amount: number;
    currency: string;
    __typename: string;
  };
}
