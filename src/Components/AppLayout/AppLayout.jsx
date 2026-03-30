import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { AnimatePresence, motion } from "framer-motion";

export default function AppLayout({ toggleTheme, theme }) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  return (
    <>
      <main className="lg:grid lg:grid-cols-10 bg-[#FFF6F6]">
        <aside
          className={`${theme === "dark" ? "dark" : ""} lg:col-span-1 xs:hidden`}
        >
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </aside>
        <AnimatePresence mode="wait">
          <motion.div
            className="lg:col-span-9 col-span-10 bg-[#FFF6F6]"
            key={location.pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
