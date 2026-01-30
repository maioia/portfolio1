import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Profile from "../../assets/girl1.jpg";
export default function Home() {
  return (
    <>
      <main className="container">
        <section className="home-section flex lg:flex-row flex-col gap-2 justify-center items-center min-h-screen">
          <div className="home-img z-30">
            <img
              src={Profile}
              alt="Profile-img"
              className="home-img w-[80%] mx-auto lg:rounded-3xl rounded-b-xl"
            />
          </div>
          <div className="home-text lg:p-5 space-y-4 relative before:absolute lg:before:left-3 lg:before:w-[40px] before:w-[30px] before:h-[4px] before:rounded-xl before:bg-rose-900 lg:before:top-[17%] before:top-[3%]">
            <h1 className="home-title pl-10 lg:text-6xl font-bold text-rose-900">
              I'm A <span>Mai Ahmed</span>
            </h1>
            <div className="space-y-5">
              <p className="heading-description lg:text-3xl font-semibold">
                I build things for the web. 👩‍💻
              </p>
              <p className="home-description lg:text-xl md:text-lg leading-7 lg:w-xl">
                I'm a frontend developer specializing in building exceptional
                digital experiences. Currently focused on creating accessible,
                performant, and beautiful web applications. I am Frontend
                Developer specializing in SPA web applications. I have an eye
                for detail and can utilize innovative skills in designing.
              </p>
            </div>
            <Link
              to="/about"
              className="bg-rose-300 rounded-lg px-3 hover:bg-rose-900 hover:text-white transition-all duration-400 ease-in-out"
            >
              <span className="lg:p-2 text-sm p-1 lg:text-xl">
                More About Me
              </span>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
          </div>

          <div className="hidden lg:block color-block lg:fixed lg:w-1/4 -left-[5%] top-[-12%] h-[150%] bg-rose-900 -rotate-16"></div>
        </section>
      </main>
    </>
  );
}
