import {
  AbortedDeferredError,
  createBrowserRouter,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config.js";
import { useEffect } from "react";
import { addUser, removeUser } from "./redux/features/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const App = () => {
  //applying bg image using conditional styling if we are on path / or signup
  const path = useLocation().pathname;
  const isAuthRoute = path === "/" || path === "/signup";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //adding an observer once -> onAuthStateChanged -> detects signup/signin and signout so certain actions can be performed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className={isAuthRoute ? "bg-loginPage" : ""}>
      <Header />
      <Outlet />
    </div>
  );
};

//creating routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <SignIn /> },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

//exporting appRouter to index.js to separate rendering logic from routing logic
export { appRouter };
