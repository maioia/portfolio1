import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import contactGirl from "../../assets/girlContact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

export default function Contact() {
  return (
    <>
      <main className="container dark:bg-black dark:text-white">
        <h1 className="head-style text-[#DB1A1A]">get in touch</h1>
        <div className="lg:grid lg:grid-cols-12 gap-4">
          <div className="col-span-6 col-start-2">
            <img
              src={contactGirl}
              alt="contact girl img"
              className="w-xs max-w-3xl py-3"
            />
            <div className="">
              <p className="lg:text-lg text-sm lg:leading-10 leading-6 lg:col-span-8 text-gray-700 col-span-12">
                I am currently looking for new opportunities and my inbox is
                always open. Whether you have a question, a project idea, or
                just want to say hi, I'll try to get back to you!
              </p>
            </div>
          </div>

          <form className="*:text-sm p-4 border lg:col-span-5 border-[#8CC7C4] bg-[#2C687B] rounded-md my-4 space-y-4 *:p-3 *:border *:border-gray-300 *:bg-rose-50 *:rounded-md  text-xs lg:text-lg">
            <div className="name">
              <input type="text" placeholder="your name" className="" />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="your e-mail"
              />
            </div>
            <div>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="+02 01284 528 321"
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="message subject"
              />
            </div>
            <div>
              <textarea
                placeholder="write what you think now"
                className="w-full"
                name="message"
              ></textarea>
            </div>
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-xs lg:text-lg"
            >
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </Link>
          </form>
        </div>

        <div className="m-4 flex flex-col gap-3 justify-center items-center">
          <span className=" text-xs lg:text-lg text-[#2C687B]">or simply</span>
          <button
            type="button"
            className="btn flex gap-3 items-center text-xs lg:text-lg"
          >
            Say hello <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <div className="social flex gap-4 items-center justify-center text-gray-500 lg:text-2xl">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareBehance} />
          </div>

          <div className="social flex gap-4 items-center justify-center text-[#2C687B] lg:text-sm text-xs">
            <span>React .</span>
            <span>Tailwind css .</span>
            <span>. Javascript</span>
          </div>
        </div>
      </main>
    </>
  );
}
