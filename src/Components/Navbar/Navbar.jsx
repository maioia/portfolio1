import logo from "../../assets/maiAhmedRedLogo2.png";
import {
  faBars,
  faCircleXmark,
  faEnvelope,
  faFolderOpen,
  faHouse,
  faMoon,
  faRectangleList,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import Footer from "../Footer/Footer";
import {
  faGithub,
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Main Navigation */}
      <aside className=" flex h-full lg:bg-[#2C687B] dark:bg-[#132440] lg:flex-col items-center justify-evenly transition-all duration-300">
        <div className="flex items-center justify-between lg:justify-center">
          <img
            src={logo}
            alt="logo"
            className="lg:hidden lg:max-w-[60%] max-w-[40%] bg-[#FFF6F6] px-4 py-2 border border-[#FFF6F6] rounded-md "
          />
        </div>
        <section className=" hidden lg:flex lg:flex-col items-center justify-evenly text-center min-h-screen">
          {/* main menu */}
          <img
            src={logo}
            alt="logo"
            className="hidden lg:block lg:max-w-[60%] max-w-[40%] bg-[#FFF6F6] px-4 py-2 border border-[#FFF6F6] rounded-md "
          />
          <nav className="">
            <ul className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center space-y-1 *:p-2 lg:text-l border-t border-t-[#FFF6F6]/40 pt-5">
              <li className="w-full text-[#FFF6F6]">
                <NavLink
                  to={`/`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#8CC7C4]" : ""
                    } flex gap-3 hover:text-[#8CC7C4] transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="">Home</span>
                </NavLink>
              </li>
              <li className="w-full text-[#FFF6F6]">
                <NavLink
                  to={`about`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#8CC7C4]" : ""
                    } flex gap-3 hover:text-[#8CC7C4] transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>About</span>
                </NavLink>
              </li>
              <li className="w-full text-[#FFF6F6]">
                <NavLink
                  to={`portfolio`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#8CC7C4]" : ""
                    } flex gap-3 hover:text-[#8CC7C4] transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon icon={faFolderOpen} />
                  <span className="">Portfolio</span>
                </NavLink>
              </li>
              <li className="w-full text-[#FFF6F6]">
                <NavLink
                  to={`skills`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#8CC7C4]" : ""
                    } flex gap-3 hover:text-[#8CC7C4] transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon icon={faRectangleList} />
                  <span>skills</span>
                </NavLink>
              </li>
              <li className="w-full text-[#FFF6F6]">
                <NavLink
                  to={`contact`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#8CC7C4]" : ""
                    } flex gap-3 hover:text-[#8CC7C4] transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="social hidden lg:flex gap-4 items-center justify-center lg:text-2xl transition-all duration-200 border-t border-t-[#FFF6F6]/40 pt-10">
            <Link
              to="https://github.com/maioia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8CC7C4] hover:text-[#DB1A1A]"
            >
              <FontAwesomeIcon icon={faGithub} size="xs" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mai-ahmed-a7437142"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8CC7C4] hover:text-[#DB1A1A]"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xs" />
            </Link>

            <Link
              to="https://www.behance.net/My_Gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8CC7C4] hover:text-[#DB1A1A]"
            >
              <FontAwesomeIcon icon={faSquareBehance} size="xs" />
            </Link>
          </div>

          <button
            type="text"
            className=""
            // className={({ isActive }) => {
            //   return `${
            //     isActive ? " bg-[#8CC7C4] rounded-full" : ""
            //   } hover:text-[#DB1A1A] transition-all duration-200`;
            // }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <FontAwesomeIcon
                icon={faMoon}
                size="xl"
                className="text-[#8CC7C4]"
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                size="xl"
                className="text-[#FCBF49]"
              />
            )}
          </button>

          <span className="text-[10px] w-30 text-[#FFF6F6]/60">
            All Copy Rights &copy; reserved to Mai Ahmed 2026
          </span>
        </section>

        {/* toggle and close button */}
        <button className="lg:hidden p-3" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="lg:hidden btn bg-[#2C687B] text-[#FFF6F6]"
          />
        </button>
        {isMenuOpen && (
          <>
            <div
              className=" background fixed cursor-pointer inset-0 bg-black/50 z-30"
              onClick={toggleMenu}
            ></div>
            <div className=" offcanvas fixed z-40 space-y-5 bg-[#2C687B] top-0 left-0 bottom-0 p-5 animate-slideIn dark:bg-gray-800">
              <div className="flex justify-between items-center border-b border-[#FFF6F6]/40 pb-7">
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-[60%] bg-[#FFF6F6] px-4 py-2 border border-[#FFF6F6] rounded-md"
                />
                <button className=" animate-pulse cursor-pointer">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size="xl"
                    className="text-[#FFF6F6]"
                    onClick={toggleMenu}
                  />
                </button>
              </div>
              <div>
                <ul className=" flex flex-col justify-center items-center space-y-3 *:p-2 lg:text-l  border-b border-[#FFF6F6]/40 pb-7">
                  <li
                    className="w-full rounded-s-lg h-1/2 p-3 text-[#FFF6F6]"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to={`/`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[#FFF6F6] bg-[#DB1A1A] px-2 py-2"
                            : ""
                        } flex gap-3 hover:text-[#8CC7C4] transition-all duration-200`;
                      }}
                    >
                      <FontAwesomeIcon icon={faHouse} />
                      <span className="">Home</span>
                    </NavLink>
                  </li>
                  <li
                    className="w-full rounded-s-lg h-1/2 p-3 text-[#FFF6F6]"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to={`about`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[#FFF6F6] bg-[#DB1A1A] px-2 py-2"
                            : ""
                        } flex gap-3 hover:text-[#8CC7C4] transition-all duration-200`;
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li
                    className="w-full rounded-s-lg h-1/2  p-3 text-[#FFF6F6]"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to={`portfolio`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[#FFF6F6] bg-[#DB1A1A] px-2 py-2"
                            : ""
                        } flex gap-3 hover:text-[#8CC7C4] transition-all duration-200`;
                      }}
                    >
                      <FontAwesomeIcon icon={faFolderOpen} />
                      <span className="">Portfolio</span>
                    </NavLink>
                  </li>
                  <li
                    className="w-full rounded-s-lg h-1/2  p-3 text-[#FFF6F6]"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to={`skills`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[#FFF6F6] bg-[#DB1A1A] px-2 py-2"
                            : ""
                        } flex gap-3 hover:text-[#8CC7C4] transition-all duration-200`;
                      }}
                    >
                      <FontAwesomeIcon icon={faRectangleList} />
                      <span>skills</span>
                    </NavLink>
                  </li>
                  <li
                    className="w-full rounded-s-lg h-1/2  p-3 text-[#FFF6F6]"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to={`contact`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[#FFF6F6] bg-[#DB1A1A] px-2 py-2"
                            : ""
                        } flex gap-3 hover:text-[#FFF6F6] transition-all duration-200`;
                      }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>Contact</span>
                    </NavLink>
                  </li>
                  <li>
                    <button
                      type="text"
                      className=""
                      // className={({ isActive }) => {
                      //   return `${
                      //     isActive ? " bg-[#8CC7C4] rounded-full" : ""
                      //   } hover:text-[#DB1A1A] transition-all duration-200`;
                      // }}
                      onClick={toggleTheme}
                    >
                      {theme === "dark" ? (
                        <FontAwesomeIcon
                          icon={faMoon}
                          size="xl"
                          className="text-[#8CC7C4]"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faSun}
                          size="xl"
                          className="text-[#FCBF49]"
                        />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="social flex gap-4 items-center justify-center lg:text-2xl transition-all duration-200">
                <Link
                  to="https://github.com/maioia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8CC7C4] hover:text-[#DB1A1A]"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/mai-ahmed-a7437142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8CC7C4] hover:text-[#DB1A1A]"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </Link>

                <Link
                  to="https://www.behance.net/My_Gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8CC7C4] hover:text-[#DB1A1A]"
                >
                  <FontAwesomeIcon icon={faSquareBehance} size="xl" />
                </Link>
              </div>
              <span className="text-xs text-[#FFF6F6]/60">
                All Copy Rights &copy; reserved to Mai Ahmed 2026
              </span>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
