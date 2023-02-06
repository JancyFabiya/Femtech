import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  const work = [
    {
      no: "1",
      name: "Strategy",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      no: "2",
      name: "Wireframing",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      no: "3",
      name: "Design",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      no: "4",
      name: "Development",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
  ];
  return (
    <div
      name="work"
      className="w-full  bg-[#F4F6FC] flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-black">
            How we work
          </h1>
          <p className="text-2xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="flex gap-2">
            <p className="text-[#2405F2] py-8">Get in touch with us </p>
            <BsArrowRight size={23} color="#2405F2" className=" mt-9 " />
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
          {work.map((w) => (
            <div className="  h-44 w-64  ">
              <div className=" absolute  bg-[#2405F2] rounded-md h-12 w-12"></div>
              <div className="  bg-[#FCD980] relative top-7    h-5 w-5 "></div>
              <div className=" relative  bottom-5 left-2 bg-[#5239FA] rounded-md h-10 w-10 "></div>
              <div className="relative bottom-12 left-4  w-5 text-white ">
                {w.no}
              </div>
              <h1 className=" text-1xl md:text-2xl font-bold ">{w.name}</h1>
              <p className="text-gray-900">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
