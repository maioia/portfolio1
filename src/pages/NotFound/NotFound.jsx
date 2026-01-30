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
            <h1 className="text-5xl lg:text-6xl font-extrabold text-rose-900">
              404
            </h1>
            <p className="text-lg text-rose-700 max-w-md mx-auto lg:mx-0">
              The page you’re looking for doesn’t exist or was moved. Let’s get
              you back somewhere useful.
            </p>
            <p className="text-xl">Let’s navigate back to something better. </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 mt-4 rounded-xl bg-rose-300 px-6 py-3 font-medium text-rose-900 shadow-md hover-bg-rose-900 hover:text-white transition-all duration-300"
            >
              <span className="lg:p-2 text-sm p-1 lg:text-xl">
                Back to Home
              </span>
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
