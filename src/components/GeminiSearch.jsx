import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import { LoginPageBgImg } from "../utils/constants";
import GeminiMovieSuggestions from "./GeminiMovieSuggestions";

const GeminiSearch = () => {
  return (
    <div>
      <section>
        <img
          className="fixed -z-10 brightness-[30%] w-full object-cover max-md:h-screen"
          src={LoginPageBgImg}
          alt=""
        />
      </section>
      <section>
        <GeminiSearchBar />
      </section>
      <section>
        <GeminiMovieSuggestions />
      </section>
    </div>
  );
};

export default GeminiSearch;
