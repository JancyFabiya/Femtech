import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
const Freguantly = () => {
  const item = [
    {
      no: "01",
      name: "How much time does it take?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flag: "true",
    },
    { no: "02", name: "What is your class naming convention?" },
    { no: "03", name: "How do you communicate?" },
    { no: "04", name: "I have a bigger project. Can you handle it?" },
    { no: "05", name: "What is your class naming convention?" },
  ];

  return (
    <div
      name="freguantly"
      className="w-full h-screen bg-[#ffffff] flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto gap-2">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-[#4D4E5B]">
            Frequently asked questions
          </h1>
          <p className="text-[#2405F2] py-8">Contact us for more info </p>
        </div>
        <div className="">
          {item.map((i) => (
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span className="text-blue-600">{i.no}</span>
                  <span className="text-gray-500 ">{i.name}</span>

                  {i.flag ? <ImCross /> : <BsPlusLg />}
                </button>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freguantly;
