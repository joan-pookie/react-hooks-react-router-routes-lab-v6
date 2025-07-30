import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import appRoutes from "./appRoutes.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <><NavBar /><Outlet /></>,
      children: appRoutes,
      errorElement: <div>Error occurred</div>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
