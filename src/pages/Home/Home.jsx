import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Profile from "../../assets/girl1.svg";
import {
  faGithub,
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
export default function Home({ toggleTheme }) {
  return (
    <>
      <main className="px-7 dark:bg-gray-800 dark:text-white">
        <section className="lg:flex lg:flex-row flex-col justify-evenly items-center min-h-screen">
          <div className="">
            <img
              src={Profile}
              alt="Profile-img"
              className="w-md mx-auto bg-[#FFF6F6] lg:rounded-3xl rounded-b-xl"
            />
          </div>
          <div className="lg:p-5 lg:space-y-8 relative before:absolute lg:before:left-3 lg:before:w-[40px] before:w-[30px] before:h-[4px] before:rounded-xl before:bg-[#DB1A1A] lg:before:top-[17%] before:top-[3%]">
            <h1 className="home-title pl-10 lg:text-6xl font-bold text-[#DB1A1A]">
              I'm A <span>Mai Ahmed</span>
            </h1>
            <div className="space-y-2 lg:space-y-7">
              <p className="heading lg:text-3xl font-semibold">
                I build things for the web. 👩‍💻
              </p>
              <p className="lg:text-xl text-xs md:text-lg lg:leading-12 lg:w-xl">
                I'm a frontend developer specializing in building exceptional
                digital experiences. Currently focused on creating accessible,
                performant, and beautiful web applications. I have an eye for
                details and can utilize innovative skills in designing.
              </p>
            </div>
            <div className="flex justify-evenly items-center gap-3">
              <Link to="/about" className="">
                <span className="bg-[#2C687B] border-2 border-[#FFF6F6] rounded-lg shadow-md px-2 py-3 text-[#FFF6F6] lg:text-md hover:bg-[#FFF6F6] hover:text-[#2C687B] transition-all duration-400 ease-in-out">
                  More About Me
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                </span>
              </Link>
              <div className="social flex gap-4 items-center justify-center lg:text-2xl">
                <Link
                  to="https://github.com/maioia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#DB1A1A]"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/mai-ahmed-a7437142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#DB1A1A]"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>

                <Link
                  to="https://www.behance.net/My_Gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#DB1A1A]"
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
