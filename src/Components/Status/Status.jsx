import { faGears } from "@fortawesome/free-solid-svg-icons";
import { status } from "../../Data.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Status() {
  return (
    <>
      {status.map(({ no, title }, index) => {
        return (
          <div
            className="status-box border border-gray-300 grid grid-cols-1 place-items-center lg:grid-cols-3 p-5 m-4"
            key={index}
          >
            <h3 className="statusNo text-rose-900 lg:text-7xl">{no}</h3>
            <p className="status-title">{title}</p>
            <FontAwesomeIcon icon={faGears} beatFade size="2xl" />{" "}
          </div>
        );
      })}
    </>
  );
}
