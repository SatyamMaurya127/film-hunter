"use client";

import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import moment from "moment";
import { formatBudgetOrRevenue, formatMovieRuntime } from "@/lib/utils";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Table } from "lucide-react";
import { TableBody, TableCell, TableRow } from "../ui/table";

const MoviePageClient: React.FC<{ movie: any }> = ({ movie }) => {
  return (
    <>
      <div className="relative min- h-screen w-full">
        <div className="absolute w-full h-full bg-black/70 z-10" />
        <img
          src={movie.poster_path || ""}
          alt="image"
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="grid grid-cols-12 relative z-20 p-2">
          <div className="col-span-4 relative w-full h-full">
            <Image
              src={movie.poster_path || ""}
              fill
              className="object-contain drop-shadow-2xl"
              alt="D"
            />
          </div>
          <div className="col-span-8  flex flex-col gap-y-4 py-8 px-10">
            <h1 className="text-5xl font-extrabold">{movie.title}</h1>
            <i className="">-"{movie.tagline}"</i>
            <div className="flex gap-x-5">
              <Badge className="w">IMDB {movie.vote_average}</Badge>
            </div>
            <p className="text-xl leading-relaxed">
              {movie.overview}
              <br />
              <Link
                href={movie.homepage}
                className="border-b hover:text-gray-300 text-base"
              >
                Visit Homepage
              </Link>
            </p>
            <div className="flex flex-row  gap-x-3">
              <p className="text-muted text-lg font-bold text-gray-300">
                {formatMovieRuntime(movie.runtime || 0)}
              </p>
              <Badge variant="outline" className=" border-white">
                {`${movie.status} - ${moment(movie.release_date).format(
                  "D MMMM YYYY"
                )}`}
              </Badge>
            </div>
            <div className="genres flex flex-row gap-x-5">
              {movie.genres.split(",").map((genre: string, index: number) => (
                <p className="text-gray-300 font-extrabold text-lg">
                  {index == movie.genres.split(",").length - 1 && (
                    <span className="mr-3"> • </span>
                  )}
                  {genre}
                </p>
              ))}
            </div>
            <h4 className="text-lg">
              Budget: {formatBudgetOrRevenue(movie.budget)}
            </h4>
            <div className="more-details">
              <Tabs defaultValue="more" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="more">More</TabsTrigger>
                  <TabsTrigger value="cast">Cast</TabsTrigger>
                </TabsList>
                <TabsContent value="more" className="w-full text-lg">
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base"> Is Adult </span>
                    <span className="font-bold">
                      {`${movie.adult == true ? "Yes" : "No"}`}
                    </span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base">Budget </span>
                    <span className="font-bold">
                      {formatBudgetOrRevenue(movie.budget)}
                    </span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base">Revnue</span>
                    <span className="font-bold">
                      {formatBudgetOrRevenue(movie.revenue)}
                    </span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base">Production Companies </span>
                    <span className="font-bold">
                      {movie.production_companies}
                    </span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base">Production Country</span>
                    <span className="font-bold">
                      {movie.production_countries}
                    </span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base">Spoken Languages in Movie</span>
                    <span className="font-bold">{movie.spoken_languages}</span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-base">Orignal language of Movie</span>
                    <span className="font-bold">
                      {movie.original_language.toUpperCase()}
                    </span>
                  </div>
                </TabsContent>
                <TabsContent value="cast">Cast</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePageClient;
