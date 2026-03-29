import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Loading from "../Loading/Loading";
export default function AppLayout({ toggleTheme, theme }) {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="lg:grid lg:grid-cols-10 bg-[#FFF6F6]">
        <aside
          className={`${theme === "dark" ? "dark" : ""} lg:col-span-1 xs:hidden`}
        >
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </aside>
        <div className="lg:col-span-9 col-span-10 bg-[#FFF6F6]">
          <Outlet />
        </div>
      </main>
    </>
  );
}
