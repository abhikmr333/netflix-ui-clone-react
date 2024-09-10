import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
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
