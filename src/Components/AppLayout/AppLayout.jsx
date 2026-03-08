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
      <div className="flex justify-between items-center">
        <div className="">
          <Outlet />
        </div>
        <div className="">
          <Navbar />
        </div>
      </div>
      <Footer />
    </>
  );
}
