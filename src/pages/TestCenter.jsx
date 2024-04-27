import React from "react";
import { courses, testcenter } from "../components/assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { tcenter } from "../components/assets/data/dummydata";

export const TCenter = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] mx-auto my-4"
          src={tcenter[0].cover}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-3xl">
            First GED Test center in ranong
          </p>
          {/* <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1> */}
          <p>
            The Pearson VUE authorized testing center established by Doodle at
            Ranong Community College will inaugurate the first GED Test Center
            in Ranong, serving an alternative pathway to higher education for
            students from both Thailand and Myanmar who have not finished their
            high school education.
          </p>
        </div>
      </div>

      <div className="w-full py-16 text-black px-3">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              How to register at GED.com?
            </h1>
            <p><b>Create an Account:   </b>   Visit GED.com and create a MyGED account. </p> 
            <br />
            <p><b>Schedule Your Test: </b> Login to your MyGED account, select Ranong Community College as your testing center, and choose your test date and time </p>
            <br />
            <p><b>Prepare:</b> Utilize our preparation classes and resources to ready yourself for test day. </p>
            <br />
            <p><b>Test Day: </b>Arrive at the test center with a valid photo ID. Our friendly staff will guide you through the check-in process. </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <NavLink to="https://ged.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                ged.com
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
