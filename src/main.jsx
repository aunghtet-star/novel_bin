import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
