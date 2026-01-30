import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import SkillCard from "../../Components/SkillCard/SkillCard";
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
          <div className="proficiency-level grid lg:grid-cols-4">
            <div className="p-4 lg:text-3xl text-rose-900 flex items-center text-center font-semibold">
              <span>Proficiency level</span>
            </div>
            <ul className="space-y-4 col-span-2">
              <ProgressBar />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
