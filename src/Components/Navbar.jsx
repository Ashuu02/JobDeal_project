// import React from "react";
// import navlogo from "../images/navlogo.svg";
// import { useState, useEffect } from "react";

// const Navbar = () => {  const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);
//   const [navBg, setNavBg] = useState("#ecf0f3");
//   const [linkColor, setLinkColor] = useState("#1f2937");

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const handleShadow = () => {
//       if (window.scrollY >= 90) {
//         setShadow(true);
//       } else {
//         setShadow(false);
//       }
//     };
//     window.addEventListener("scroll", handleShadow);
//   }, []);

//   return (
//     <>
//     <div
//       style={{ backgroundColor: `${navBg}` }}
//       className={
//         shadow
//           ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
//           : "fixed w-full h-20 z-[100]"
//       }
//     >
//       <div className="flex fixed top-0 left-0 right-0 bg-[#041410] py-5 px-[64px] justify-between items-center 2xl:px-16">
//         <div className="">
//           <a
//             href="/"
//             onClick={(event) => {
//               event.preventDefault();
//             }}
//             className=""
//           >
//             <img
//               src={navlogo}
//               alt="/"
//               className="cursor-pointer w-[150px] h-[35px] text-white"
//             />
//           </a>
//         </div>
//         <div class=" md:flex  text-sm text-center pt-3 items-center text-white justify-normal">
//             <p class="mr-[1vw] lg:mr-8 mb-4">
//               <a class="cursor-pointer">Find a Job</a>
//             </p>
//             <p class="mx-[1vw] lg:mx-8 mb-4">
//               <a class="cursor-pointer">Hire someone</a>
//             </p>
//             <p class="mx-[1vw] lg:mx-8 mb-4">
//               <a class="cursor-pointer">How It Works</a>
//             </p>
//             <p class="mx-[1vw] lg:mx-8 mb-4">
//               <a class="cursor-pointer">About Us</a>
//             </p>
//             <p class="ml-[1vw] lg:ml-8 mb-4">
//               <a class="cursor-pointer">Partners</a>
//             </p>
//           </div>

//         <div className="gap-4 font-raleway flex">
//         <button className=" cursor-pointer border-[#43bf9b]  text-sm border rounded-[3px] justify-center items-center px-2 py-[4px] text-[#43bf9b] font-semibold ">
//             Login
//             </button>
//           {/* //    <button className="border-[#43df9b] px-2 py-[4px] font-semibold pb-[5px] text-sm border text-[#43bf9b]">Create Account</button> */}
//           <button className=" cursor-pointer text-black text-sm font-bold py-1 px-3 rounded-[3px] bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5]  justify-center items-center ">
//               Create Account
//             </button>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import navlogo from "../images/navlogo.svg";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
// import hamburgerIcon from "../images/hamburger.svg"; // Import the hamburger icon

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [showMenu, setShowMenu] = useState(false); // State variable for showing/hiding mobile menu

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMobileMenu = () => {
    setShowMenu(!showMenu); // Toggle the mobile menu
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full  shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full  z-[100]"
        }
      >
        <div className="flex fixed top-0 left-0 right-0 bg-[#041410] md:py-5 md:px-[64px] py-[20px] px-[20px] justify-between items-center 2xl:px-16">
        
         
            <div 
            className = {
              !showMenu
              ? "md:block flex md:justify-start md:w-auto justify-between w-full  "
              :"hidden"
            }>
              <div className="">
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                  className=""
                >
                  <img
                    src={navlogo}
                    alt="/"
                    className="cursor-pointer w-[150px] h-[35px] text-white"
                  />
                </a>
              </div>

              <div className="md:hidden ">
                <FiMenu
                  size={24}
                  color="white"
                  className="cursor-pointer"
                  onClick={handleMobileMenu}
                />
              </div>
            </div>

            

          {/* Mobile Menu */}
          {showMenu && (
            <div className="mobile-menu w-full md:hidden bg-[#041410] items-center text-center justify-between text-white">
               <div className=" flex justify-end text-right">


              {/* Hamburger Icon */}
              <div className="md:hidden ">
                <FiMenu
                  size={24}
                  color="white"
                  className="cursor-pointer"
                  onClick={handleMobileMenu}
                />
              </div> 
              </div>

              <p className="mb-4">
                <a className="cursor-pointer">Find a Job</a>
              </p>
              <p className="mb-4">
                <a className="cursor-pointer">Hire someone</a>
              </p>
              <p className="mb-4">
                <a className="cursor-pointer">How It Works</a>
              </p>
              <p className="mb-4">
                <a className="cursor-pointer">About Us</a>
              </p>
              <p className="mb-4">
                <a className="cursor-pointer">Partners</a>
              </p>
              <div className="gap-4 justify-center items-center  font-raleway flex">
                <button className="cursor-pointer border-[#43bf9b] text-sm border rounded-[3px] justify-center items-center px-2 py-[4px] text-[#43bf9b] font-semibold">
                  Login
                </button>
                <button className="cursor-pointer text-black text-sm font-bold py-1 px-3 rounded-[3px] bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] justify-center items-center">
                  Create Account
                </button>
              </div>
            </div>
          )}

          <div className="hidden md:flex text-sm text-center pt-3 items-center text-white justify-normal">
            <p className="mr-[1vw] lg:mr-8 mb-4">
              <a className="cursor-pointer">Find a Job</a>
            </p>
            <p className="mx-[1vw] lg:mx-8 mb-4">
              <a className="cursor-pointer">Hire someone</a>
            </p>
            <p className="mx-[1vw] lg:mx-8 mb-4">
              <a className="cursor-pointer">How It Works</a>
            </p>
            <p className="mx-[1vw] lg:mx-8 mb-4">
              <a className="cursor-pointer">About Us</a>
            </p>
            <p className="ml-[1vw] lg:ml-8 mb-4">
              <a className="cursor-pointer">Partners</a>
            </p>
          </div>

          <div className=" hidden gap-4 font-raleway md:flex">
            <button className="cursor-pointer border-[#43bf9b] text-sm border rounded-[3px] justify-center items-center px-2 py-[4px] text-[#43bf9b] font-semibold">
              Login
            </button>
            <button className="cursor-pointer text-black text-sm font-bold py-1 px-3 rounded-[3px] bg-gradient-to-b from-[#43DF9B] to-[#3DBAB5] justify-center items-center">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
