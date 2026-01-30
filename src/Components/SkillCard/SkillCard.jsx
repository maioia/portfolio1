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
          <li className="px-4 border-rose-300 border rounded m-2" key={index}>
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              className="text-rose-900"
            />
            <span className="text-xl p-3 text-rose-900">{title}</span>
            <ul className="*:pb-2 space-y-2">
              <li className="">
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="me-1 text-gray-400"
                />
                {skill1}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="me-1 text-gray-400"
                  />
                  {skill2}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="me-1 text-gray-400"
                  />
                  {skill3}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="me-1 text-gray-400"
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
