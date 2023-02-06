import React from "react";
import bgImg from "../assets/Capture.PNG";
import { BsArrowRight } from "react-icons/bs";
const Main = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#1c1e53] flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-white">
            Building stellar websites for early startups
          </h1>
          <p className="text-2xl text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex gap-10 w-full">
            <button className=" sm:w-[40%] my-4 border py-4 px-2 rounded-full  bg-orange-300 font-semibold">
              View our work{" "}
            </button>
            <div className="flex gap-2">
              <p className="text-gray-300 py-8">View Pricing </p>
              <BsArrowRight size={23} color="#d1d5db" className=" mt-9 " />
            </div>
          </div>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;
