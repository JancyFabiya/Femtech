import React from "react";
import { FaUsers } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { MdEditOff, MdTimer } from "react-icons/md";
import { SiWechat } from "react-icons/si";
import { CgNotes } from "react-icons/cg";

const Solves = () => {
  const product = [
    {
      icon: <FaUsers color="#2405F2" size={25} />,
      name: "Uses Client First",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    },
    {
      icon: <TiTickOutline color="#2405F2" size={25} />,
      name: "Two Free Revision Round",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: <MdEditOff color="#2405F2" size={25} />,
      name: "Template Customization",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: <SiWechat color="#2405F2" size={25} />,
      name: "24/7 Support",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    },
    {
      icon: <MdTimer color="#2405F2" size={25} />,
      name: "Quick Delivery",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    },
    {
      icon: <CgNotes color="#2405F2" size={25} />,
      name: "Hands-on approach",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    },
  ];
  return (
    <div name="solves" className="w-full mt-24 bg-[#f4f6fc]">
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="flex flex-col px-4 py-12 justify-center">
          <span className="text-3xl pt-8 text-slate-300  text-center ">
            Features
          </span>
          <p className="py-3 text-5xl md:text-7xl font-bold text-black text-center">
            Design that solves <br /> problems, one product at <br /> a time
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 ">
          {product.map((p) => (
            <div className="bg-white p-8  ">
              <div class="flex items-center space-x-2 text-base">{p.icon}</div>
              <p class="font-semibold text-lg text-slate-900  ">{p.name}</p>

              <div class="mt-3 text-sm font-medium">
                <p class="text-[#282938]  ">{p.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solves;
