import { useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";
import { switchPage } from "../redux/features/gptSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGptView = useSelector((store) => store.gpt.view);
  const dispatch = useDispatch();

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const switchView = () => {
    dispatch(switchPage());
  };

  return (
    <header className="absolute flex w-screen justify-between bg-gradient-to-b from-black">
      <p className="relative z-10 ml-8 p-4 text-4xl text-red-500">ABCDFLIX</p>
      {user && (
        <div className="flex w-48 items-center justify-between">
          <button
            onClick={switchView}
            className="z-10 h-8 rounded-md bg-purple-600 px-2 text-white"
          >
            {isGptView ? "Browse Page" : "Gpt Search"}
          </button>
          <div className="mr-6 flex flex-col">
            <img
              className="h-10 w-10 rounded"
              src={user.photoURL}
              alt="userprofile"
            />
            <button
              onClick={logout}
              className="relative z-10 h-6 rounded bg-transparent font-semibold text-red-600"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
