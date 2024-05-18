import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayoutWrapper from "@/pages/LayoutWrapper";
import About from "pages/About/About";
import Bootcamp from "pages/Bootcamp/Bootcamp";
import Contact from "pages/Contact/Contact";
import Home from "pages/Home/Home";
import Resources from "pages/Resources/Resources";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper ComponentPage={Home} />,
  },
  {
    path: "/about",
    element: <LayoutWrapper ComponentPage={About} />,
  },
  {
    path: "/contact",
    element: <LayoutWrapper ComponentPage={Contact} />,
  },
  {
    path: "/bootcamp",
    element: <LayoutWrapper ComponentPage={Bootcamp} />,
  },
  {
    path: "/resources",
    element: <LayoutWrapper ComponentPage={Resources} />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
