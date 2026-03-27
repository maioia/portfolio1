import { NavLink, Outlet } from "react-router";
import portfolioGirl from "../../assets/girlProjects.svg";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Portfolio() {
  return (
    <main className="container lg:grid lg:grid-cols-12">
      <aside className="col-span-2">
        <section className="w-full lg:grid col-span-12 mx-auto self-center">
          <img src={portfolioGirl} alt="portfolio img" className="w-[60%] mx-auto py-3 lg:w-full max-w-3xl" />
        </section>
        <ul className="*:bg-[#2C687B] ">
          <li>
            <NavLink
              to="featured"
              className={({ isActive }) => {
                return `${isActive ? "bg-[#DB1A1A] text-[#FFF6F6]" : ""} w-full p-3 text-[#8CC7C4]`;
              }}
            >
              Featured projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="javascript"
              className={({ isActive }) => {
                return `${isActive ? "bg-[#DB1A1A] text-[#FFF6F6]" : ""} w-full p-3 text-[#8CC7C4]`;
              }}
            >
              Javascript projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="react"
              className={({ isActive }) => {
                return `${isActive ? "bg-[#DB1A1A] text-[#FFF6F6]" : ""} w-full p-3 text-[#8CC7C4]`;
              }}
            >
              react.js projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="next"
              className={({ isActive }) => {
                return `${isActive ? "bg-[#DB1A1A] text-[#FFF6F6]" : ""} w-full p-3 text-[#8CC7C4]`;
              }}
            >
              NEXT.js projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
        </ul>
      </aside>
      <div className="col-span-10">
        <h1 className="mx-auto self-center text-3xl head-style text-[#DB1A1A]">
          My portfolio projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 my-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
