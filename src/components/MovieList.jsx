import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies,SuggestionPage }) => {
  if (!movies) return;
  return (
    <div className="pl-18 max-md:pl-6">
        <h1 className="font-medium text-2xl max-md:text-xl text-white pb-3 pt-5 relative">{title}</h1>
      <div className={ SuggestionPage ? '' :`flex overflow-x-scroll scrollbar-hide`} >
        <div className={ SuggestionPage ? 'flex flex-wrap gap-5' : `flex gap-2 my-3`}>
          {movies.map((movie) => (
            <MovieCard key={movie?.id} title={movie?.title} posterPath={movie?.poster_path} overView={movie?.overview.slice(0,150)} relesed={movie?.release_date.slice(0,4)} rating={movie?.vote_average} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
