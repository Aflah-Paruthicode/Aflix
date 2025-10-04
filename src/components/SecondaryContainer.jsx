import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='absolute top-[72%] w-full'>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Upcoming Movies'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer