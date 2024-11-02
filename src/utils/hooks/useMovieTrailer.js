import { VIDEO_URL } from "../../utils/constants";
import { useEffect } from "react";
import API_OPTIONS from "../../utils/tmdbOption";
import { addTrailerKey } from "../../redux/features/movieSlice";
import { useSelector, useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  useEffect(() => {
    getMovieTrailer();
  }, []);
  const dispatch = useDispatch();
  const trailerKey = useSelector((store) => store?.movies?.trailerKey);

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        VIDEO_URL + `${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      if (!response.ok) throw new Error("fetching failed");
      const result = await response.json();
      const movieTrailerKey = filterMovieTrailer(result?.results);
      dispatch(addTrailerKey(movieTrailerKey));
    } catch (err) {
      console.log(err.message);
    }
  };

  const filterMovieTrailer = (result) => {
    const movieTrailer = result.filter((res) => res?.type === "Trailer");
    return movieTrailer.length ? movieTrailer[0]?.key : result[0]?.key;
  };
  return trailerKey;
};

export default useMovieTrailer;
