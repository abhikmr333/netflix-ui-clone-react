import { VIDEO_URL } from "../utils/constants";
import { useEffect } from "react";
import API_OPTIONS from "../utils/tmdbOption";
import { addTrailerKey } from "../redux/features/movieSlice";
import { useSelector, useDispatch } from "react-redux";

const MovieVideo = ({ movieId }) => {
  //early return if movieId is null

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
  console.log(trailerKey);
  return (
    <iframe
      className="aspect-video w-screen"
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&vq=hd1080p&loop=1&playlist=${trailerKey}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default MovieVideo;
