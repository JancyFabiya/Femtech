import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#1c1e53] text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h1 className="font-bold text-3xl uppercare pt-2">Finsweet</h1>
          <p>
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div></div>
        </div>

        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Lets Talk!</p>
          <p className="py-4">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <AiFillLinkedin size={30} />
          </div>
        </div>
        <div className="p-1 gap-2 bg-[#FCD980] w-[22rem] h-16 flex flex-cols-2 justify-between">
          <div>
            <p className="pt-2 text-[#282938] font-bold">Email me at</p>
            <span className="text-[#282938]">contact@website.com</span>
          </div>
          <div>
            <p className="pt-2 font-bold text-[#282938]">Call us</p>
            <span className="text-[#282938]">0927 6277 28525</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-full px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 bg-white">
        <p className="py-4 text-[#282938]">Copyright 2022, Finsweet.com</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-1">
          <Link to="home" smooth={true} duration={500}>
            <a className="  text-[#282938] hover:text-gray-300  duration-500 text-base">
              Home
            </a>
          </Link>
          <Link to="home" smooth={true} duration={500}>
            <a className="  text-[#282938] hover:text-gray-300  duration-500 text-base">
              About us
            </a>
          </Link>
          <Link to="home" smooth={true} duration={500}>
            <a className="  text-[#282938] hover:text-gray-300  duration-500 text-base">
              Features
            </a>
          </Link>
          <Link to="home" smooth={true} duration={500}>
            <a className="  text-[#282938] hover:text-gray-300  duration-500 text-base">
              Pricing
            </a>
          </Link>
          <Link to="home" smooth={true} duration={500}>
            <a className="  text-[#282938] hover:text-gray-300  duration-500 text-base">
              FAQ
            </a>
          </Link>
          <Link to="home" smooth={true} duration={500}>
            <a className="  text-[#282938] hover:text-gray-300  duration-500 text-base">
              Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
