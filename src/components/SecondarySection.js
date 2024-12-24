import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondarySection = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;

  const moviesList = [];

  nowPlayingMovies &&
    moviesList.push(
      <MovieList
        key={"Now Playing"}
        title={"Now Playing"}
        movies={nowPlayingMovies}
      />,
    );

  popularMovies &&
    moviesList.push(
      <MovieList key={"Popular"} title={"Popular"} movies={popularMovies} />,
    );

  topRatedMovies &&
    moviesList.push(
      <MovieList
        key={"Top Rated"}
        title={"Top Rated"}
        movies={topRatedMovies}
      />,
    );

  upcomingMovies &&
    moviesList.push(
      <MovieList
        key={"Upcoming Movies"}
        title={"Upcoming Movies"}
        movies={upcomingMovies}
      />,
    );

  return (
    <div className="flex bg-black">
      <div className="relative z-20 -mt-80 px-12">{moviesList}</div>
    </div>
  );
};

export default SecondarySection;
