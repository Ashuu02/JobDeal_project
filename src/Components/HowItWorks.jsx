import React from "react";
import arrow from "../images/arrow.png";

const HowItWorks = () => {
  return (
    <div className="md:px-[64px]">
      <div className="sm:w-full px-[20px] md:px-0 font-raleway mt-[70px] md:mt-[130px] text-center items-center sm:justify-between">
        <p className="md:text-[45px] text-[28px] font-raleway font-semibold text-gray-200">
          How it Works
        </p>

        <div class=" relative font-raleway flex lg:justify-around lg:items-center flex-col lg:flex-row my-6 m-auto text-white">
          <div className=" md:text-left text-center">
            <h1 class="text-xl font-raleway font-semibold mb-1">
              As a Freelancer
            </h1>
            <p class="text-sm text-gray-300 md:w-[264px] font-thin mb-4">
              Find and connect with paying clients & secure work opportunities.
            </p>
          </div>
          <div class=" w-20 hidden p-2 m-2 md:block">
            <img src={arrow} alt="" />
          </div>
          <div class=" md:hidden absolute rotate-45 lg:block">

            <img src={arrow} alt="" className="rotate-90 w-[40px] ml-[100px] mt-[25px]"/>
          </div>
          <div
            // style={{ width: 1050 }}
            className="bg-[#152A24] lg:w-[1050px] text-xs md:py-0 py-3 font-raleway text-gray-300 text-start items-center px-10 flex justify-between overflow-hidden rounded-md relative"
          >
            <ul class="md:max-w-[60%] sm:relative z-30">
              <li class=" mb-1  list-decimal">
                {" "}
                Create an account, set your location and fill out your profile.
              </li>
              <li class=" my-1  list-decimal list-outside">
                {" "}
                Go to your homepage, and browse through the “Available Near You”
                section, to apply for jobs.
              </li>
              <li class=" mt-1 list-decimal">
                {" "}
                Apply to any suitable job if you’re available got the skills,
                and get hired.
              </li>
            </ul>
            <div class=" w-44 absolute z-10  left-[70vw] sm:relative sm:left-20 h-32 -skew-x-[30deg] bg-gradient-to-bl from-[#1A4741] to-[#132C26]"></div>
          </div>
        </div>

        <div className=" font-raleway flex lg:justify-around lg:items-center flex-col lg:flex-row my-6 m-auto text-white">
        <div className=" md:text-left text-center">
            <h1 class="text-xl font-raleway font-semibold mb-1">
            As a Client
            </h1>
            <p class="text-sm text-gray-300 md:w-[264px] font-thin mb-4">Find and hire top freelance talent for any project, big or small.
            </p>
          </div>
          <div class=" w-20 hidden p-2 m-2 md:block">
            <img src={arrow} alt="" />
          </div>
          <div class=" md:hidden absolute rotate-45 lg:block">

            <img src={arrow} alt="" className="rotate-90 w-[40px] ml-[100px] mt-[25px]"/>
          </div>
          <div
            // style={{ width: 1050 }}
            class="bg-[#152A24] lg:w-[1050px] text-xs py-3 font-raleway text-gray-300 text-start items-center px-10 flex justify-between overflow-hidden rounded-md relative"
          >
            <ul class=" md:max-w-[60%] sm:relative z-30">
              <li class=" mb-1  list-decimal">
                {" "}
                Create an account, specify your location, and complete your
                profile.
              </li>
              <li class=" my-1  list-decimal list-outside">
                {" "}
                On your homepage, click on “Post a job”, and fill out the
                required details (shouldn’t take 5 minutes)
              </li>
              <li class=" mt-1 list-decimal">
                {" "}
                Create the Job Post and receive offers from available and
                skilled freelancers
              </li>
            </ul>
            <div class=" hidden md:flex w-20 absolute  left-[20vw] sm:relative sm:left-20 h-32 -skew-x-[30deg] bg-gradient-to-bl from-[#1A4741] to-[#132C26]"></div>
            <div class="w-40 h-full bg-gradient-to-bl from-[#18423C] to-[#132D27] -skew-x-[30deg] absolute right-16 z-10  "></div>
            <div class="w-40 h-full bg-gradient-to-bl from-[#20635E] to-[#143B35] absolute right-0 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
