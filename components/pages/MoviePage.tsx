"use client";

import { _parseIMDBChunkData } from "@/lib/db";
import { formatBudgetOrRevenue, parseMovieDataToPoster } from "@/lib/utils";
import { Movie } from "@/types/Movies";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MovieCard from "../ui/movie-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const MoviePageClient: React.FC<{ movie: Movie }> = ({ movie: _m }) => {
  const movie: Movie = _parseIMDBChunkData(_m);
  console.log(movie);

  return (
    <>
      <div className="relative min- h-[92vh] w-full">
        <div className="absolute w-full h-full bg-gradient-to-l from-transparent via-black/55 to-black/80 z-10" />
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black z-10" />
        <Image
          src={movie.titleImages[0]?.url || ""}
          alt="image"
          fill
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="grid grid-cols-12 w-full items-center relative z-20 ">
          <div className="col-span-7 flex flex-col gap-y-4 p-16 k">
            <h1 className="text-5xl leading-normal font-extrabold">
              {movie.title}
            </h1>
            <div className="flex gap-x-5">
              <Badge className="text-base">
                IMDB {movie.rating.aggregateRating}
              </Badge>
            </div>
            <p className="text-xl tracking-wide leading-relaxed my-2">
              {movie.plot}
            </p>
            <div className="flex flex-row  gap-x-3">
              <p className=" text-gray-300 text-lg font-bold">
                {movie.runtime.text}
              </p>
              <Badge variant="outline" className=" border-white">
                {movie.releaseDate?.year}
              </Badge>
            </div>
            <div className="genres flex flex-row gap-x-5">
              {movie.genres.map((genre, index) => (
                <p key={index} className=" font-extrabold text-lg">
                  {genre}
                  {index != movie.genres.length - 1 && (
                    <span className="ml-3"> • </span>
                  )}
                </p>
              ))}
            </div>
            <h4 className="text-lg font-light">
              <span className="font-extrabold tracking-wide">Budget: </span>
              {formatBudgetOrRevenue(
                movie.budget?.amount,
                movie.budget?.currency
              )}
            </h4>
            <h4 className="text-lg font-light">
              <span className="font-extrabold tracking-wide">
                World Wide Revenue:{" "}
              </span>
              {formatBudgetOrRevenue(
                movie.worldwideGross?.amount,
                movie.worldwideGross?.currency
              )}
            </h4>
            <h4 className="text-lg font-light">
              <span className="font-extrabold tracking-wide">
                Opening Weekend Gross:{" "}
              </span>
              {formatBudgetOrRevenue(
                movie.openingWeekendGross?.amount,
                movie.openingWeekendGross?.currency
              )}
            </h4>
          </div>
          <div className="col-span-5 flex items-end relative w-full h-[700px] my-2">
            <Image
              src={movie.primaryImage.url || ""}
              fill
              className="object-contain drop-shadow-2xl"
              alt="D"
            />
          </div>
        </div>
      </div>
      <div className="px-10 py-5">
        <div className="more-details">
          <Tabs defaultValue="more" className="">
            <TabsList className="grid grid-cols-3 w-[600px]">
              <TabsTrigger value="more">More Like This</TabsTrigger>
              <TabsTrigger value="cast">Details</TabsTrigger>
              <TabsTrigger value="trailers">Clips & Photos</TabsTrigger>
            </TabsList>
            <TabsContent value="more" className="w-full text-lg py-5 px-16">
              <Carousel>
                <CarouselContent>
                  {parseMovieDataToPoster(movie.moreLikeThisTitle).map(
                    (movie) => (
                      <CarouselItem className="basis-1/4" key={movie.imdb_id}>
                        <Link href={`/movies/${movie.imdb_id}`}>
                          <MovieCard
                            image={movie.poster_path}
                            title={movie.title}
                          />
                        </Link>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious className="scale-150" />
                <CarouselNext className="scale-150" />
              </Carousel>
            </TabsContent>
            <TabsContent value="cast">
              <div className="p-10 flex flex-col gap-y-8">
                <h2 className="text-3xl font-extrabold">More Info</h2>

                <div className="info py-2 flex flex-col gap-y-3">
                  <h4 className="text-xl font-extrabold">Cast & Actors</h4>
                  <div className=" w-full h-full p-1  mt-5">
                    <Carousel>
                      <CarouselContent>
                        {movie.cast.map((cast) => (
                          <CarouselItem className="basis-1/4" key={cast.name}>
                            <Card
                              key={cast.name}
                              className="h-full relative w-[350px] select-none"
                            >
                              <div className="relative w-full h-[500px]">
                                <Image
                                  src={cast.img?.url}
                                  alt={cast.name}
                                  className="rounded-t-lg "
                                  fill
                                />
                                <div className="absolute flex items-end w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black p-5">
                                  <h2 className="text-xl text-center font-bold">
                                    {cast.name}
                                  </h2>
                                </div>
                              </div>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
                <div className="info py-2 flex flex-col gap-y-3">
                  <h4 className="text-xl font-extrabold">Keywords</h4>
                  <h5 className="text-lg font-bold text-gray-400">
                    {movie.keywords.map((keyword, i) => (
                      <span key={i} className="px-1">
                        {keyword}
                      </span>
                    ))}
                  </h5>
                </div>
                <div className="info py-2 flex flex-col gap-y-3">
                  <h4 className="text-xl font-extrabold">Filming Locations</h4>
                  <h5 className="text-lg font-bold text-gray-400">
                    {movie.filmingLocations.map((loc, i) => (
                      <span key={i} className="px-1">
                        {loc}
                      </span>
                    ))}
                  </h5>
                </div>
                <div className="info py-2 flex flex-col gap-y-3">
                  <h4 className="text-xl font-extrabold">Credits</h4>
                  <h5 className="text-lg font-bold text-gray-400">
                    {movie.credits.map((credit) => (
                      <div className="py-1" key={credit.as}>
                        <span className="px-1">{credit.as}: </span>
                        <span className="text-white">
                          {credit.list().map((cred, i) => (
                            <span key={i}>{cred.text}, </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </h5>
                </div>
                <div className="info py-2 flex flex-col gap-y-3">
                  <h4 className="text-xl font-extrabold">
                    Studio & Productions
                  </h4>
                  <h5 className="text-lg font-bold text-gray-400">
                    {movie.productionCompanies.map((company, i) => (
                      <span key={i}>{company}, </span>
                    ))}
                  </h5>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="trailers">
              <div className="p-10">
                <h2 className="text-3xl font-extrabold tracking-wide my-2">
                  Images
                </h2>
                <Carousel>
                  <CarouselContent>
                    {movie.titleImages.map((image) => (
                      <CarouselItem className="basis-1/4" key={image.url}>
                        <div className="relative h-[260px] ">
                          <Image
                            src={image.url}
                            fill
                            // width={600}
                            // height={300}
                            className="object-contain"
                            alt={image.caption}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="p-10">
                <h2 className="text-3xl font-extrabold tracking-wide my-2">
                  Clips
                </h2>
                <Carousel>
                  <CarouselContent>
                    {movie.trailer.map((t) => (
                      <CarouselItem className="basis-1/4" key={t.id}>
                        <Link href={t.videoURL.url} target="_blank">
                          <Card className="h-full relative w-[350px] select-none">
                            <div className="relative w-full">
                              <div className="absolute w-20 h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <PlayCircleIcon
                                  size={70}
                                  className="text-gray-300"
                                />
                              </div>
                              <Image
                                src={t.thumbnail.url}
                                alt={t.description}
                                height={t.thumbnail.height}
                                width={t.thumbnail.width}
                                className="rounded-t-lg w-full"
                              />
                              <div className=" items-end w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black p-5">
                                <h2 className="text-base text-center font-bold">
                                  {t.description.slice(0, 70)}...
                                </h2>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MoviePageClient;
