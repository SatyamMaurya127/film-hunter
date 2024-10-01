import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";
import { sortMovies } from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMovieRuntime(numberOfMinutes: number) {
  //create duration object from moment.duration
  var duration = moment.duration(numberOfMinutes, "minutes");

  //calculate hours
  var hh =
    duration.years() * (365 * 24) +
    duration.months() * (30 * 24) +
    duration.days() * 24 +
    duration.hours();

  //get minutes
  var mm = duration.minutes();

  //return total time in hh:mm format
  return hh + " h " + mm + " min";
}

export const formatBudgetOrRevenue = (budget: number) => {
  if (budget >= 1e9) {
    return (
      new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(
        budget / 1e9
      ) + " billion"
    );
  } else if (budget >= 1e6) {
    return (
      new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(
        budget / 1e6
      ) + " million"
    );
  } else if (budget >= 1e3) {
    return (
      new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(
        budget / 1e3
      ) + " thousand"
    );
  }
  return new Intl.NumberFormat("en-US").format(budget);
};

export const searchMovies = (movies: any[], query: string) => {
  const _filteredMovies = [];

  for (let i = 0; i < movies.length; i++) {
    if (
      movies[i].original_title.toUpperCase().indexOf(query.toUpperCase()) > -1
    ) {
      _filteredMovies.push(movies[i]);
    }
  }

  if (_filteredMovies.length > 5)
    return sortMovies(_filteredMovies.slice(0, 6));
  return sortMovies(_filteredMovies);
};
