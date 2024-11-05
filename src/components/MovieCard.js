import { MOVIE_POSTERS } from "../utils/constants";
const MovieCard = ({ title, posterPath }) => {
  return (
    <img className="h-52 p-2" src={MOVIE_POSTERS + posterPath} alt={title} />
  );
};

export default MovieCard;
