import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { appRouter } from "./App";
import "./style.css";

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);

root.render(<RouterProvider router={appRouter} />);
