import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainSection from "./MainSection";

const Browse = () => {
  useNowPlayingMovies();
  //Main section and Secondary section

  return <MainSection />;
};

export default Browse;
