"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const NavigationalHeader = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About Me", href: "/about" },
    { id: 2, text: "Services", href: "/services" },
    { id: 3, text: "Appointments", href: "/appointments" },
    { id: 4, text: "Contact", href: "/contact" },
    { id: 5, text: "FAQs", href: "faqs" },
  ];

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white font-roboto">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#151817]">
        Swan Psychology
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 m-2 cursor-pointer text-[#151817] text-nowrap font-light"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
        <h1 className="w-full text-3xl font-bold text-[#151817] m-4">
          Swan Psychology
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 duration-300 hover:text-black cursor-pointer text-[#151817] font-light"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationalHeader;
