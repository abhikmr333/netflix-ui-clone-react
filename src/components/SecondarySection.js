import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SecondarySection = () => {
  //movielist1
  //moviecards
  //......
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies } = movies;

  const nowPlayingMoviesList =
    nowPlayingMovies &&
    nowPlayingMovies.map((movie) => (
      <MovieCard
        title={movie?.original_title}
        key={movie?.id}
        posterPath={movie?.poster_path}
      />
    ));

  const popularMoviesList =
    popularMovies &&
    popularMovies.map((movie) => (
      <MovieCard
        title={movie?.original_title}
        key={movie?.id}
        posterPath={movie.poster_path}
      />
    ));

  return (
    <div className="h-screen bg-black">
      <div className="relative z-20 -my-80 px-12">
        <h2 className="mt-4 pl-2 text-3xl text-white">Now Playing</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {nowPlayingMoviesList}
        </section>
        <h2 className="mt-4 pl-2 text-3xl text-white">Popular Movies</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {popularMoviesList}
        </section>
      </div>
    </div>
  );
};

export default SecondarySection;
