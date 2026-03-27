import { levels } from "../../Data.jsx";
export default function ProgressBar() {
  return (
    <>
      {levels.map(({ skillName, level }) => {
        return (
          <li key={skillName} className="">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className=" lg:font-medium text-xs">{skillName}</span>
                <span className="font-medium text-star text-xs">
                  {level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gray-400 h-2 rounded-full"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
