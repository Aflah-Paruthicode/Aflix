import React from "react";
import Gemini from "../utils/gemini-config";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResults } from "../utils/geminiSlice";

export const useGetGeminiMovies = async (
  searchText,
  searchDisabled,
  setSearchDisabled,
  dispatch,
  setErr
) => {
  try {
    if (searchText.current.value.trim() == "") {
      setErr("Enter Something!!");
      return;
    }

    if (searchDisabled) return;

    setSearchDisabled(true);

    setTimeout(() => {
      setSearchDisabled(false);
    }, 12000);

    const findMovie = async (movieName) => {
      const movie = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await movie.json();
      return json.results;
    };

    const model = Gemini;
    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 28 to 50 movies comma seperated like the example given ahead. Example result : Gadar,Sholay,Don,Golmaal, Koi Mil Gaya";

    const result = await model.generateContent(prompt);
    const movieNames = result.response
      .text()
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);
    (movieNames);
    const promiseArray = movieNames.map((movie) => findMovie(movie));
    const foundMovies = await Promise.all(promiseArray);
    let movies = foundMovies
      .map((resultsList) => resultsList[0])
      .filter((movie) => movie !== undefined);

    const filteredMovies = movies;

    (filteredMovies);
    (" movies are : ", filteredMovies);
    dispatch(addGeminiMovieResults(filteredMovies));
    (result.response.text());
  } catch (error) {
    console.error("Gemini error:", error);
  }
};
