import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About us", link: "work" },
    { name: "Features", link: "projects" },
    { name: "Pricing", link: "solves" },
    { name: "FAQ", link: "clients" },
    { name: "Blog", link: "blog" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full  sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0 ">
      <div className="md:flex items-center justify-between bg-[#1c1e53] py-4 md:px-10 px-7 ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
                text-gray-300"
        >
          <a href="/">
            <h1>Finsweet</h1>
          </a>
        </div>

        <div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl bg-gray-600 absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#1c1e53] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-1 ${
              open ? "top:8rem " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 font-semibold"
              >
                <div className="  h-10 text-center rounded-lg pt-1 flex flex-row ">
                  <Link to={link.link} smooth={true} duration={500}>
                    <a className="  text-gray-300 hover:text-white duration-500 text-base">
                      {" "}
                      {link.name}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
            <li className="md:ml-8 text-xl md:my-0 my-7 font-semibold  ">
              <div className="   h-10 text-center rounded-lg pt-1 flex flex-row ">
                <Link to="contact" smooth={true} duration={500}>
                  <a className=" text-gray-300 hover:text-white duration-500 text-base rounded-full border-2 border-indigo-300 p-4 pt-1">
                    Contact us
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
