import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <section>
      <Header from={'browse'} />
      </section>
      <section className="absolute top-0 z-[-1] w-full">
        <img
          className="w-full h-screen brightness-[60%] object-cover"
          src="https://4kwallpapers.com/images/wallpapers/demon-slayer-3840x2160-23247.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Browse;
