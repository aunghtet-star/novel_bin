import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/pages/PublicLayout";
import authRoute from "./authRoute.jsx";
import homeRoute from "./homeRoute.jsx";
import readingRoute from "./readingRoute.jsx";
import profileRoute from "./profileRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...homeRoute, ...profileRoute],
  },
  ...authRoute,
  ...readingRoute,
]);

export default router;
