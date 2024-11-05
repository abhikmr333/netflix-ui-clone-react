import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";
import usePopularMovies from "../utils/hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  //Main section and Secondary section
  return (
    <>
      <MainSection />
      <SecondarySection />
    </>
  );
};

export default Browse;
