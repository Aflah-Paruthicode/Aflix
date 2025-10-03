import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FAQ, LoginPageBgImg, reasonsToJoin, trendMovies } from "../utils/constants";
import { useState } from "react";
import FaqAccordion from "./FaqAccordion";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email,setEmail] = useState('')
  const [faqToggleIndex, setFaqToggleIndex] = useState(-1);
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 4.5,
    slidesToScroll: 4,
  };

  return (
    <div className="w-full">

      <div>
        <Header from={'sign up'} />
      </div>
      
      <div className=" brightness-[35%] h-[90vh] w-full">
        <img
          className="w-full h-[99vh] object-cover object-[2%_19%]"
          src={LoginPageBgImg}
          alt=""
        />
      </div>

      <div className="absolute top-[338px] left-0 right-0 mx-auto h-full text-white text-center bg-gradient-to-t from-black">
        <h1 className="font-black text-[63px] font-[unset] leading-20 mb-5">
          Unlimited movies, TV <br /> shows and more
        </h1>
        <p className="text-[22px] font-semibold mb-7">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="font-normal mb-3 text-[16.5px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center gap-2"
        >
          <input
            className="bg-[#1a1a1ab6] py-2 px-8 rounded-sm border w-[450px] h-[55px] text-[#888888] font-semibold"
            placeholder="Email or mobile number"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />
          <input
            className="bg-red-600 py-2 px-8 font-semibold text-[25px] text-white rounded-sm"
            value="Get Started  〉"
            type="submit"
            onClick={() => {
              navigate(`/register/${email}`)
            }}
          />
        </form>
      </div>

      <div
        className="relative bg-transparent h-[6.25rem] top-9 z-10 overflow-hidden
            before:content-[''] before:left-[-10%] before:w-[120%] before:-z-10
            before:h-[12.80rem] before:absolute before:rounded-t-[100%] 
            before:[background:linear-gradient(to_right,rgba(33,13,22,1)_16%,rgba(184,40,105,1),rgba(229,9,20,1),rgba(184,40,105,1),rgba(33,13,22,1)_84%)]
            
            after:[background:radial-gradient(59%_495%_at_50%_-455%,rgba(64,97,231,0.4)_88%,rgba(0,0,0,0.1)_100%),_black]
            after:absolute after:w-[120%] after:left-[-10%] after:overflow-hidden
            after:top-[4.5px] after:rounded-t-[50%] after:mx-auto after:h-[12.60rem] after:object-cover after:z-10"
      >
        <div className="absolute top-[58px] left-[350px] z-20">
          <h1 className="text-white text-[32px] font-bold z-40">
            Trending Now
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center h-[430px] bg-black mt-2">
        <div className="absolute w-[1200px] pt-8 pl-2">
          <Slider {...settings}>
            {trendMovies.map((movie) => {
              return (
                <div className="w-10 py-8 px-3 relative hover:scale-105 transition delay-100 duration-300 ease-in-out">
                  <img className="w-[90%] rounded-lg" src={movie.img} alt="" />
                  <h1 className="absolute font-bold text-9xl text-black top-50 left-[-10px] [-webkit-text-stroke:2px_white] font-[poppins] text-shadow-[10px_7px_6px_var(--tw-text-shadow-color,_rgb(0_0_0_/_0.5))]">
                    {movie.position}
                  </h1>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center bg-black h-[430px]">
        <div className="w-[1200px]  text-white bg-black">
          <h1 className="text-white text-[32px] font-bold mb-3">
            More reasons to join
          </h1>
          <div className="flex gap-4">
            {reasonsToJoin.map((reason, indx) => {
              return (
                <div
                  key={indx}
                  className=" relative w-1/4 h-80 rounded-2xl py-9 px-6 bg-gradient-to-br from-[#653fad6c] to-[#1e001636]"
                >
                  <h1 className="font-bold text-2xl mb-5">{reason.header}</h1>
                  <p className=" font-medium leading-5 text-[#ffffffb3]">
                    {reason.desc}
                  </p>
                  <img
                    className="absolute bottom-5 right-4"
                    src={reason.img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <div className="w-[1200px]  text-white bg-black">
          <h1 className="text-white text-[32px] font-bold mb-3 mt-2">
            Frequently Asked Questions
          </h1>
          <div className="w-full">
            {FAQ.map((faq, index) => {
              return (
                <FaqAccordion
                  key={index}
                  faq={faq}
                  faqToggle={faqToggleIndex == index ? true : false}
                  setFaqToggle={(num) => {
                    setFaqToggleIndex(num ? num : index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col bg-black text-center py-16">
        <p className="font-medium text-[16.5px] mb-4 text-[#cacaca]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form action="" className="flex justify-center items-center gap-2">
          <input
            className="bg-[#1a1a1ab6] py-2 px-8 rounded-sm border w-[450px] h-[55px] text-[#888888] font-semibold"
            placeholder="Email or mobile number"
            type="text"
          />
          <input
            className="bg-red-600 py-2 px-8 font-semibold text-[25px] text-white rounded-sm"
            value="Get Started  〉"
            type="submit"
          />
        </form>
      </div>
      <div className="flex justify-center flex-col bg-black text-center py-16">
        <div className="w-[1200px] mx-auto  text-[#adadad] font-medium text-[15px]">
          <p className="text-start mb-10">
            Questions? Call <span>+9195-6707-XXXX</span>
          </p>
          <div className="flex justify-center gap-4 w-full">
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
              <p>Legal Notices</p>
            </div>
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
            </div>
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>Media Centre</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
          </div>
          <p className="text-start my-7">Netflix India</p>
          <p className="text-start text-[12px] text-[#999999]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 underline font-normal">
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
