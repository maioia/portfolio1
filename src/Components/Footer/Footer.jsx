import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <>
      <main className="container flex justify-end items-end gap-x-2 fixed inset-y-0 right-0 ">
        <FontAwesomeIcon
          icon={faMoon}
          className="lg:text-md px-2 lg:px-5 py-1 lg:py-2 rounded-t-lg bg-rose-900 text-rose-300"
        />
        <FontAwesomeIcon
          icon={faSun}
          className="lg:text-md px-2 lg:px-5 py-1 lg:py-2 rounded-t-lg bg-rose-900 text-rose-300"
        />

        <span className="lg:text-md text-xs px-2 lg:px-5 py-1 lg:py-2 rounded-t-lg bg-rose-900 text-rose-300">
          All Copy Rights &copy; reserved to Mai Ahmed 2026
        </span>
      </main>
    </>
  );
}
