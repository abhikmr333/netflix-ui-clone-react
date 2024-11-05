import API_OPTIONS from "../tmdbOption";
import { UPCOMING_MOVIES } from "../constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(UPCOMING_MOVIES, API_OPTIONS);
      if (!response.ok) throw new Error("Unable to fetch");
      const result = await response.json();
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useUpcomingMovies;
