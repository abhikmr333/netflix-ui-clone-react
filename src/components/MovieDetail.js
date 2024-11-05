const MovieDetail = ({ originalTitle, overview }) => {
  return (
    <div className="absolute aspect-video w-screen bg-gradient-to-r from-black pl-20 pt-44 text-white">
      <h1 className="w-96 text-3xl font-semibold">{originalTitle}</h1>
      <h3 className="w-96 text-xl font-light">{overview}</h3>
      <div className="mt-2 flex">
        <button className="h-10 w-24 rounded-md bg-white font-semibold text-black">
          ▶️ Play
        </button>
        <button className="ml-2 h-10 w-28 rounded-md bg-gray-500 bg-opacity-50 font-semibold text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
