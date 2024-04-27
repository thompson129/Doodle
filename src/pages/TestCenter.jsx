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
            <p>
              <b>Create an Account: </b> Visit GED.com and create a MyGED
              account.{" "}
            </p>
            <br />
            <p>
              <b>Schedule Your Test: </b> Login to your MyGED account, select
              Ranong Community College as your testing center, and choose your
              test date and time{" "}
            </p>
            <br />
            <p>
              <b>Prepare:</b> Utilize our preparation classes and resources to
              ready yourself for test day.{" "}
            </p>
            <br />
            <p>
              <b>Test Day: </b>Arrive at the test center with a valid photo ID.
              Our friendly staff will guide you through the check-in process.{" "}
            </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <NavLink
                to="https://ged.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                  ged.com
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full py-16 text-white px-3"
        style={{ backgroundColor: "black" }}
      >
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <p className="text-[#00df9a] font-bold text-2xl">Our Service</p>
            <p>
              <b>Practice Tests: </b> Take advantage of our practice tests to
              familiarize yourself with the exam format and identify areas for
              improvement. account.{" "}
            </p>
            <br />
            <p>
              <b>Flexible Scheduling: </b> Choose flexible test dates and time
              to suit your study plan and schedule.{" "}
            </p>
            <br />
            <p>
              <b>Resouce Center:</b> Access a wealth of resources, including
              study guides, sample questions and test-taking strategies.{" "}
            </p>
          </div>
        </div>
      </div>

      <div
        className="lg:col-span-2 my-4 flex flex-col items-center"
        style={{ marginTop: "5%" }}
      >
        <div className="flex justify-between">
          <img
            className="w-[400px] mx-auto my-4 shadow"
            src={tcenter[1].cover}
            alt="/"
            style={{ marginRight: "5%" }}
          />
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Location
            </h1>
            <p>
              Ranong Community College, GED Test Center by Doodle 300 1 Phet
              Kasem Rd, Bang Rin, Mueang Ranong District, Ranong 85000{" "}
            </p>
            <br />
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Operation Hours
            </h1>
            <p>Monday-Friday: 9:00 – 17:00 </p> <p>Saturday: 9:00 – 14:00</p>
          </div>
        </div>
      </div>

      <div
        className="lg:col-span-2 my-4 flex flex-col items-center"
        style={{ marginTop: "5%" }}
      >
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Contact Us
        </h1>
        <p>
          <b>
            To inquire more information about the GED Test Center at Ranong
            Community College, please contact us:{" "}
          </b>
        </p>
        <br />
        <p>Phone: +66(0)828804008 </p>
        <br />
        <p>Email: ged@doodle.tech </p>
      </div>
    </div>
  );
};
