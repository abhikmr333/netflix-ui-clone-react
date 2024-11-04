import MovieDetail from "./MovieDetail";
import MovieVideo from "./MovieVideo";
import { useSelector } from "react-redux";

const MainSection = () => {
  //Main section -> movieDetail and movieVideo

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //early return if movies don't exist
  if (!movies) return;

  return (
    <div className="">
      <MovieDetail
        originalTitle={movies?.[4]?.original_title}
        overview={movies?.[4]?.overview}
      />
      <MovieVideo movieId={movies?.[4]?.id} />
    </div>
  );
};

export default MainSection;
