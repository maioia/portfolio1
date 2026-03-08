import { NavLink, Outlet } from "react-router";
import portfolioGirl from "../../assets/girlProjects.svg";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Portfolio() {
  return (
    <main className="container grid grid-cols-12 my-8">
      <aside className="col-span-2">
        <section className="w-[100%] grid col-span-12 mx-auto self-center">
          <img src={portfolioGirl} alt="portfolio img" className="w-full" />
        </section>
        <ul className="*:bg-rose-300 ">
          <li>
            <NavLink
              to="featured"
              className={({ isActive }) => {
                return `${isActive ? "bg-rose-900 text-rose-50" : ""} w-full p-3`;
              }}
            >
              Featured projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="javascript"
              className={({ isActive }) => {
                return `${isActive ? "bg-rose-900 text-rose-50" : ""} w-full p-3`;
              }}
            >
              Javascript projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="react"
              className={({ isActive }) => {
                return `${isActive ? "bg-rose-900 text-rose-50" : ""} w-full p-3`;
              }}
            >
              react.js projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="next"
              className={({ isActive }) => {
                return `${isActive ? "bg-rose-900 text-rose-50" : ""} w-full p-3`;
              }}
            >
              NEXT.js projects <FontAwesomeIcon icon={faCaretRight} />
            </NavLink>
          </li>
        </ul>
      </aside>
      <div className="col-span-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 my-4">
          <h1 className="mx-auto self-center text-3xl head-style text-rose-900">
            My portfolio projects
          </h1>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
