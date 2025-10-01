import React, { useEffect } from 'react'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div >Browse</div>
  )
}

export default Browse