import Home from "../pages/Home";
import Actors from "../pages/Actors";
import Directors from "../pages/Directors";
import Movie from "../pages/Movie";
import ErrorPage from "../pages/Error";

// Define routes as in the lab spec
export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "actors",
    element: <Actors />,
  },
  {
    path: "directors",
    element: <Directors />,
  },
  {
    path: "movie/:id",
    element: <Movie />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

