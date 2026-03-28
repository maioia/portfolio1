import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import AppLayout from "./Components/AppLayout/AppLayout";
import NotFound from "./pages/NotFound/NotFound";
import MySkills from "./pages/MySkills/MySkills";
import ProjectsCard from "./Components/ProjectsCard/ProjectsCard";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout toggleTheme={toggleTheme} theme={theme} />,
      children: [
        {
          index: true,
          element: <Home toggleTheme={toggleTheme} theme={theme} />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
          children: [
            {
              index: true,
              element: <Navigate to={`featured`} replace />,
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
          element: <MySkills />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
