import React from 'react'
import GptSearchBar from './GptSearchBar'
import { LoginPageBgImg } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <section>
            <img className='absolute -z-10 brightness-[30%] w-full h-screen object-cover' src={LoginPageBgImg} alt="" />
        </section>
        <section>
            <GptSearchBar />
        </section>
    </div>
  )
}

export default GptSearch