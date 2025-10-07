import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GeminiMovieSuggestions = () => {
  const mLists = useSelector((store) => store.gemini.geminiMovies)
  if(!mLists) return
    let movies = mLists.flat();
  console.log("dataa : ",mLists)
  console.log('the whole movies : ',movies)
  return (
    <div className='z-10'>
      <MovieList title={''} movies={movies} SuggestionPage={true}  /> 
    </div>
  )
}

export default GeminiMovieSuggestions