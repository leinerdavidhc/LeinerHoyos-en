import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { ModeLanguage } from "./ModeLanguage";
import LOGO from "./LOGO";

function Navbar() {
  let Links = [
    { name: "Sobre Mí", link: "#sobremi" },
    { name: "Proyectos", link: "#proyectos" },
    { name: "Contacto", link: "#contacto" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className="sticky left-0 top-0 w-full z-50 headerNav px-2">
      <nav className="flex items-center justify-between p-1">
        <div className="flex justify-between items-center w-full">
          <LOGO/>
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl flex justify-between items-center cursor-pointer md:hidden"
          >
            <i className={`bx ${open ? "bxs-x-circle" : "bx-menu"}`}></i>
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row md:items-center absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in md:bg-transparent bg-primary ${
            open ? "top-14 p-4 gap-6" : "top-[-490px]"
          }`}
        >
          <ul className="flex gap-4 md:flex-row flex-col">
            {Links.map((link) => (
              <li
                key={link.name}
                className=" text-xl whitespace-nowrap md:text-primary text-background font-semibold md:hover:text-secondary md:border-b-2 md:border-transparent hover:border-secondary md:bg-transparent hover:bg-secondary hover:text-primary md:hover:bg-transparent p-2"
              >
                <a href={link.link} className="duration-500 font-Montserrat">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-3 px-2">
            <li className="border-b-2 border-transparent hover:border-secondary">
              <a
                href="https://github.com/leinerdavidhc"
                target="_blank"
                className="hover:text-secondary md:text-primary text-background text-3xl"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li className="border-b-2 border-transparent hover:border-secondary">
              <a
                href="https://linkedin.com/in/leinerdavidhc"
                target="_blank"
                className="hover:text-secondary md:text-primary text-background text-3xl"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
            <li className="flex gap-1 border md:border-primary border-background rounded-lg">
              <ModeToggle />
              <ModeLanguage/>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
