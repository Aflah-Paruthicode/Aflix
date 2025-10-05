import React, { useRef } from "react";
import openai from "../utils/openAi-config";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies comma seperated like the example given ahead. Example result : Gadar,Sholay,Don,Golmaal, Koi Mil Gaya";
    const gptResults = await openai.responses
      .create({
        model: "gpt-3.5-turbo",
        input: gptQuery,
        store: true,
      })
        console.log(gptResults.output_text);
      
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
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
