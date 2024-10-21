import { useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.userReducer);

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
    <header className="flex justify-between bg-gradient-to-b from-black">
      <p className="ml-8 p-4 text-4xl text-red-500">ABCDFLIX</p>
      {user && (
        <div>
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
