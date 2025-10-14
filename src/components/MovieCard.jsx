import React from "react";
import { Img_CDN_Url } from "../utils/constants";

const MovieCard = ({ posterPath, title, overView, relesed, rating }) => {
  if (!posterPath) return;

  return (
    <div className="w-60 max-md:w-40 z-20 hover:mx-1 transition relative max-md:z-[99] cursor-pointer">
      <div className="hover:scale-105 transition duration-300 group">
        <div className="absolute max-md:hidden text-center w-[90%] left-1/2 -translate-x-1/2 top-16 text-white font-bold z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="font-[poppins] font-semibold text-[20px]">{title}</h1>
          <p className="opacity-50 text-sm">{relesed}</p>
        </div>{" "}
        <div className="absolute max-md:hidden bottom-8 left-1/2 font-[cursive] text-[15px] -translate-x-1/2 w-[90%]  text-white font-extralight z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-yellow-500 mb-3">★ {rating}</p>
          <p className="">{overView + "..."}</p>
        </div>
        <img
          alt="Movie Card"
          className="rounded-md h-full transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-50"
          src={Img_CDN_Url + posterPath}
        />
      </div>
    </div>
  );
};

export default MovieCard;
