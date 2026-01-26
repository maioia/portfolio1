import { status } from "../../Data.jsx";

export default function Status() {
  return (
    <>
      {status.map(({ no, title }, index) => {
        return (
          <div className="status-box border " key={index}>
            <h3 className="statusNo">{no}</h3>
            <p className="status-title">{title}</p>
          </div>
        );
      })}
    </>
  );
}
