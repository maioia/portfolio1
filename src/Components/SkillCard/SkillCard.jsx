import {
  faCircle,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SkillCard() {
  return (
    <>
      {skills.map(({ title, skill1, skill2, skill3, skill4 }, index) => {
        return (
          <li className="px-4 border-gray-300 border rounded m-2" key={index}>
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              className="text-[#DB1A1A]"
            />
            <span className="text-lg p-3 text-[#2C687B]">{title}</span>
            <ul className="*:pb-2 space-y-2 *:text-sm">
              <li className="">
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="me-1 text-[#2C687B]"
                />
                {skill1}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="me-1 text-[#2C687B]"
                  />
                  {skill2}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="me-1 text-[#2C687B]"
                  />
                  {skill3}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="me-1 text-[#2C687B]"
                  />
                  {skill4}
                </span>
              </li>
            </ul>
          </li>
        );
      })}
    </>
  );
}
