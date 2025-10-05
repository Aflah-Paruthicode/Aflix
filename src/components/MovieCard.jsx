import React from 'react'
import { Img_CDN_Url } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  return (
    <div className='w-60 z-20'>
        <img alt="Movie Card" className='rounded-md' src={Img_CDN_Url+posterPath} />
    </div>
  )
}

export default MovieCard