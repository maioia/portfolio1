import {
  faCircleXmark,
  faEllipsisVertical,
  faEnvelope,
  faFolderOpen,
  faHouse,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import Footer from "../Footer/Footer";

export default function Navbar() {
  return (
    <>
      {/* Main Navigation */}
      <aside className="flex flex-col items-center justify-between transition-all duration-300">
        <div>
          <Footer />
        </div>
        <nav className="container flex flex-col lg:justify-center items-center z-40">
          {/* toggle and close button */}
          <div className="md:hidden flex flex-col gap-2 items-center justify-center z-40 top-4 right-0">
            <button className="">
              <NavLink
                to={`/`}
                className={({ isActive }) => {
                  return `${
                    isActive ? " text-rose-900 p-2 text-2xl" : ""
                  } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                }}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </NavLink>
            </button>

            <button className="">
              <NavLink
                to={`/`}
                className={({ isActive }) => {
                  return `${
                    isActive ? "rounded-s-md bg-rose-900 p-2 text-white" : ""
                  } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                }}
              >
                <span>menu</span>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </NavLink>
            </button>
          </div>

          {/* main menu */}
          <aside>
            <ul className="hidden lg:block bg-yellow-300 flex flex-col justify-center items-center *:bg-[#16476A] space-y-3 *:p-2 lg:text-l">
              <li className="w-full rounded-s-lg h-1/2 p-3 text-white">
                <NavLink
                  to={`/`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-rose-300" : ""
                    } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                  }}
                >
                  <span className="">Home</span>
                  <FontAwesomeIcon icon={faHouse} />
                </NavLink>
              </li>
              <li className="w-full rounded-s-lg h-1/2 p-3 text-white">
                <NavLink
                  to={`about`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-rose-300" : ""
                    } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                  }}
                >
                  <span>About</span>
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>
              <li className="w-full rounded-s-lg h-1/2  p-3 text-white">
                <NavLink
                  to={`portfolio`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-rose-300" : ""
                    } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                  }}
                >
                  <span className="">Portfolio</span>
                  <FontAwesomeIcon icon={faFolderOpen} />
                </NavLink>
              </li>
              <li className="w-full rounded-s-lg h-1/2 bg-rose-900 p-3 text-white">
                <NavLink
                  to={`skills`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-rose-300" : ""
                    } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                  }}
                >
                  <span>skills</span>
                  <FontAwesomeIcon icon={faRectangleList} />
                </NavLink>
              </li>
              <li className="w-full rounded-s-lg h-1/2 bg-rose-900 p-3 text-white">
                <NavLink
                  to={`contact`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-rose-300" : ""
                    } flex gap-3 hover:text-rose-300 transition-colors duration-200`;
                  }}
                >
                  <span>Contact</span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
              </li>
            </ul>
          </aside>
        </nav>
      </aside>
    </>
  );
}
