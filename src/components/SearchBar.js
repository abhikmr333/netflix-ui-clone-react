import { GoogleGenerativeAI } from "@google/generative-ai";
import { geminiApiKey } from "../utils/geminiApiKey";
import { useRef } from "react";
import { addSuggestedMovies } from "../redux/features/gptSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const searchQuery = useRef(null);
  const dispatch = useDispatch();

  const searchPrompt = () => {
    const { value } = searchQuery.current;
    suggestMovies(value);
  };
  const suggestMovies = async (query) => {
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Recommend me 5 ${query} movies only names separated by commas and no whitespace before or after comma(act as a movie recommendation system)`;
      const result = await model.generateContent(prompt);
      const gptResult = result.response.text();

      dispatch(addSuggestedMovies(gptResult));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="pt-32">
      <form className="flex px-28" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchQuery} className="w-[75%] border-2" type="text" />
        <button
          onClick={searchPrompt}
          className="ml-2 w-[25%] rounded-md bg-red-600 p-2 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
