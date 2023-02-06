import React from "react";
import img from "../assets/Capture.PNG";
const Clients = () => {
  return (
    <div
      name="clients"
      className="w-full h-screen bg-[#F9FBFD] flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto gap-2">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-[#4D4E5B]">
            What our clients say about us
          </h1>
          <p className="text-2xl text-[#9C9DA5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="">
          <h1 className="text-[#444552] py-12 text-1xl md:text-2xl font-medium">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h1>
          <div className="flex gap-6">
            <img className="h-11 w-11 rounded-full " src={img} alt="" />
            <div>
              <p className="text-xl font-bold">Jenny Wilson</p>
              <p>Vice President</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
