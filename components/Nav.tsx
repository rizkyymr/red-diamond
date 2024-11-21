"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "HOME",
    path: "header",
    href: "/",
  },
  {
    name: "OVERVIEW",
    path: "main",
    href: "/",
  },
  {
    name: "PRODUCTS",
    path: "products",
    href: "/viewall",
  },
  {
    name: "CONTACT",
    path: "footer",
    href: "/",
  },
];

const categories = [
  "Development Board",
  "STMicroelectronics STM32",
  "LoRa Dev Board",
  "Power Supply",
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-xl font-serif text-black">Red Diamonds Lab</h1>
      </div>

      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none md:hidden relative p-2 rounded transition-transform duration-300"
      >
        &#9776;
      </button>

      {/* Link Desktop */}
      <div className="hidden md:flex md:flex-row items-center gap-6">
        {links.map((link, index) => (
          pathname === "/" ? (
            <ScrollLink
              to={link.path}
              key={index}
              smooth={true}
              duration={500}
              offset={-100} // Adjust this value as needed
              className={`capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
            >
              {link.name}
            </ScrollLink>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={`capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
            >
              {link.name}
            </Link>
          )
        ))}

        {/* Dropdown Kategori */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="capitalize font-medium hover:text-blue-500 transition-all cursor-pointer flex items-center gap-2"
          >
            CATEGORIES ▼
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 z-50">
              {categories.map((category, index) => (
                pathname === "/viewall" ? (
                  <ScrollLink
                    to={category.toLowerCase().replace(/ /g, "-")}
                    key={index}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category}
                  </ScrollLink>
                ) : (
                  <Link
                    key={index}
                    href="/viewall"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <div
        className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          {links.map((link, index) => (
            pathname === "/" ? (
              <ScrollLink
                to={link.path}
                key={index}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={toggleMenu}
                className={`capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
              >
                {link.name}
              </ScrollLink>
            ) : (
              <Link
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className={`capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
              >
                {link.name}
              </Link>
            )
          ))}

          {/* Dropdown di Mobile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="capitalize font-medium hover:text-blue-500 transition-all cursor-pointer flex items-center gap-2"
            >
              CATEGORIES ▼
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white shadow-lg rounded-md">
                {categories.map((category, index) => (
                  pathname === "/viewall" ? (
                    <ScrollLink
                      to={category.toLowerCase().replace(/ /g, "-")}
                      key={index}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        toggleMenu();
                      }}
                    >
                      {category}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={index}
                      href="/viewall"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        toggleMenu();
                      }}
                    >
                      {category}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
