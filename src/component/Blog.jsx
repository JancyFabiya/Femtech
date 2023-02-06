import React from "react";
import { BsArrowRight } from "react-icons/bs";
import blog1 from "../assets/blog1.PNG";
import blog2 from "../assets/blog2.PNG";
import blog3 from "../assets/blog3.PNG";

const Blog = () => {
  const blog = [
    {
      img: blog1,
      date: "19 Jan 2022",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: blog2,
      date: "19 Jan 2022",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      img: blog3,
      date: "19 Jan 2022",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
  ];
  return (
    <div
      name="blog"
      className="w-full  bg-[#f4f6fc] flex flex-col  justify-center md:pl-32"
    >
      <h1 className="py-3 text-5xl md:text-7xl font-bold text-black pl-2  ">
        {" "}
        Our blog
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 ">
        {blog.map((b) => (
          <div className=" p-8 w-72 ">
            <div class="flex items-center space-x-2 text-base ">
              <img src={b.img} alt="" className="h-28 w-full" />{" "}
            </div>
            <h4 class="pt-7 font-semibold text-sm text-slate-700">{b.date}</h4>
            <h4 class="font-semibold text-lg text-slate-900">{b.title}</h4>

            <div class="mt-3 text-sm font-medium">
              <a href="#" class="text-[#282938]">
                {b.desc}{" "}
              </a>
            </div>
            <div className="flex gap-2">
              <p className="text-[#282938] py-8">Read More</p>
              <BsArrowRight
                size={23}
                color="#282938
"
                className=" mt-9 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
