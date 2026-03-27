import { personalInfo } from "../../Data.jsx";

export default function PersonalInfo() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info-item text-sm lg:text-lg" key={index}>
            <span className="info-title p-3 text-[#2C687B]">{title}</span>
            <span className="info-description p-2">{description}</span>
          </li>
        );
      })}
    </>
  );
}
