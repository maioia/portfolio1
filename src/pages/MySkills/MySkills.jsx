import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import skillsGirl from "../../assets/girlSkills.svg";
export default function MySkills() {
  return (
    <>
      <main className="container dark:bg-black text-white">
        <div className="title text-center">
          <span className="head-style text-[#DB1A1A">
            Skills and technologies
          </span>
          <p className="sub-head-style">
            Here are the technologies I've been working with recent :
          </p>
        </div>
        <section className="Skills-body lg:py-12">
          <div className="lg:grid lg:grid-cols-3">
            <div className="p-4 lg:text-3xl text-lg text-center text-[#DB1A1A] lg:flex font-semibold lg:items-center lg:justify-center">
              <span className="text-center">
                Proficiency
                <br />
                level
              </span>
            </div>

            <div>
              {" "}
              <ul className="space-y-4 mb-5">
                <ProgressBar />
              </ul>
            </div>

            <div>
              <img
                src={skillsGirl}
                alt="skills page img"
                className=" grid gird-cols-1 lg:grid-cols-[1fr-1.2fr] items-center gap-12 lg:max-w-3xl w-xs mx-auto"
              />
            </div>
          </div>
          <div className="skill-card">
            <ul className="grid lg:grid-cols-6 md:grid-cols-3 my-4">
              <SkillCard />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
