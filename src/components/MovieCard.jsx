import React from 'react'
import { Img_CDN_Url } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return;

  return (
    <div className='w-60 z-20 hover:mx-1 transition'>
        <img alt="Movie Card" className='rounded-md h-full hover:scale-105 transition duration-300' src={Img_CDN_Url+posterPath} />
    </div>
  )
}

export default MovieCard