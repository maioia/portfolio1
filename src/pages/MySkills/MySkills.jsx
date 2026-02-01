import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import skillsGirl from "../../assets/girlSkills.svg";
export default function MySkills() {
  return (
    <>
      <main className="container">
        <div className="title text-center">
          <span className="head-style text-rose-900">
            Skills and technologies
          </span>
          <p className="sub-head-style">
            Here are the technologies I've been working with recent :
          </p>
        </div>
        <section className="Skills-body">
          <div className="skill-card">
            <ul className="grid lg:grid-cols-3 my-4">
              <SkillCard />
            </ul>
          </div>
          <div className="proficiency-level grid lg:grid-cols-3 place-items-center">
            <div>
              <img
                src={skillsGirl}
                alt="skills page img"
                className="grid gird-cols-1 lg:grid-cols-[1fr-1.2fr] items-center gap-12 max-w-3xl w-full"
              />
            </div>
            <div className="p-4 lg:text-3xl text-rose-900 flex font-semibold">
              <span className="text-center">
                Proficiency
                <br />
                level
              </span>
            </div>

            <ul className="space-y-4">
              <ProgressBar />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
