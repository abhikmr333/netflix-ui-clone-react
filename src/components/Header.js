import { useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <header className="absolute flex w-screen justify-between bg-gradient-to-b from-black">
      <p className="relative z-10 ml-8 p-4 text-4xl text-red-500">ABCDFLIX</p>
      {user && (
        <div className="">
          <img
            className="h-10 w-10 rounded"
            src={user.photoURL}
            alt="userprofile"
          />
          <button
            onClick={logout}
            className="h-6 rounded bg-transparent font-semibold text-red-600"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
