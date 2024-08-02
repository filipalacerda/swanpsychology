"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentPath = usePathname();

  return (
    <footer className="bg-red text-white p-5 font-light text-sm flex justify-between">
      <section>
        <ul>
          <li className="mb-2">
            <Link
              href="/privacy-policy"
              className={`${currentPath === "/privacy-policy" && "underline"}`}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms-service"
              className={`${currentPath === "/terms-service" && "underline"}`}
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex items-center">
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
      </section>
    </footer>
  );
};

export default Footer;
