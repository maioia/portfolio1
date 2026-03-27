import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Loading from "../Loading/Loading";
export default function AppLayout() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="lg:grid lg:grid-cols-10 bg-[#FFF6F6]">
        <aside className="lg:col-span-1 xs:hidden">
          <Navbar />
        </aside>
        <div className="lg:col-span-9 col-span-10 bg-[#FFF6F6]">
          <Outlet />
        </div>
      </main>
    </>
  );
}
