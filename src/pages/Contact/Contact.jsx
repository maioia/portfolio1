import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import contactGirl from "../../assets/girlContact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <section className="container max-w-4xl">
        <h1 className="head-style text-rose-900">get in touch</h1>
        <section className="grid grid-cols-12">
          <p className="text-lg self-center leading-10 col-span-8">
            I am currently looking for new opportunities and my inbox is always
            open. Whether you have a question, a project idea, or just want to
            say hi, I'll try to get back to you!
          </p>
          <div className="col-span-4 ">
            <img src={contactGirl} alt="contact girl img" className="w-full" />
          </div>
        </section>

        <form className="p-4 border border-gray-300 rounded-md my-4 space-y-4 *:p-3 *:border *:border-gray-300 *:bg-rose-50 *:rounded-md ">
          <div className="name">
            <input
              type="text"
              placeholder="your name"
              className="gr-green-200"
            />
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
            <textarea placeholder="write what you think now"></textarea>
          </div>
          <button type="" className="btn">
            Send
          </button>
        </form>

        <div className="m-4 flex flex-col gap-3 justify-center items-center">
          <span className="text-lg">or simply</span>
          <button type="" className="btn flex gap-3 items-center text-lg">
            Say hello <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </section>
    </>
  );
}
