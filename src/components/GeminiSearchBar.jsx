import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Atom } from "react-loading-indicators";
import { useGetGeminiMovies } from "../hooks/useGetGeminiMovies";
import { Genre, LanguagesForGenre } from "../utils/constants";

const GeminiSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const [searchDisabled, setSearchDisabled] = useState(false);
  // const [language,setLanguage] = useState('');
  // const [genre,setGenre] = useState('');

  return (
    <div className="h-[70vh] w-full flex flex-col justify-center items-center max-md:w-[80%] max-md:m-auto">
      <h2 className="text-white text-2xl text-start w-1/2 p-3 font-bold max-md:text-xl max-md:w-full">
        What Kind Of Movie Are You Looking For !
      </h2>
      <div className="p-5 bg-black grid grid-cols-6 gap-2 rounded-sm relative max-md:grid-cols-10">
        <input
          className="text-white border p-3 text-base col-span-5 rounded-sm max-md:col-span-7"
          ref={searchText}
          type="text"
          placeholder="Explain your thoughts here ..."
        />
        {err && (
          <p className="text-red-700 bg-black font-medium absolute left-8 bottom-1">
            {err}
          </p>
        )}
        {searchDisabled ? (
          <Atom
            color={["#900000", "#c30000", "#f60000", "#ff2a2a"]}
            size="small"
          />
        ) : (
          <button
            className="col-span-1 bg-red-600 text-white py-3 px-8 rounded-sm max-md:col-span-3 max-md:px-0"
            onClick={() =>
              useGetGeminiMovies(
                searchText,
                searchDisabled,
                setSearchDisabled,
                dispatch,
                setErr
              )
            }
          >
            Search
          </button>
        )}
      </div>

      {/* Coming Soon This Feature */}
      {/* <div className="flex justify-between w-1/3">
        <div>
          <label htmlFor="" className="text-white">
            Language : 
          </label>
          <select onChange={(e) => setLanguage(e.target.value)} value={language}
            className="bg-[#4646468e] rounded-lg p-2 text-white m-2"
            name="Language"
            id=""
          >
            <option value=''>Choose One...</option> 
            {LanguagesForGenre.map((Language) => <option value={Language}>{Language}</option> )}
          </select>
        </div>

        <div>
          <label htmlFor="" className="text-white">
            Genre : 
          </label>
          <select
            className="bg-[#4646468e] rounded-lg p-2 text-white m-2"
            name="Language"
            id=""
          >
            <option value="">Choose One...</option>
            {Genre.map((genre) => <option value={genre}>{genre}</option>)}            
          </select>
        </div>
      </div> */}
    </div>
  );
};

export default GeminiSearchBar;
