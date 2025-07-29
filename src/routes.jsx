import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/Error.jsx";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const  routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <ErrorPage /> },
  // ...
];
const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
      { path: "movie/:id", element: <Movie /> },
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);
export default routes;
