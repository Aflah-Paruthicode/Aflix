import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FAQ,
  LoginPageBgImg,
  reasonsToJoin,
  trendMovies,
} from "../utils/constants";
import { useState } from "react";
import FaqAccordion from "./FaqAccordion";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [faqToggleIndex, setFaqToggleIndex] = useState(-1);
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const isLineHaveToBreak = window.innerWidth > 768 ? true : false;

  const handleSignup = () => {
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );
    if (!isEmail) {
      setErr("Email Not Valid");
      return;
    }

    navigate(`/register/${email}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: window.innerWidth > 768 ? 4.5 : 2.2,
    slidesToScroll: window.innerWidth > 768 ? 4 : 2,
  };

  return (
    <div className="w-full">
      <div>
        <Header from={"sign up"} />
      </div>

      <div className=" brightness-[35%] h-[90vh] w-full">
        <img
          className="w-full h-[99vh] object-cover object-[2%_19%]"
          src={LoginPageBgImg}
          alt=""
        />
      </div>

      <div className="absolute top-[338px] max-md:top-[150px] max-md:px-9 left-0 right-0 mx-auto h-full text-white text-center bg-gradient-to-t from-black">
        <h1 className="font-black text-[63px] max-md:text-3xl max-md:leading-9 font-[unset] leading-20 mb-5 max-md:mb-2">
          Unlimited movies, TV {isLineHaveToBreak && <br />} shows and more
        </h1>
        <p className="text-[22px] font-semibold max-md:text-[16px] mb-7 max-md:mb-3">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="font-normal mb-3 max-md:mb-[14px] text-[16.5px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center max-md:flex-wrap gap-2"
        >
          <input
            className="bg-[#1a1a1ab6] py-2 max-md:py-0 px-8 rounded-sm border w-[450px] h-[55px] max-md:h-[45px] text-[#888888] font-semibold"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />

          <input
            className="bg-red-600 py-2 px-8 font-semibold text-[25px] max-md:text-base max-md:my-1 text-white rounded-sm"
            value="Get Started  〉"
            type="submit"
            onClick={handleSignup}
          />
          {err && (
            <p className="absolute text-red-600 max-md:left-10 m-2 ">{err}</p>
          )}
        </form>
      </div>

      <div
        className={`relative bg-transparent h-[6.25rem] top-9 max-md:top-2 z-10 overflow-hidden 
            before:content-[''] before:left-[-10%] before:w-[120%] before:-z-10
            before:h-[12.80rem] max-md:before:h-[6rem] before:absolute before:rounded-t-[100%] max-md:before:w-[140%] max-md:before:left-[-20%]
            before:[background:linear-gradient(to_right,rgba(33,13,22,1)_16%,rgba(184,40,105,1),rgba(229,9,20,1),rgba(184,40,105,1),rgba(33,13,22,1)_84%)]
            
            after:[background:radial-gradient(59%_495%_at_50%_-455%,rgba(64,97,231,0.4)_88%,rgba(0,0,0,0.1)_100%),_black]
            after:absolute after:w-[120%] after:left-[-10%] after:overflow-hidden max-md:after:w-[140%] max-md:after:left-[-20%]
            after:top-[4.5px] after:rounded-t-[50%] after:mx-auto after:h-[12.60rem] max-md:after:h-[6.50rem] max-md:after:top-[4px] after:object-cover after:z-10`}
      >
        <div className="absolute top-[58px] max-md:top-[45px] left-[350px] max-md:left-4 z-20">
          <h1 className="text-white text-[32px] font-bold z-[9999] max-md:text-xl">
            Trending Now
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center h-[430px] max-md:h-[200px] bg-black mt-2">
        <div className="absolute w-[1200px] max-md:w-full pt-8 max-md:pt-0 pl-2 max-md:px-10">
          <Slider {...settings}>
            {trendMovies.map((movie) => {
              return (
                <div className="w-10 py-8 max-md:pt-0 px-3 max-md:px-1 relative hover:scale-105 transition delay-100 duration-300 ease-in-out">
                  <img className="w-[90%] rounded-lg" src={movie.img} alt="" />
                  <h1 className="absolute font-bold text-9xl max-md:text-7xl text-black top-50 max-md:top-[45%] left-[-10px] max-md:left-[-5px] [-webkit-text-stroke:2px_white] font-[poppins] text-shadow-[10px_7px_6px_var(--tw-text-shadow-color,_rgb(0_0_0_/_0.5))]">
                    {movie.position}
                  </h1>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center bg-black h-[430px] max-md:h-auto ">
        <div className="w-[1200px]  text-white bg-black">
          <h1 className="text-white text-[32px] font-bold mb-3 max-md:text-xl max-md:pl-4">
            More reasons to join
          </h1>
          <div className="flex gap-4 max-md:gap-2 max-md:flex max-md:flex-col max-md:px-4">
            {reasonsToJoin.map((reason, indx) => {
              return (
                <div
                  key={indx}
                  className=" relative w-1/4 max-md:w-full h-80 max-md:h-auto rounded-2xl py-9 px-6 bg-gradient-to-br from-[#653fad6c] to-[#1e001636]"
                >
                  <h1 className="font-bold text-2xl mb-5 max-md:mb-2 max-md:text-xl">
                    {reason.header}
                  </h1>
                  <p className=" font-medium leading-5 text-[#ffffffb3]">
                    {reason.desc}
                  </p>
                  <div className="max-md:p-5">
                    <img
                      className="absolute bottom-5 right-4 max-md:bottom-2 max-md:w-16"
                      src={reason.img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <div className="w-[1200px]  text-white bg-black">
          <h1 className="text-white text-[32px] font-bold mb-3 mt-2 max-md:text-xl max-md:mt-10 max-md:pl-4">
            Frequently Asked Questions
          </h1>
          <div className="w-full max-md:px-5">
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
      <div className="flex justify-center flex-col bg-black text-center py-16 max-md:py-10 max-md:px-4">
        <p className="font-medium text-[16.5px] mb-4 text-[#cacaca] max-md:text-start">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="flex justify-center items-center max-md:items-start gap-2 max-md:gap-3 max-md:flex-col max-md:w-full"
        >
          <input
            className="bg-[#1a1a1ab6] py-2 px-8 rounded-sm border w-[450px] max-md:w-[95%] h-[55px] max-md:h-[45px] text-[#888888] font-semibold"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />
          <input
            className="bg-red-600 py-2 px-8 font-semibold text-[25px] max-md:text-[18px] text-white rounded-sm"
            value="Get Started  〉"
            type="submit"
            onClick={handleSignup}
          />
          {err && (
            <p className="absolute text-red-600 max-md:left-10 m-2 ">{err}</p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
