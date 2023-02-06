import React from "react";
import { BsArrowRight } from "react-icons/bs";
import bgImg from "../assets/pexels-photo-3228878.webp";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-white flex flex-col justify-between"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 relative  px-4 pt-12 sm:pt-20">
        <div className="flex flex-col justify-center md:items-start  w-full  ">
          <div className=" bg-[#4548A0] ">
            <img
              className=" w-full h-full mix-blend-overlay"
              src={bgImg}
              alt="/"
            />
            <h1 className="relative bottom-80  text-3xl md:text-3xl font-bold text-white">
              Building stellar websites for early startups
            </h1>
            <p className="relative bottom-80  text-2xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className="bg-[#1c1e53]">
          <div className="pl-12">
            <h1 className="relative  top-12 text-3xl md:text-3xl font-bold text-white">
              Send inquiry
            </h1>
            <p className="relative  top-12 text-2xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className=" grid grid-cols-1 lg:grid-cols-1 relative gap-3 px-4 pt-12 sm:pt-20">
              <input
                type="text"
                className="relative lg:top-16 bg-[#1c1e53] border border-gray-600 lg:w-[24rem] h-[3rem] rounded-lg "
                placeholder="Your Name"
              />
              <input
                type="text"
                className="relative  lg:top-16 bg-[#1c1e53] border border-gray-600 lg:w-[24rem] h-[3rem] rounded-lg "
                placeholder="Email"
              />
              <input
                type="text"
                className="relative  lg:top-16 bg-[#1c1e53] border border-gray-600 lg:w-[24rem] h-[3rem] rounded-lg "
                placeholder="Paste your Figma design URL"
              />
              <button className="relative  lg:top-16 lg:left-10 bg-[#FCD980] border border-gray-600 lg:w-[18rem] h-[3rem] rounded-full font-bold">
                Send an Inquiry
              </button>
              <div className="flex gap-2">
                <p className="text-white py-8 relative  lg:top-16  left-20">
                  Get in touch with us
                </p>
                <BsArrowRight
                  size={23}
                  color="#ffffff"
                  className=" mt-9 relative  lg:top-16 left-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
