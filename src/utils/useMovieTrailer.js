import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { useEffect } from "react";
import { addMovieTrailer } from "./moviesSlice";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1267319/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filteredData = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));

  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
