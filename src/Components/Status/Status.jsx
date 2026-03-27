import { faGears } from "@fortawesome/free-solid-svg-icons";
import { status } from "../../Data.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Status() {
  return (
    <>
      {status.map(({ no, title }, index) => {
        return (
          <div
            className="border border-gray-300 lg:grid grid-cols-1 place-items-center gap-3 lg:grid-cols-3 p-3 m-2"
            key={index}
          >
            <h3 className="text-[#DB1A1A] lg:text-2xl">{no}</h3>
            <p className="status-title text-sm">{title}</p>
            <FontAwesomeIcon icon={faGears} beatFade size="xl" />{" "}
          </div>
        );
      })}
    </>
  );
}
