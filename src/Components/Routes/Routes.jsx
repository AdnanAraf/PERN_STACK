import React from "react";
import Navbar from "../Navbar/Navbar";
import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Main from "../Main/Main";
import Elements from "../Elements/Elements";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default Routes;
