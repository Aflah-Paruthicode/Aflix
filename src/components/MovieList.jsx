import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="pl-18">
        <h1 className="font-medium text-2xl text-white pb-3 pt-5 relative">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide" >
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
