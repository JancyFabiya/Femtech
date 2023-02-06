import React from "react";
import { BsArrowRight } from "react-icons/bs";
import f1 from "../assets/f1.PNG";
import f2 from "../assets/f2.PNG";
import f3 from "../assets/f3.PNG";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full  bg-white flex flex-col justify-between"
    >
      <div className="flex flex-row justify-between p-2">
        <h1 className=" text-5xl md:text-7xl font-bold text-black">
          View our projects
        </h1>
        <div className="flex gap-2">
          <p className="text-[#282938] py-8">View More </p>
          <BsArrowRight
            size={23}
            color="#282938
"
            className=" mt-9 "
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 ">
        <img src={f1} alt="" className="w-[52rem] h-[32rem]" />
        <div className="flex flex-col gap-10">
          <img src={f2} alt="" className="w-[22rem] h-[14rem]" />
          <img src={f3} alt="" className="w-[22rem] h-[14rem]" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
