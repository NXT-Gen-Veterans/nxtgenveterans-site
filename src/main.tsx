import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.tsx";
import About from "pages/About.tsx";
import Bootcamp from "./pages/Bootcamp.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import Resources from "./pages/Resources.tsx";


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
