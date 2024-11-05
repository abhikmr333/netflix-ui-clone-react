import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  //Main section and Secondary section
  return (
    <>
      <MainSection />
      <SecondarySection />
    </>
  );
};

export default Browse;
