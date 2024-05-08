import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "pages/Layout.tsx";
import About from "pages/About/About";
import Bootcamp from "pages/Bootcamp/Bootcamp";
import Contact from "pages/Contact/Contact";
import Home from "pages/Home/Home";
import Resources from "pages/Resources/Resources";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "bootcamp",
        element: <Bootcamp />
      },
      {
        path: "resources",
        element: <Resources />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
