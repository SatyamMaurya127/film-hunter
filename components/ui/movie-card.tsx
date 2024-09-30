import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  description: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  image,
  rating,
  description,
}) => {
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-full">
    //   <div className="relative w-full h-48">
    //     <Image
    //       src={image}
    //       alt={title}
    //       className="rounded-t-lg w-full object-cover"
    //       fill
    //     />
    //   </div>
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <div className="text-gray-700 text-base mb-2">Rating: {rating} ★</div>
    //     <p className="text-gray-700 text-base">{description}</p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       More Info
    //     </button>
    //   </div>
    // </div>

    <Card className="h-full relative w-[320px]">
      <div className="relative w-full h-[500px]">
        <Image src={image} alt={title} className="rounded-t-lg" fill />
      </div>
      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>
          {description.substring(0, 70) + "... more"}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default MovieCard;
