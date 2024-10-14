import React, { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Error from "./pages/ErrorPage";
import AppLayout from "./AppLayout/AppLayout";
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Navigate to="/" />,
        },
        {
          path: "/",
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
