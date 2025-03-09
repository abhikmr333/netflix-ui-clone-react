import { useSelector } from "react-redux";
import { MOVIES_URL, SEARCH_MOVIE } from "../utils/constants";
import API_OPTIONS from "../utils/tmdbOption";

const SearchResult = () => {
  const suggestedMovies = useSelector((store) => store.gpt.suggestedMovies);
  //console.log(suggestedMovies);

  const searchSuggestedMoviesTmdb = async (movieName) => {
    const response = await fetch(MOVIES_URL + movieName, API_OPTIONS);
    const result = await response.json();
    return result.results;
  };

  const suggestedMoviesSearchResult = suggestedMovies.map((movie) =>
    searchSuggestedMoviesTmdb(movie),
  );
  console.log(suggestedMoviesSearchResult);

  return <div></div>;
};

export default SearchResult;
