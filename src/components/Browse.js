import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const isGptView = useSelector((store) => store.gpt.view);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  //Main section and Secondary section
  return isGptView ? (
    <GptSearch />
  ) : (
    <>
      <MainSection />
      <SecondarySection />
    </>
  );
};

export default Browse;
