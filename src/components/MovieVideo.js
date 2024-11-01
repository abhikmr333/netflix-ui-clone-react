import { VIDEO_URL } from "../utils/constants";
import { useEffect } from "react";
import API_OPTIONS from "../utils/tmdbOption";

const MovieVideo = ({ movieId }) => {
  //early return if movieId is null

  useEffect(() => {
    getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        VIDEO_URL + `${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      if (!response.ok) throw new Error("fetching failed");
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <iframe
      className="aspect-video w-screen"
      src="https://www.youtube.com/embed/tf9vUQgg1b4?si=mveute1omyu7PQCC&autoplay=1&mute=1&vq=hd1080p"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default MovieVideo;

//movie_id/videos?language=en-US
