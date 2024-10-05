import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

interface MovieCardProps {
  title: string;
  image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
  return (
    <Card className="h-full relative w-[320px] select-none">
      <div className="relative w-full h-[500px]">
        <Image src={image} alt={title} className="rounded-t-lg " fill />
        <div className="absolute flex items-end w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black p-5">
          <h2 className="text-xl text-center font-bold">{title}</h2>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
