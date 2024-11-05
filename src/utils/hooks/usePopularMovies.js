import { POPULAR_MOVIES } from "../constants";
import API_OPTIONS from "../tmdbOption";

import { useEffect } from "react";

const usePopularMovies = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(POPULAR_MOVIES, API_OPTIONS);
      if (!response.ok) throw new Error("Unable to fetch");
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return;
};

export default usePopularMovies;
