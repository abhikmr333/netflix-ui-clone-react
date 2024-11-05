import { POPULAR_MOVIES } from "../constants";
import API_OPTIONS from "../tmdbOption";
import { useEffect } from "react";
import { addPopularMovies } from "../../redux/features/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch(POPULAR_MOVIES, API_OPTIONS);
      if (!response.ok) throw new Error("Unable to fetch");
      const result = await response.json();
      dispatch(addPopularMovies(result.results));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default usePopularMovies;
