import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
import PersonalInfo from "../../Components/PersonalInfo/PersonalInfo";
import Status from "../../Components/Status/Status";

export default function About() {
  return (
    <>
      <main className="container">
        <section className="about">
          <h2 className="section-title text-center lg:text-5xl text-center font-extrabold">
            About <span className="text-rose-900">Me</span>
          </h2>
          <div className="about-content flex gap-5 items-center">
            <div className="about-info">
              <h3 className="p-4 text-rose-900 text-2xl">personal infos</h3>
              <ul className="info-list">
                <PersonalInfo />
              </ul>
              <Link
                to="/public/pdf/MaiAhmedResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download My CV <FontAwesomeIcon icon={faFileArrowDown} />
              </Link>
            </div>
            <div className="about-status">
              <Status />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
