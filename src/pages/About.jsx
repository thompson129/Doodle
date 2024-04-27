import React from "react";
import aboutImg from "../components/assets/images/about.jpg";
import aboutImgBanner from "../components/assets/images/about-banner.jpg";
import imgs from "../components/assets/images/join1.png";
import { FaBookDead, FaLandmark } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

export const About = () => {
  return (
    <>
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-4xl font-semibold text-black">The Journey</h1>
          </div>
        </div>
      <AboutContent />
    </>
  );
};
export const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    // <section className="mb-16 w-full">
      <div className="container flex md:flex-col">
        <div className="right w-full md:w-full md:mt-full the flex justify-between">
          <div className="heading w-full md:w-full mx-5 md:mx-0">
            <div className="the flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <h1 className="text-2xl font-semibold text-black mx-10">
                Year 1/ Founding
              </h1>
            </div>

            <span className="text-sm w-full mt-2 block leading-6">
              {" "}
              Doodle Co., Ltd. was originally founded in Myanmar since 2017 as
              the sister company of Myanmar, Hand In Hand Marketing Services Co.,
              Ltd.(MHIH) in order to separate and focus on the Education,
              Distribution & Logistics business units of its mother company
              MHIH. In 2018 November, as the result of winning the AKC’s
              ASEAN-KOREA Entrepreneurship Award in Tech-based business by
              Doodle’s mother company, Doodle had formed a new business unit in
              Education Industry. In cooperation with an IT Company from
              Bangalore in India, Doodle played in a key role to develop an
              interactive education online platform for Myanmar’s Basic
              Education Curriculum. Whilst focusing on Myanmar’s Basic
              Education, Doodle performed in Facebook’s Global project of PR &
              Educational CSR Program named “Digital Literacy” with intervention
              of our Educators into the community across Myanmar.
            </span>
          </div>

          <div className="heading w-full md:w-full mx-5 md:mx-0">
            <div className="the flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <h1 className="text-2xl font-semibold text-black mx-10">
                Year 2/ Expanding
              </h1>
            </div>

            <span className="text-sm mt-2 block leading-6">
              {" "}
              In 2021, Doodle launched its very first overseas branch office in
              the city of so-called “Education Hub of CLMVT” countries _ Chiang
              Mai, Thailand. By stepping into the CLMVT countries in SE Asia,
              the Centre for Inclusive Innovation & Entrepreneurship (CIIE) was
              formed in cooperation with Chiang Mai University (CMU) and BEAM
              Education Foundation to incubate and accelerate Young Innovators &
              Entrepreneurs in these countries. With its rapid growth in
              Northern Thailand, Doodle’s Bangkok branch in CBD was opened in
              mid of 2022 enabling the Students and Trainees in Central Thailand
              accessible to join our programs more conveniently.
            </span>
          </div>

          <div className="heading w-full md:w-full mx-5 md:mx-0">
            <div className="the flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <h1 className="text-2xl font-semibold text-black mx-10">
                Year 3/ Optimizing
              </h1>
            </div>

            <span className="text-sm mt-2 block leading-6">
              {" "}
              In addition to higher-education programs, Doodle is expanding its
              education programs into Basic Education Segment and University
              Entry Support Programs in the bordering cities of
              Thailand-Myanmar; Maesot, Tak in the West and Ranong, in the South
              of Thailand in 2024. Doodle Education’s ultimate objective of
              “Regional Education Framework Development Initiative” is coming
              along with its Education Products in the near future. The strong
              and rooted presence of Doodle in Myanmar & Thailand is now
              knocking the Door of ASEAN.
            </span>
          </div>
        </div>
      </div>
    // </section>
  );
};
