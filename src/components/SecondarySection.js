import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SecondarySection = () => {
  //movielist1
  //moviecards
  //......
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  const movieCards =
    nowPlaying &&
    nowPlaying.map((movie) => (
      <MovieCard
        title={movie?.original_title}
        key={movie?.id}
        posterPath={movie?.poster_path}
      />
    ));

  return (
    <div className="h-screen bg-black">
      <div className="relative z-20 -my-80 px-12">
        <h2 className="pl-2 text-3xl text-white">Now Playing</h2>
        <section className="scrollbar-hidden flex overflow-auto">
          {movieCards}
        </section>
      </div>
    </div>
  );
};

export default SecondarySection;
