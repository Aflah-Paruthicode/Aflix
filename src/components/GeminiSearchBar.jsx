import React, { useRef } from "react";
import Gemini from "../utils/gemini-config";
import { API_OPTIONS } from "../utils/constants";

const GeminiSearchBar = () => {
  const searchText = useRef(null);
  const handleGeminiSearchClick = async () => {
    console.log(searchText.current.value);

    const findMovie = async (movieName) => {
        const movie = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await movie.json();
        return json.results;
    }

    try {
      const model = Gemini
      const prompt =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies comma seperated like the example given ahead. Example result : Gadar,Sholay,Don,Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(prompt);
      const movieNames = result.response.text().split(',');
      console.log(movieNames)
      const promiseArray = movieNames.map((movie) => findMovie(movie))
      const foundMovies = await Promise.all(promiseArray)
      console.log(' movies are : ',foundMovies)
      console.log(result.response.text());
    } catch (error) {
      console.error("Gemini error:", error);
    }
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-white text-2xl text-start w-1/2 p-3 font-bold">
        What Kind Of Movie Are You Looking For !
      </h2>
      <div className="p-5 bg-black grid grid-cols-6 gap-2 rounded-sm">
        <input
          className="text-white border p-3 text-base col-span-5 rounded-sm"
          ref={searchText}
          type="text"
          placeholder="Explain your thoughts here ..."
        />
        <button
          className="col-span-1 bg-red-600 text-white py-3 px-8 rounded-sm"
          onClick={handleGeminiSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GeminiSearchBar;
