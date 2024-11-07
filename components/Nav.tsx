"use client";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";

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
  
  return (
    <nav className="flex gap-8 justify-end w-full">
      {links.map((link, index) => {
        return (
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
        );
      })}
    </nav>
  );
};

export default Nav;
