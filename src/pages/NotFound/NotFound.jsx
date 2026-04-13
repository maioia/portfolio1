import { Link } from "react-router";
import notfoundGirl from "../../assets/notfoundGirl.svg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NotFound() {
  return (
    <>
      <section className="min-h-screen grid place-items-center px-6">
        <div className="grid gird-cols-1 lg:grid-cols-[1fr-1.2fr] items-center gap-12 max-w-3xl w-full">
          {/* img */}
          <div className="flex justify-center">
            <img
              src={notfoundGirl}
              alt="page not found"
              className="w-full max-w-md opacity-90"
            />
          </div>
          {/* content */}
          <div className="text-center lg:text-left space-y-5">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#DB1A1A]">
              404
            </h1>
            <p className="lg:text-lg text-[#DB1A1A] max-w-md mx-auto lg:mx-0">
              The page you’re looking for doesn’t exist or was moved. Let’s get
              you back somewhere useful.
            </p>
            <p className="lg:text-xl dark:text-[#FFF6F6]">
              Let’s navigate back to something better.{" "}
            </p>
            <Link to="/" className="">
              <span className="bg-[#2C687B] dark:bg-[#DB1A1A] border-2 border-[#FFF6F6] rounded-lg shadow-md px-3 py-2 my-4 text-[#FFF6F6] lg:text-md hover:bg-[#FFF6F6] hover:text-[#2C687B] transition-all duration-400 ease-in-out">
                Back to Home
                <FontAwesomeIcon icon={faHouse} className="ml-2"/>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
