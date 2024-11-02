import useMovieTrailer from "../utils/hooks/useMovieTrailer";

const MovieVideo = ({ movieId }) => {
  const trailerKey = useMovieTrailer(movieId);

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
