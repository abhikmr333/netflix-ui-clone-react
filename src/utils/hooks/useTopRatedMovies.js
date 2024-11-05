import { TOP_RATED_MOVIES } from "../constants";
import API_OPTIONS from "../tmdbOption";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  useEffect(() => {
    getTopRatedMovies();
  });

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
      if (!response.ok) throw new Error("Unable to fetch");
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useTopRatedMovies;
