import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";

const Browse = () => {
  useNowPlayingMovies();
  //Main section and Secondary section

  return (
    <>
      <MainSection />
      <SecondarySection />
    </>
  );
};

export default Browse;
