import React from "react";
import mail2 from "../images/mail2.svg";
import {
  FaDiscord,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-[60px]">
        <div class="flex flex-col lg:flex-row justify-around items-center mx-2 mb-10">
          <div class=" md:flex justify-evenly items-center mb-4 ml-[32px]">
            <div className="flex justify-center md:justify-start">
              <img
                class="mx-auto md:ml-0"
                src={mail2}
                width={"75px"}
                height={"60px"}
                alt=""
              />
            </div>
            <div class=" md:ml-4 md:text-left text-center">
              <h1 class="text-white text-[20px] md:text-[28px] md:mt-0 mt-[20px] md:m-0">
                Stay Connected
              </h1>
              <p class="text-[#CCCCCC] md:mt-0 mt-[5px] ">
                Subscribe to our news letter
              </p>
            </div>
          </div>

          <div class=" hidden w-5/6 lg:w-1/2 bg-[rgb(32,65,56)] relative rounded-md my-2 mx-4 md:flex">
            <div className="w-full h-12 text-white ">
              <input
                className="w-full h-12 text-white bg-[#204138] p-2 pl-4 font-semibold rounded-md"
                type="email"
                placeholder="Email"
                style={{ "::placeholder": { color: "white" } }}
              />
            </div>
            <button className="bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded justify-center items-center px-2 py-1 m-1 h-auto leading-loose font-bold text-black">
              Subscribe
            </button>
          </div>

          {/* Mobile view of subscribe */}
          <div className="w-full mb-[10px] mt-[20px] md:hidden block px-[20px]">
            <div className="bg-[rgb(32,65,56)] flex relative rounded-md">
              <input
                className="w-full h-12 text-white bg-[#204138] p-2 pl-4 font-semibold rounded-md"
                type="email"
                placeholder="Email"
                style={{ "::placeholder": { color: "white" } }}
              />
              <button className="bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] rounded justify-center items-center px-2 py-1 m-1 h-auto leading-loose font-bold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>





        <div class="bg-[#041410] pt-[10px] md:pt-0 md-pb-0 pb-[20px] text-white">
          
          <div class=" md:px-[64px] md:ml-[-16px] pt-[10px] px-[20px] md:pt-[35px] flex text-[12px] md:text-sm md:items-start md:justify-normal justify-between">
            <p class=" lg:ml-4 lg:mr-8 mb-4">
              <a class="cursor-pointer">About us</a>
            </p>
            <p class="mx-[1vw] lg:mx-8 mb-4">
              <a class="cursor-pointer">WhitePaper</a>
            </p>
            <p class="mx-[1vw] lg:mx-8 mb-4">
              <a class="cursor-pointer">Help & Suppport</a>
            </p>
            <p class="mx-[1vw] lg:mx-8 mb-4">
              <a class="cursor-pointer">Escrow Services</a>
            </p>
          </div>



          <div class="hidden md:flex md:px-[64px] pt-[30px] lg:flex-row justify-between lg:justify-between pl-8">
            <p class="text-[#999999] text-sm text-left lg:text-right">
              Jobdeal © 2023 All Rights Reserved
            </p>
            <div class=" lg:m-0 pb-4 flex text-right items-end leading-loose gap-3">
              <h1 class="lg:text-right lg:inline text-gray-300 text-[12px] md:text-sm">
                Join Our Community
              </h1>
              <div class="flex pt-1 leading-loose gap-3">
                <FaDiscord />
                <FaTelegramPlane />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Mobi;e view  */}
          <div class="md:hidden  lg:flex-row justify-between lg:justify-between ">
            <div className=" px-[20px] lg:m-0 pb-4 flex justify-center leading-loose gap-3">
              <h1 class="lg:text-right lg:inline text-gray-300 text-[12px] md:text-sm">
                Join Our Community
              </h1>
              <div class="flex pt-1 leading-loose gap-3">
                <FaDiscord />
                <FaTelegramPlane />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
            <p class="text-[#999999] text-center text-sm  text-[12px] lg:text-right">
              Jobdeal © 2023 All Rights Reserved
            </p>
          </div>


        </div>
      </div>
    </>
  );
};

export default Footer;
