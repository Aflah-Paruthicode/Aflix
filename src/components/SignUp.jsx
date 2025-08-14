import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='w-full'>
            <Header />
            <div className=' brightness-[35%] h-[90vh] w-full'>
            <img className='w-full h-[90vh] object-cover object-[2%_18%]' src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="" />
            </div>

            <div className='absolute top-[338px] left-0 right-0 mx-auto h-full text-white text-center bg-gradient-to-t from-black'>
                <h1 className='font-black text-[63px] font-[unset] leading-20 mb-5'>Unlimited movies, TV <br /> shows and more</h1>
                <p className='text-[22px] font-semibold mb-7'>Starts at ₹149. Cancel at any time.</p>
                <p className='font-normal mb-3 text-[16.5px]'>Ready to watch? Enter your email to create or restart your membership.</p>
                <form action="" className='flex justify-center items-center gap-2'>
            <input className='bg-[#1a1a1ab6] py-2 px-8 rounded-sm border w-[450px] h-[55px] text-[#888888] font-semibold' placeholder='Email or mobile number' type="text" />
            <input className='bg-red-600 py-2 px-8 font-semibold text-[25px] text-white rounded-sm' value='Get Started  >' type="submit" />
                </form>

            </div>



            
            <div className='bg-[#1a1a1a] w-full h-60 flex justify-center items-center text-[#c6c5c5fa]'>
                <div className='w-1/2 '>
                <h1 className='mb-5'>Questions? Call +91-9567-XXXX-37 (Toll-Free)</h1>
                <div className='flex gap-44 mb-5 underline text-[13px]'>
                    <p>FAQ</p>
                    <p>Help Centre</p>
                    <p>Terms of Use</p>
                    <p>Privacy</p>
                </div>
                <div className='flex gap-[70px] underline'>
                    <p>Cookie Preferences</p>
                    <p>Corporate Information</p>
                </div>
                </div>
            </div>
        </div>
  )
}

export default SignUp