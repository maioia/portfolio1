import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Profile from "../../assets/girl1.svg";
import {
  faGithub,
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <>
      <main className="">
        <section className="flex lg:flex-row flex-col gap-2 justify-center items-center lg:py-20">
          <div className="home-img ">
            <img
              src={Profile}
              alt="Profile-img"
              className="w-[60%] mx-auto lg:rounded-3xl rounded-b-xl"
            />
          </div>
          <div className="lg:p-5 lg:space-y-8 relative before:absolute lg:before:left-3 lg:before:w-[40px] before:w-[30px] before:h-[4px] before:rounded-xl before:bg-rose-900 lg:before:top-[17%] before:top-[3%]">
            <h1 className="home-title pl-10 lg:text-6xl font-bold text-rose-900">
              I'm A <span>Mai Ahmed</span>
            </h1>
            <div className="space-y-7">
              <p className="heading-description lg:text-3xl font-semibold">
                I build things for the web. 👩‍💻
              </p>
              <p className="home-description lg:text-xl md:text-lg lg:leading-12 lg:w-xl">
                I'm a frontend developer specializing in building exceptional
                digital experiences. Currently focused on creating accessible,
                performant, and beautiful web applications. I have an eye for
                details and can utilize innovative skills in designing.
              </p>
            </div>
            <div className="flex justify-evenly items-center gap-3">
              <Link
                to="/about"
                className="bg-rose-300 border-2 border-white rounded-lg shadow-md px-3 py-2 my-4 hover:bg-rose-900 hover:text-white transition-all duration-400 ease-in-out"
              >
                <span className="lg:p-2 text-sm p-1 lg:text-sm">
                  More About Me
                </span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </Link>
              <div className="social flex gap-4 items-center justify-center text-gray-400 lg:text-2xl">
                <Link
                  to="https://github.com/maioia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-900"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/mai-ahmed-a7437142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-900"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>

                <Link
                  to="https://www.behance.net/My_Gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-900"
                >
                  <FontAwesomeIcon icon={faSquareBehance} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
