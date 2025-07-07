import HomePage from "../features/home/pages/HomePage";
import InfoPage from "../features/home/pages/InfoPage";

const homeRoute = [
  { index: true, element: <HomePage /> },
  { path: "info/:id", element: <InfoPage /> },
];
export default homeRoute;
