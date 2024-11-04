const MovieDetail = ({ originalTitle, overview }) => {
  return (
    <div className="absolute aspect-video w-screen bg-gradient-to-r from-black pl-20 pt-28 text-white">
      <h1 className="w-96 text-3xl font-semibold">{originalTitle}</h1>
      <h3 className="w-96 text-xl font-light">{overview}</h3>
    </div>
  );
};

export default MovieDetail;
