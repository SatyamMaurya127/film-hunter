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
