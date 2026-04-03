import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import AppLayout from "./Components/AppLayout/AppLayout";
import NotFound from "./pages/NotFound/NotFound";
import MySkills from "./pages/MySkills/MySkills";
import { useState } from "react";
import ThemeProvider from "./context/ThemeContext";
import PortfolioCard from "./Components/PortfolioCard/PortfolioCard";
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
          element: <Portfolio />,

          children: [
            {
              index: true,
              loader: () => redirect("featured"),
            },
            {
              path: "featured",

              element: <PortfolioCard />,
            },
            {
              path: "javascript",

              element: <PortfolioCard />,
            },
            {
              path: "react",

              element: <PortfolioCard />,
            },
            {
              path: "next",

              element: <PortfolioCard />,
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
