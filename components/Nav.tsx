"use client";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-end ml-14">
      <button
        onClick={toggleMenu}
        className={`text-2xl focus:outline-none md:hidden relative 
          p-2 rounded transition-transform duration-300 
          ${isOpen ? "bg-blue-500 text-white scale-90" : "bg-gray-200 hover:bg-gray-300"}`}
      >
        &#9776;
      </button>

      <div className="hidden md:flex md:flex-row gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
          >
            {link.name}
          </a>
        ))}

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="capitalize font-medium hover:text-blue-500 transition-all cursor-pointer"
          >
            KATEGORI
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              <ul className="flex flex-col">
                {categories.map((category, index) => (
                  <li key={index} className="hover:bg-gray-200 transition">
                    <a
                      href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Overlay Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Mobile dengan Animasi */}
      <div
        className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-4 p-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={toggleMenu}
              className={`capitalize font-medium hover:text-blue-500 transition-all cursor-pointer`}
            >
              {link.name}
            </a>
          ))}

          {/* Kategori di Sidebar */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="capitalize font-medium hover:text-blue-500 transition-all cursor-pointer"
            >
              KATEGORI
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white shadow-lg rounded-md">
                <ul className="flex flex-col">
                  {categories.map((category, index) => (
                    <li key={index} className="hover:bg-gray-200 transition">
                      <a
                        href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm text-black"
                        onClick={() => {
                          toggleMenu();
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
