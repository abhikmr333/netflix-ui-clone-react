import { createRoot } from "react-dom/client";
import "./style.css";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(<h1 className="text-red-700"> hello </h1>);
