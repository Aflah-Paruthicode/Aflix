import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <section>
      <Header from={'browse'} />
      </section>
      <section className="absolute top-0 z-[-1] w-full">
        <MainContainer />
      </section>
    </div>
  );
};

export default Browse;
