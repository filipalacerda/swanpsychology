"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationalHeader = () => {
  const currentPath = usePathname();

  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hideNav = () => {
    setNav(false);
  };

  const navItems = [
    { id: 1, text: "About Me", href: "/about" },
    { id: 2, text: "Services", href: "/services" },
    { id: 3, text: "Appointments", href: "/appointments" },
    { id: 4, text: "Contact", href: "/contact" },
    { id: 5, text: "FAQs", href: "/faqs" },
  ];

  return (
    <div className="fixed left-0 right-0">
      <nav className="flex justify-between items-center h-24 mx-auto px-4 text-white font-roboto bg-[#ebded5]">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#151817]">
          <Link href="/">Swan Psychology</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 m-2 cursor-pointer text-[#151817] text-nowrap font-light ${
                currentPath === item.href && "underline"
              }`}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div className="block md:hidden text-[#151817]">
          {!nav && (
            <button onClick={handleNav}>
              <AiOutlineMenu size={20} aria-label="Open navigation menu" />
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ebded5] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="items-center flex">
            <h1
              className="w-full text-2xl font-bold text-[#151817] m-4"
              onClick={() => hideNav()}
            >
              <Link href="/">Swan Psychology</Link>
            </h1>

            <button onClick={handleNav} className="p-2.5 text-[#151817]">
              <AiOutlineClose size={20} aria-label="Close Navigation menu" />
            </button>
            <div className="blick md:hidden">{nav && <button></button>}</div>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 duration-300 hover:text-black cursor-pointer text-[#151817] font-light ${
                currentPath === item.href && "underline"
              }`}
              onClick={() => hideNav()}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationalHeader;
