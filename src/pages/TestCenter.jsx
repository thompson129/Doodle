import React from "react";
import { courses, testcenter } from "../components/assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { tcenter } from "../components/assets/data/dummydata";

export const TCenter = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[300px] mx-auto my-4' src={tcenter[0].cover} alt='/' />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold text-3xl'>First GED Test center in ranong</p>
              {/* <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1> */}
              <p>
              The Pearson VUE authorized testing center established by Doodle at Ranong Community College will inaugurate the first GED Test Center in Ranong, serving an alternative pathway to higher education for students from both Thailand and Myanmar who have not finished their high school education.
              </p>
            </div>
          </div>
        </div>
      );
};
