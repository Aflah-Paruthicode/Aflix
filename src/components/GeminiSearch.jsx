import React from 'react'
import GeminiSearchBar from './GeminiSearchBar'
import { LoginPageBgImg } from '../utils/constants'

const GeminiSearch = () => {
  return (
    <div>
        <section>
            <img className='absolute -z-10 brightness-[30%] w-full h-screen object-cover' src={LoginPageBgImg} alt="" />
        </section>
        <section>
            <GeminiSearchBar />
        </section>
    </div>
  )
}

export default GeminiSearch