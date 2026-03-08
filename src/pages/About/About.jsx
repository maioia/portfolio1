import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import PersonalInfo from "../../Components/PersonalInfo/PersonalInfo";
import Status from "../../Components/Status/Status";
import aboutGirl from "../../assets/girlPortfolio.svg";
export default function About() {
  return (
    <>
      <main className="container">
        <section className="about">
          <h1 className="section-title head-style">
            About <span className="text-rose-900">Me</span>
          </h1>
          <div className="">
            <div className="flex">
              <div className="mx-auto">
                <img
                  src={aboutGirl}
                  alt="about page img"
                  className="max-w-xl w-full"
                />
              </div>
              <div className="info">
                <h3 className="p-4 text-rose-900 text-3xl">personal infos</h3>
                <ul className="">
                  <PersonalInfo />
                </ul>
                <Link
                  to="/public/pdf/MaiAhmedResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-300 border-2 border-white rounded-lg shadow-md px-3 py-2 my-4 lg:text-md hover:bg-rose-900 hover:text-white transition-all duration-400 ease-in-out"
                >
                  Download My CV <FontAwesomeIcon icon={faFileArrowDown} />
                </Link>
              </div>
            </div>
            <div className="about-status flex py-4">
              <Status />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
