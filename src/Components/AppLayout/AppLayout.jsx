import { Outlet, useLocation, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading.jsx";
import { AnimatePresence, motion } from "framer-motion";

export default function AppLayout({ toggleTheme, theme }) {
  const location = useLocation();
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <>
      <main className="min-h-screen lg:grid lg:grid-cols-10 bg-[#FFF6F6]">
        <aside
          className={`${theme === "dark" ? "dark" : ""} lg:col-span-1 xs:hidden`}
        >
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </aside>
        {navigation.state === "loading" ? (
          <Loading />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              className="lg:col-span-9 col-span-10 bg-[#FFF6F6]"
              key={location.pathname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="min-h-screen">
                <Outlet />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </>
  );
}
