import MovieDetail from "./MovieDetail";
import MovieVideo from "./MovieVideo";
import { useSelector } from "react-redux";

const MainSection = () => {
  //Main section -> movieDetail and movieVideo

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //early return if movies don't exist
  if (!movies) return;

  return (
    <div>
      <MovieDetail
        originalTitle={movies?.[3]?.original_title}
        overview={movies?.[3]?.overview}
      />
      <MovieVideo movieId={movies?.[3]?.id} />
    </div>
  );
};

export default MainSection;
