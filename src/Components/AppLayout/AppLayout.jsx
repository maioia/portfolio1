import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function AppLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <main className="grid grid-cols-10 bg-green-400">
        <aside className="lg:col-span-1">
          <Navbar />
        </aside>
        <div className="lg:col-span-9 bg-[#3B9797]">
          <Outlet />
        </div>
        {/* <div className="lg:col-span-1  bg-[#16476A]">
          <Footer />
        </div> */}
      </main>
    </>
  );
}
