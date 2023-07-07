import React from "react";
import handshake from "../images/handshake.svg";
import backgroundImage from "../images/LandingPage.png";
import bar from "../images/bg_companies.svg";
import near from "../images/near.png";
import nearMob from "../images/near_mobile.svg";
import bnbMob from "../images/bnb_mob.svg";
import bnb from "../images/bnb.png";
import chain from "../images/chain.png";
import chainMob from "../images/chain_mob.svg";
import moon from "../images/moon.png";
import moonMob from "../images/moon_mobile.svg";

const Home = () => {
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="md:px-[64px]">
      <div className=" hidden md:flex pt-20 bg-blend-multiply bg-gradient-to-bl gap-2">
        <div className=" w-[684px] pt-28 h-[356px] flex-col justify-start items-start gap-6 inline-flex">
          <div className=" text-[38px] leading-[45px]">
            <p className="text-white font-raleway font-semibold ">
              Welcome to the{" "}
            </p>
            <p className=" text-[#3c957c] font-raleway font-semibold">
              Future of Connections
            </p>
          </div>
          <div className=" text-gray-500 text-md font-normal ">
            JobDeal is a modern online platform that transforms the traditional
            job market by directly linking Employers and Freelancers in a secure
            and flexible manner.
          </div>
          <div className="gap-4 font-raleway flex">
            <button className=" text-black text-sm font-bold py-1 px-3  bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded-[3px] justify-center items-center ">
              Create Account
            </button>
            <button className=" border-[#43bf9b] border rounded-[3px] justify-center items-center px-2 py-1 text-[#43bf9b] text-sm font-semibold ">
              Show me how it works
            </button>

            {/* //    <button className="border-[#43df9b] px-2 py-[4px] font-semibold pb-[5px] text-sm border text-[#43bf9b]">Create Account</button> */}
          </div>
        </div>

        <div className=" mr-[-2%]  bg-blend-multiply shadow-inner shadow-black w-full md:max-w-[60%] bg-center  ">
          {/* <div className="object-cover  bg-black opacity-70"></div> */}
          <img
            className=" opacity-50  object-cover h-[450px] "
            src={handshake}
            alt=""
          />
        </div>
      </div>

      <div className="w-full items-center justify-between">
        <div className=" bg-[#1c5a554d] bg-gradient-to-b from-[#1c5a55] to-[#1c5a554d] mt-[-4px] gap-2 justify-between md:px-[100px] items-center flex">
          <div className="w-40 pt-4 m-2">
            <img src={near} alt="" />
          </div>
          <div className="w-48 pt-3 m-2">
            <img src={moon} alt="" />
          </div>
          <div className="w-48 pt-2 m-2">
            <img src={chain} alt="" />
          </div>
          <div className="w-44 pt-2 m-2">
            <img src={bnb} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="w-[1704px]  text-white h-[200px] relative bg-gradient-to-b from-emerald-400 via-teal-400 to-teal-400" > */}
      {/* </div> */}

      {/* Mobile view */}

      <div className="w-full md:hidden relative mt-[20px] ">
        <img
          className=" object-cover opacity-70 h-[308px] "
          src={handshake}
          alt=""
        />

        <div className="w-full px-[20px] absolute z-10 mt-[-25px]">
            <div className=" py-[7px] bg-[#1c5a554d] bg-gradient-to-b from-[#1c5a55] to-[#1c5a554d] mt-[-4px] justify-center items-center flex">
              <div className=" m-2">
                <img src={nearMob} alt="" className="w-[58px]"/>
              </div>
              <div className="w-[58px]  m-2">
                <img src={moonMob} alt="" />
              </div>
              <div className="w-[63px] m-2">
                <img src={chainMob} alt="" />
              </div>
              <div className="w-[54px] m-2">
                <img src={bnbMob} alt="" />
              </div>
            </div>
        </div>

        <div className="  text-center  mt-[50px] flex-col justify-center items-center gap-6 inline-flex">
          <div className="px-[20px] text-[32px]">
            <p className="text-white font-raleway font-semibold ">
              Welcome to the{" "}
            </p>
            <p className=" text-[#3c957c] font-raleway font-semibold">
              Future of Connections
            </p>
          </div>
          <div className=" px-[20px] text-stone-300 text-[14px] font-normal leading-tight ">
            JobDeal is a modern online platform that transforms the traditional
            job market by directly linking Employers and Freelancers in a secure
            and flexible manner.
          </div>
          <div className="w-full">
            <div className="gap-4 w-full px-[10px] font-raleway flex">

            <button className=" h-[50px] w-[40%] text-black text-[16px] font-bold bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded-[3px] justify-center items-center ">
              Create Account
            </button>
            <button className=" h-[50px] w-[60%] border-[#43bf9b] text-[16px] font-bold border rounded-[3px] justify-center items-center py-1 text-[#43bf9b]">
              Show me how it works
            </button>
            </div>

            {/* //    <button className="border-[#43df9b] px-2 py-[4px] font-semibold pb-[5px] text-sm border text-[#43bf9b]">Create Account</button> */}
          </div>
        </div>  

      </div>
    </div>
  );
};

export default Home;
