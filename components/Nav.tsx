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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-end ml-20">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-2xl focus:outline-none md:hidden"
      >
        &#9776;
      </button>
      <div className="hidden md:flex md:flex-row gap-4 ">
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
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40" 
          onClick={handleClose}
        />
      )}
      {isOpen && (
        <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50">
          <div className="flex flex-col gap-4 p-4">
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
        </div>
      )}
    </div>
  );
};

export default Nav;
