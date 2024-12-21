import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SecondarySection = () => {
  //movielist1
  //moviecards
  //......
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;

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

  const topRatedMoviesList =
    topRatedMovies &&
    topRatedMovies.map((movie) => (
      <MovieCard
        title={movie?.original_title}
        key={movie?.id}
        posterPath={movie?.poster_path}
      />
    ));

  const upcomingMoviesList =
    upcomingMovies &&
    upcomingMovies.map((movie) => (
      <MovieCard
        title={movie?.original_title}
        key={movie?.id}
        posterPath={movie?.poster_path}
      />
    ));

  return (
    <div className="flex bg-black">
      <div className="relative z-20 -mt-80 px-12">
        <h2 className="mt-4 pl-2 text-3xl text-white">Now Playing</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {nowPlayingMoviesList}
        </section>

        <h2 className="mt-4 pl-2 text-3xl text-white">Popular Movies</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {popularMoviesList}
        </section>

        <h2 className="mt-4 pl-2 text-3xl text-white">Top Rated Movies</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {topRatedMoviesList}
        </section>

        <h2 className="mt-4 pl-2 text-3xl text-white">Upcoming Movies</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {upcomingMoviesList}
        </section>
      </div>
    </div>
  );
};

export default SecondarySection;
