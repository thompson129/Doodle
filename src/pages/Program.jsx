import React from "react";
import { courses, testcenter } from "../components/assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Courses = () => {
  return (
    <>
      <section className="courses bg-[#F3F4F8] py-16 ">
        <div className="w-4/5 m-auto">
          <div className="heading mb-16">
            <h1 className="text-3xl font-semibold text-black">
            <span className="border-b-2 border-black pb-2">Programs</span>
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
            {courses.map((item) => (
              <div className="box rounded-lg shadow-shadow1 bg-white">
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
                  <img
                    src={item.cover}
                    alt=""
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                </div>
                <div className="text p-3">
                  <h3 className="text-black my-4 font-medium h-10">
                    {item.title}
                  </h3>
                  <div className="user flex items-center">
                    <span className="text-[14px] ml-2 text-justify">
                      {" "}
                      Founded in the heart of Chiang Mai University, the center for Inclusive Innovation & Entrepreneurship (CIIE) is a collaborative effort by three organizations; RCSD, BEAM and Doodle to address the educational crisis and complex socio-economic challenges in the region through the ground-breaking solutions and sustainable models across various industries.
                    </span>
                  </div>
                </div>
                <div
                  to="/"
                  className="flex items-center justify-between border-t border-gray-200 p-3"
                >
                  <NavLink className="text-[14px] ml-2 flex items-center">
                    Expore More <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
            {testcenter.map((item) => (
              <div className="box rounded-lg shadow-shadow1 bg-white">
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
                  <img
                    src={item.cover}
                    alt=""
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                </div>
                <div className="text p-3">
                  <h3 className="text-black my-4 font-medium h-10">
                    {item.title}
                  </h3>
                  <div className="user flex items-center">
                    <span className="text-[14px] ml-2 text-justify">
                      {" "}
                      The Pearson VUE authorized testing center established by
                      Doodle at Ranong Community College will inaugurate the
                      first GED Test Center in Ranong, serving an alternative
                      pathway to higher education for students from both
                      Thailand and Myanmar who have not finished their high
                      school education.
                    </span>
                  </div>
                </div>
                <div
                  to="/"
                  className="flex items-center justify-between border-t border-gray-200 p-3"
                >
                  <NavLink to="/testcenter" className="text-[14px] ml-2 flex items-center">
                    Expore More <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
