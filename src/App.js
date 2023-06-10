import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Browse from "./pages/Browse";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Browse /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
