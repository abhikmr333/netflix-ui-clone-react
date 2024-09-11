import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";

const App = () => {
  //applying bg image using conditional styling if we are on path / or signup
  const path = useLocation().pathname;
  const isAuthRoute = path === "/" || path === "/signup";

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
