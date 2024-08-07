import ContactForm from "../components/contactForm";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="md:p-24 p-12 flex md:mt-20 mt-10 md:gap-20 gap-10 md:flex-row flex-col justify-between w-full">
      <div className="md:w-96">
        <h2 className="text-3xl font-bold md:w-96">Contact us</h2>

        <div>
          <ul className="font-light mt-10">
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline /> swanpsychology@proton.me
            </li>
            <li className="flex items-center gap-2">
              <CiPhone /> +44 7742 657545
            </li>
            <li className="flex items-center gap-2 mt-10">
              <a
                href=""
                aria-label="instagram account"
                className="mr-3"
                target="_blank"
              >
                <BsInstagram size={20} />
              </a>

              <a
                href=""
                aria-label="facebook account"
                className="mr-3"
                target="_blank"
              >
                <BsFacebook size={20} />
              </a>

              <a
                href=""
                aria-label="linkedin account"
                className="mr-3"
                target="_blank"
              >
                <BsLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-7/12">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
