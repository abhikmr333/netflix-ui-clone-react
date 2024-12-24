import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const movieCards = movies.map((movie) => (
    <MovieCard
      title={movie?.original_title}
      key={movie?.id}
      posterPath={movie.poster_path}
    />
  ));

  return (
    <>
      <h2 className="mt-4 pl-2 text-3xl text-white">{title}</h2>
      <section className="scrollbar-hidden flex overflow-auto">
        {movieCards}
      </section>
    </>
  );
};

export default MovieList;
