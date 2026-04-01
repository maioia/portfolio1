import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import contactGirl from "../../assets/girlContact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Contact() {
  const scehma = yup.object({
    name: yup
      .string()
      .trim()
      .required("name is required")
      .matches(/^[A-Za-z\u0600-\u06FF\s]+$/, "name must contain only letters")
      .min(3, "name must be at least 3 letters")
      .max(20, "name must be less than 20 letters"),

    email: yup
      .string()
      .required("email is required")
      .email("Enter a valid Email"),
    phone: yup
      .string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "enter valid egyptian phone number"),
    subject: yup
      .string()
      .required("write your subject min 3 letters")
      .min(3, "minimum 3 letters")
      .max(50, "maximum of 50 letter"),
    message: yup
      .string()
      .required("write your message min 10 letters")
      .min(10, "minimum 10 letters")
      .max(200, "maximum of 200 letter"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", subject: "", message: "" },
    validationSchema: scehma,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
              <p className="dark:text-[#FFF6F6] lg:text-lg text-sm lg:leading-10 leading-6 lg:col-span-8 text-gray-700 col-span-12">
                I am currently looking for new opportunities and my inbox is
                always open. Whether you have a question, a project idea, or
                just want to say hi, I'll try to get back to you!
              </p>
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="*:dark:placeholder-[#FFF6F6] p-4 border lg:col-span-5 border-[#8CC7C4] dark:bg-[#132440] bg-[#2C687B] rounded-md my-4 text-xs lg:text-lg"
          >
            <div className="*:text-sm *:p-3 *:border *:border-gray-300 dark:*:bg-black *:bg-rose-50 *:rounded-md  space-y-4 ">
              <div className="name">
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  autoComplete="off"
                  className="focus:outline-none"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="bg-red-300 text-red-800 py-1 px-2 rounded-md mt-2 font-medium">
                    *{formik.errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="email"
                  className="focus:outline-none"
                  name="email"
                  placeholder="your e-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="bg-red-300 text-red-800 py-1 px-2 rounded-md mt-2 font-medium">
                    *{formik.errors.email}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="tel"
                  className="focus:outline-none"
                  name="phone"
                  placeholder="+02 01284 528 321"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <p className="bg-red-300 text-red-800 py-1 px-2 rounded-md mt-2 font-medium">
                    *{formik.errors.phone}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="text"
                  className="focus:outline-none"
                  name="subject"
                  placeholder="message subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.subject && formik.touched.subject ? (
                  <p className="bg-red-300 text-red-800 py-1 px-2 rounded-md mt-2 font-medium">
                    *{formik.errors.subject}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <textarea
                  placeholder="write what you think now"
                  className="w-full focus:outline-none"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.errors.message && formik.touched.message ? (
                  <p className="bg-red-300 text-red-800 py-1 px-2 rounded-md mt-2 font-medium">
                    *{formik.errors.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="btn text-xs lg:text-lg border border-sx border-white/80"
              >
                Send <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 flex flex-col items-center gap-3">
          <span className=" text-xs lg:text-lg text-[#2C687B] dark:text-[#FFF6F6]">
            or simply
          </span>
          <button
            type="submit"
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
