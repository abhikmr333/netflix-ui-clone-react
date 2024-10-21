import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { appRouter } from "./App";
import "./style.css";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
);
