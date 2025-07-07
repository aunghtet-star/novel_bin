import ReadingPage from "../features/reading/pages/ReadingPage";

const readingRoute = [
  {
    path: "info/:novelId/reading/:chapterId",
    element: <ReadingPage />,
  },
];

export default readingRoute;
