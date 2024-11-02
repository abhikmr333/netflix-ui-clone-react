import { useEffect } from "react";
import { MOVIES_URL } from "../constants";
import API_OPTIONS from "../tmdbOption";
import { useDispatch } from "react-redux";
import { addMovies } from "../../redux/features/movieSlice";

const useNowPlayingMovies = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(MOVIES_URL, API_OPTIONS);
      if (!response.ok) throw new Error("Error in fetching");
      const result = await response.json();
      dispatch(addMovies(result.results));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useNowPlayingMovies;
