import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import AppLayout from "./Components/AppLayout/AppLayout";
import NotFound from "./pages/NotFound/NotFound";
import MySkills from "./pages/MySkills/MySkills";
import ProjectsCard from "./Components/ProjectsCard/ProjectsCard";
import { useState } from "react";
import ThemeProvider from "./context/ThemeContext";
function App() {
  const [theme, setTheme] = useState("light");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          loader: () => delay(800),
          element: <Home />,
        },
        {
          path: "about",
          loader: () => delay(800),
          element: <About />,
        },
        {
          path: "portfolio",
          loader: () => delay(800),
          element: <Portfolio />,

          children: [
            {
              index: true,
              loader: () => redirect("featured"),
            },
            {
              path: "featured",
              element: <ProjectsCard />,
            },
            {
              path: "javascript",
              element: <h2>Vanilla javascript</h2>,
            },
            {
              path: "react",
              element: <h2>React.js</h2>,
            },
            {
              path: "next",
              element: <h2>NEXT.js</h2>,
            },
          ],
        },
        {
          path: "skills",
          loader: () => delay(800),
          element: <MySkills />,
        },
        {
          path: "contact",
          loader: () => delay(800),
          element: <Contact />,
        },
        {
          path: "*",
          loader: () => delay(800),
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
