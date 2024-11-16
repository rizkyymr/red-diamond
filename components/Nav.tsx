"use client";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "HOME",
    path: "header"
  },
  {
    name: "OVERVIEW",
    path: "main"
  },
  {
    name: "PRODUCTS",
    path: "products"
  },
  {
    name: "CONTACT",
    path: "footer"
  }
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-end ml-20">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`text-2xl focus:outline-none md:hidden relative 
          p-2 rounded transition-transform duration-300 
          ${isOpen ? "bg-blue-500 text-white scale-90" : "bg-gray-200 hover:bg-gray-300"}`
        }
      >
        &#9776;
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex md:flex-row gap-4">
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            className={`${
              link.path === pathname ? "text-blue-500 border-b-4 border-blue-500" : ""
            } capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar with Animation */}
      <div
        className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-4 p-4">
          {links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={toggleMenu}
              className={`${
                link.path === pathname ? "text-blue-500 border-b-4 border-blue-500" : ""
              } capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
