import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const VideoBackground = () => {

  useMovieTrailer()

  const trailer = useSelector(store => store.movies?.movieTrailer)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/'+trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
