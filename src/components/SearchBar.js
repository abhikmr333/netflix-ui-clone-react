const SearchBar = () => {
  return (
    <div className="pt-32">
      <form className="flex px-28" onSubmit={(e) => e.preventDefault()}>
        <input className="w-[75%] border-2" type="text" />
        <button className="ml-2 w-[25%] rounded-md bg-red-600 p-2 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
