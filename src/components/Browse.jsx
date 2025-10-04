import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="">
      <section>
      <Header from={'browse'} />
      </section>
      <section className=" top-0 z-[-1] w-full">
        <MainContainer />
      </section>
      <section className="">
        <SecondaryContainer />
      </section>
    </div>
  );
};

export default Browse;
