import { personalInfo } from "../../Data.jsx";

export default function PersonalInfo() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info-item text-lg" key={index}>
            <span className="info-title p-3 text-rose-700">{title}</span>
            <span className="info-description p-2">{description}</span>
          </li>
        );
      })}
    </>
  );
}
