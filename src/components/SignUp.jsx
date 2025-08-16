import Header from './Header';
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendMovies } from '../utils/trend10Movies';

const SignUp = () => {
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4
  };
  return (
    <div className='w-full'>
            <Header />
            <div className=' brightness-[35%] h-[90vh] w-full'>
            <img className='w-full h-[99vh] object-cover object-[2%_19%]' src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="" />
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
{/* bg-gradient-to-r from-[#210d16] from-15% via-[#b82869] via-[#e50914] via-[#b82869] to-[#210d16] to-84% = that gradient */}
{/* 6.25rem = height */}
                        
                <div class="relative bg-transparent h-[6.25rem] top-9 z-10 overflow-hidden
                before:content-[''] 
                before:left-[-10%]
                before:w-[120%]
                before:h-[12.80rem]
                before:absolute
                before:rounded-t-[100%] 
                before:[background:linear-gradient(to_right,rgba(33,13,22,1)_16%,rgba(184,40,105,1),rgba(229,9,20,1),rgba(184,40,105,1),rgba(33,13,22,1)_84%)]
                before:-z-10
                
                after:[background:radial-gradient(59%_495%_at_50%_-455%,rgba(64,97,231,0.4)_88%,rgba(0,0,0,0.1)_100%),_black]
                after:absolute
                after:w-[120%]
                after:left-[-10%]
                after:overflow-hidden
                after:top-[4.5px]
                after:rounded-t-[50%]
                after:mx-auto
                after:h-[12.60rem]
                after:object-cover
                after:z-10"
                >
                    <div className='absolute top-[58px] left-[350px] z-20'>

                    <h1 className='text-white text-[32px] font-bold'>Trending Now</h1>
                    </div>
            </div>


            <div className="w-full flex justify-center h-[500px] bg-black">
                <div className='absolute w-[1200px] pt-8 pl-2'>
                    <Slider {...settings} >
                        {
                            trendMovies.map((movie) => {
                                return (
                                    <div className='w-10 py-8 px-3 relative '>
                                        <img className='w-[90%] rounded-lg' src={movie.img} alt="" />
                                        <h1 className='absolute font-bold text-9xl text-black top-50 left-[-10px] [-webkit-text-stroke:2px_white] font-[poppins] text-shadow-[10px_7px_6px_var(--tw-text-shadow-color,_rgb(0_0_0_/_0.5))]'>{movie.position}</h1>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
  )
}

export default SignUp