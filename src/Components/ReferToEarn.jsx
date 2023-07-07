import React from "react";
import mac from "../images/mac.png";

const ReferToEarn = () => {
  return (
    <div className="md:px-[64px]">
      <div className="px-[20px] sm:px-0 mt-[70px] md:mt-0">
        <div class="flex pb-[20px] md:pb-0 font-raleway text-center md:text-left flex-col lg:flex-row justify-between md:pl-[32px] lg:items-center mb-24 md:mt-[130px] lg:py-8 bg-[#152A24] rounded-2xl backdrop-blur-[90px] relative overflow-hidden">
          <div class="flex gap-5 flex-col mt-[17px] md:mt-0 lg:ml-[2vw]">
            <p class=" md:leading-[50px] text-white text-[28px] md:text-[40px] font-semibold mb-2">
              Refer a Freelancer.
              <br />
              Earn Rewards.
            </p>

            <p class=" hidden md:block md:w-[80%] text-stone-300 text-[15px] font-normal leading-5 mb-2">
              Earn rewards by inviting friends to join JobDeal. You’ll receive a
              10% commission on their profits as a thank you for supporting our
              community.
            </p>
            <div className=" hidden md:block py-1 px-2 w-[110px] bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded-[3px] justify-center items-center gap-2 inline-flex">
              <div className="MainButton text-black text-[15px] font-bold leading-loose">
                Get Started
              </div>
            </div>
          </div>
          <div class="flex mt-[17px] md:mt-0 relative items-center">
            <div class=" lg:m-0 lg:w-[30rem]">
              <img className="" style={{ width: 400 }} alt="" src={mac} />
            </div>
            <div class=" md:max-w-[270px] lg:w-[28vw] p-1 lg:p-2 border-[#43df9baf] border-2 bg-neutral-800 bg-opacity-10 rounded-md backdrop-blur-[40px] absolute top-[3vw] right-[1vw] md:top-[10vw] lg:top-10 lg:right-[2vw] text-gray-400">
              <h1 class="text-gray-300 font-semibold text-[10px]">
                We have revolutionized the job hunting!
              </h1>
              <p class="font-thin text-[9px] pt-1">
                Our algorithm ensures that you land the best gigs in record
                time.
              </p>
            </div>
            <div class=" md:max-w-[270px] lg:w-[25vw] p-1 lg:p-2 text-[9px] text-gray-400 border-[#43df9baf] border-2 bg-neutral-800 bg-opacity-10 rounded-md backdrop-blur-[40px] absolute left-[2vw] bottom-[6vw] md:bottom-[10vw] lg:bottom-14 lg:left-[-7vw] ">
              <h1 class=" text-gray-300 font-semibold text-[10px]">
                Hire reliable hands with Ease
              </h1>
              <p class="font-thin pt-1">
                We'll connect you with top talent for the job.
              </p>
              <p class="font-thin">
                Experts with the required skills to get it done.
              </p>
            </div>
          </div>

          <p class=" px-[20px] mt-[20px] md:hidden md:w-[80%] text-stone-300 text-[15px] font-normal leading-5 mb-2">
            Earn rewards by inviting friends to join JobDeal. You’ll receive a
            10% commission on their profits as a thank you for supporting our
            community.
          </p>
          {/* <div className=" md:hidden w-[137px] bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded-[3px] justify-center items-center gap-2 inline-flex">
            <div className="MainButton text-black text-[15px] font-bold leading-loose">
              Get Started
            </div>
          </div> */}
          <div className="mt-[20px]">
            <button className=" md:hidden text-black text-[17px] font-bold leading-loose w-[137px] h-[50px] bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded-[3px] justify-center items-center">
              Get Started
            </button>
          </div>

          {/* <div class=" w-[30vw]  xl:w-80 h-full absolute -z-10 right-[7vw] xl:-right-6 -skew-x-[30deg] bg-gradient-to-bl from-[#2B827D] to-[#132D27]"></div>
          <div class="w-[30vw] xl:w-80 h-full absolute -z-10 right-[35vw] xl:right-64 -skew-x-[30deg] bg-gradient-to-bl from-[#2A857F] to-[#132722]"></div>
          <div class="w-[30vw] xl:w-80 h-full absolute -z-10 right-[60vw] xl:right-[33rem] -skew-x-[30deg] bg-gradient-to-bl from-[#1A4A45] to-[#152A24]"></div> */}

          <div class=" w-[30vw]  xl:w-80 h-full absolute -z-10 right-[7vw] xl:-right-6 -skew-x-[30deg] bg-gradient-to-bl from-[#2B827D] to-[#132D27]"></div>
          <div class="w-[30vw] xl:w-80 h-full absolute -z-10 right-[35vw] xl:right-64 -skew-x-[30deg] bg-gradient-to-bl from-[#2A857F] to-[#132722]"></div>
          <div class="w-[30vw] xl:w-80 h-full absolute -z-10 right-[60vw] xl:right-[33rem] -skew-x-[30deg] bg-gradient-to-bl from-[#1A4A45] to-[#152A24]"></div>
        </div>
      </div>
    </div>
  );
};

export default ReferToEarn;
